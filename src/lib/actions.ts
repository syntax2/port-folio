"use server";

import { z } from "zod";
import { generateProfessionalBio } from "@/ai/flows/generate-professional-bio";
import type { GenerateProfessionalBioInput } from "@/ai/flows/generate-professional-bio";

// Contact Form
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
  // In a real app, you would integrate an email service or database here.
  // For example:
  // try {
  //   await sendEmail(validatedFields.data);
  // } catch (error) {
  //   return { message: "Failed to send message.", success: false };
  // }
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

  return {
    message: "Thank you for your message! I'll get back to you soon.",
    success: true,
  };
}


// AI Bio Generator
export const aiBioGeneratorSchema = z.object({
  name: z.string().min(1, "Name is required."),
  title: z.string().min(1, "Title is required."),
  company: z.string().min(1, "Company is required."),
  skills: z.string().min(1, "Skills are required (e.g., React, Node.js, Python)."),
  experience: z.string().min(10, "Experience summary must be at least 10 characters."),
  tone: z.enum(["formal", "casual"], { required_error: "Tone is required."}),
});


export type AIBioGeneratorState = {
  bio?: string;
  message?: string;
  success: boolean;
  errors?: Partial<Record<keyof GenerateProfessionalBioInput | "_form", string[]>>;
};

export async function generateBioAction(
  prevState: AIBioGeneratorState,
  formData: FormData
): Promise<AIBioGeneratorState> {
  
  const rawFormData = {
    name: formData.get("name"),
    title: formData.get("title"),
    company: formData.get("company"),
    skills: formData.get("skills"),
    experience: formData.get("experience"),
    tone: formData.get("tone"),
  };

  const validatedFields = aiBioGeneratorSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your inputs.",
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    // Ensure data is correctly typed for the AI flow
    const inputData: GenerateProfessionalBioInput = {
      name: validatedFields.data.name,
      title: validatedFields.data.title,
      company: validatedFields.data.company,
      skills: validatedFields.data.skills,
      experience: validatedFields.data.experience,
      tone: validatedFields.data.tone as "formal" | "casual",
    };

    const result = await generateProfessionalBio(inputData);
    if (result && result.bio) {
      return {
        bio: result.bio,
        success: true,
        message: "Bio generated successfully!",
      };
    }
    return {
      message: "AI model did not return a bio. Please try again.",
      success: false,
    }
  } catch (error) {
    console.error("Error generating bio:", error);
    let errorMessage = "Failed to generate bio due to an unexpected error. Please try again.";
    if (error instanceof Error) {
      errorMessage = `Failed to generate bio: ${error.message}. Please try again.`;
    }
    return {
      message: errorMessage,
      success: false,
      errors: { _form: [errorMessage] },
    };
  }
}
