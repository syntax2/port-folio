// use server'

/**
 * @fileOverview An AI agent that generates a professional bio based on user's skills and experience.
 *
 * - generateProfessionalBio - A function that handles the bio generation process.
 * - GenerateProfessionalBioInput - The input type for the generateProfessionalBio function.
 * - GenerateProfessionalBioOutput - The return type for the generateProfessionalBio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProfessionalBioInputSchema = z.object({
  name: z.string().describe('The name of the person.'),
  title: z.string().describe('The current job title.'),
  company: z.string().describe('The current company of the person.'),
  skills: z.string().describe('A comma separated list of skills.'),
  experience: z.string().describe('A summary of the person\'s work experience.'),
  tone: z.enum(['formal', 'casual']).default('formal').describe('The tone of the bio.'),
});
export type GenerateProfessionalBioInput = z.infer<typeof GenerateProfessionalBioInputSchema>;

const GenerateProfessionalBioOutputSchema = z.object({
  bio: z.string().describe('The generated professional bio.'),
});
export type GenerateProfessionalBioOutput = z.infer<typeof GenerateProfessionalBioOutputSchema>;

export async function generateProfessionalBio(input: GenerateProfessionalBioInput): Promise<GenerateProfessionalBioOutput> {
  return generateProfessionalBioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProfessionalBioPrompt',
  input: {schema: GenerateProfessionalBioInputSchema},
  output: {schema: GenerateProfessionalBioOutputSchema},
  prompt: `You are a professional bio writer. You will generate a professional bio for the following person:

Name: {{{name}}}
Title: {{{title}}}
Company: {{{company}}}
Skills: {{{skills}}}
Experience: {{{experience}}}

The tone should be {{{tone}}}.

Write a professional bio for this person:
`,
});

const generateProfessionalBioFlow = ai.defineFlow(
  {
    name: 'generateProfessionalBioFlow',
    inputSchema: GenerateProfessionalBioInputSchema,
    outputSchema: GenerateProfessionalBioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
