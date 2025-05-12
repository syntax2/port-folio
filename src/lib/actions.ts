
"use server";

import { z } from "zod";
import { explainTechConcept } from "@/ai/flows/explain-tech-concept-flow";
import type { ExplainTechConceptInput } from "@/ai/flows/explain-tech-concept-flow";


// Contact Form Schema remains the same
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type ContactFormState = {
  message: string;
  success: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
    _form?: string[]; // Added for general form errors
  };
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your inputs.",
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Simulate sending an email or saving to a database
  console.log("Contact form submitted:", validatedFields.data);
  // Placeholder for actual submission logic
  try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
      // throw new Error("Simulated server error"); // Uncomment to test error handling
  } catch (error) {
      console.error("Contact form submission error:", error);
      return {
          message: "Failed to send message due to a server error. Please try again later.",
          success: false,
          errors: { _form: ["Server error during submission."] }
      }
  }


  return {
    message: "Thank you for your message! I'll get back to you soon.",
    success: true,
  };
}


// --- Removed AI Bio Generator ---


// Explain Tech Concept
// This schema is used internally for validation and should not be exported directly for the form state type.
// It should align with the allowedConcepts in the Genkit flow.
const explainTechConceptFormSchema = z.object({
  // Ensure the concept submitted is one of the allowed values.
  // The list should ideally be dynamically fetched or kept in sync with the flow's enum.
  concept: z.string().min(1, "Please select a concept."),
  // Example validation if using the enum directly:
  // concept: z.enum([
  //   "Kubernetes", "Docker", "Terraform", "Ansible", "CI/CD", "Monitoring",
  //   "Logging", "Load Balancing", "Microservices", "Serverless",
  //   "Infrastructure as Code", "Site Reliability Engineering (SRE)",
  //   "DevOps Culture", "GitOps", "Cloud Computing (General)"
  // ], { required_error: "Please select a concept." }),
});


export type ExplainTechState = {
  explanation?: string;
  message?: string;
  success: boolean;
  errors?: {
    concept?: string[];
    _form?: string[]; // For general errors from the AI or action itself
  };
};

export async function explainTechConceptAction(
  prevState: ExplainTechState,
  formData: FormData
): Promise<ExplainTechState> {

  const rawFormData = {
    concept: formData.get("concept"),
  };

  const validatedFields = explainTechConceptFormSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please select a concept.",
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    // The Genkit flow input expects the specific enum type, but here we pass the validated string.
    // The flow itself uses Zod to ensure it's one of the allowed values.
    const inputData: ExplainTechConceptInput = {
      concept: validatedFields.data.concept as ExplainTechConceptInput['concept'], // Cast needed if not using enum in form schema
    };

    const result = await explainTechConcept(inputData);

    if (result && result.explanation) {
      return {
        explanation: result.explanation,
        success: true,
        // message: "Explanation generated successfully!", // Optional success message
      };
    }
    // This case should ideally not happen if the AI prompt guarantees an output
    return {
      message: "AI model did not return an explanation. Please try again.",
      success: false,
       errors: { _form: ["AI failed to generate explanation."] },
    }
  } catch (error) {
    console.error("Error explaining tech concept:", error);
    let errorMessage = "Failed to get explanation due to an unexpected error. Please try again.";
    if (error instanceof Error) {
       // Provide more specific feedback if possible, e.g., check Genkit logs for details
      errorMessage = `Failed to get explanation: ${error.message}. Please check the selected concept or try again later.`;
    }
    return {
      message: errorMessage, // Pass error message for display
      success: false,
      errors: { _form: [errorMessage] },
    };
  }
}
