'use server';
/**
 * @fileOverview An AI agent that explains SRE/DevOps concepts in simple terms.
 *
 * - explainTechConcept - A function that handles the explanation generation.
 * - ExplainTechConceptInput - The input type for the explainTechConcept function.
 * - ExplainTechConceptOutput - The return type for the explainTechConcept function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define allowed concepts to prevent arbitrary input exploitation
const allowedConcepts = z.enum([
  "Kubernetes",
  "Docker",
  "Terraform",
  "Ansible",
  "CI/CD",
  "Monitoring",
  "Logging",
  "Load Balancing",
  "Microservices",
  "Serverless",
  "Infrastructure as Code",
  "Site Reliability Engineering (SRE)",
  "DevOps Culture",
  "GitOps",
  "Cloud Computing (General)",
]);

const ExplainTechConceptInputSchema = z.object({
  concept: allowedConcepts.describe('The SRE/DevOps concept to explain.'),
});
export type ExplainTechConceptInput = z.infer<typeof ExplainTechConceptInputSchema>;

const ExplainTechConceptOutputSchema = z.object({
  explanation: z.string().describe('A simple explanation of the concept.'),
});
export type ExplainTechConceptOutput = z.infer<typeof ExplainTechConceptOutputSchema>;

export async function explainTechConcept(input: ExplainTechConceptInput): Promise<ExplainTechConceptOutput> {
  return explainTechConceptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainTechConceptPrompt',
  input: {schema: ExplainTechConceptInputSchema},
  output: {schema: ExplainTechConceptOutputSchema},
  prompt: `You are an expert SRE/DevOps engineer skilled at explaining complex topics simply.

Explain the following concept in 2-3 concise sentences, as if explaining to someone new to the field. Avoid jargon where possible or explain it briefly if necessary.

Concept: {{{concept}}}

Provide the explanation:
`,
  config: { // Adjust safety settings if needed, default is usually fine for explanations
    // safetySettings: [ ... ] 
  }
});

const explainTechConceptFlow = ai.defineFlow(
  {
    name: 'explainTechConceptFlow',
    inputSchema: ExplainTechConceptInputSchema,
    outputSchema: ExplainTechConceptOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!; // Assume output is always generated for valid concepts
  }
);
