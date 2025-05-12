"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';
import { explainTechConceptAction, type ExplainTechState } from "@/lib/actions";
import { SectionWrapper } from "@/components/section-wrapper";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, BrainCircuit, Lightbulb, BookOpen } from "lucide-react";

const initialState: ExplainTechState = {
  success: false,
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 } },
};

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const resultCardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// List of concepts matching the enum in the Genkit flow
const techConcepts = [
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
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full mt-4">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Lightbulb className="mr-2 h-4 w-4" />}
      Explain Concept
    </Button>
  );
}

export function ExplainTechSection() {
  const [state, formAction] = useFormState(explainTechConceptAction, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [explanation, setExplanation] = useState<string | undefined>(undefined);
  const [selectedConcept, setSelectedConcept] = useState<string>("");

  useEffect(() => {
    if (state.message && !state.success) {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
      setExplanation(undefined); // Clear explanation on error
    }
    if (state.success && state.explanation) {
      setExplanation(state.explanation);
      toast({
         title: "Explanation Ready!",
         description: `AI explanation for ${selectedConcept} generated.`,
      });
      // Optionally reset selection: formRef.current?.reset(); setSelectedConcept("");
    } else if (!state.success && state.explanation === undefined) {
       setExplanation(undefined); // Clear explanation if explicitly undefined
    }
  }, [state, toast, selectedConcept]);

  const handleConceptChange = (value: string) => {
      setSelectedConcept(value);
      // Reset previous explanation when concept changes
      setExplanation(undefined);
      // Clear any previous error messages related to the form
      // Note: This doesn't directly clear useFormState errors, but resets visual state
      if (state.message || state.errors) {
          // A bit of a hack to reset state visually; ideal solution might involve resetting form state properly
          // For now, just clear the displayed explanation
      }
  };

  return (
    <SectionWrapper id="explain-tech" title="Explain My Tech">
      <motion.div
        className="grid lg:grid-cols-2 gap-8 items-start"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={cardVariants}>
          <Card className="shadow-xl backdrop-blur-sm bg-card/80 border border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <BrainCircuit className="mr-2 h-6 w-6 text-primary" />
                SRE/DevOps Concept Explainer
              </CardTitle>
              <CardDescription>
                Select a concept, and our AI will provide a simple explanation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} action={formAction} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="concept-select">Select Concept</Label>
                  <Select name="concept" onValueChange={handleConceptChange} value={selectedConcept}>
                    <SelectTrigger id="concept-select" aria-describedby={state.errors?.concept ? "concept-select-error" : undefined}>
                      <SelectValue placeholder="Choose a concept..." />
                    </SelectTrigger>
                    <SelectContent>
                      {techConcepts.map(concept => (
                        <SelectItem key={concept} value={concept}>{concept}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {state.errors?.concept && <p id="concept-select-error" className="text-sm text-destructive">{state.errors.concept.join(", ")}</p>}
                  {state.errors?._form && <p className="text-sm text-destructive mt-2">{state.errors._form.join(", ")}</p>}
                </div>
                 <SubmitButton />
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={resultCardVariants}>
          <Card className="shadow-xl sticky top-24 backdrop-blur-sm bg-card/80 border border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <BookOpen className="mr-2 h-6 w-6 text-primary"/>
                AI Explanation
              </CardTitle>
              <CardDescription>The explanation will appear here.</CardDescription>
            </CardHeader>
            <CardContent className="min-h-[200px] bg-muted/30 rounded-md p-4 relative">
              {useFormStatus().pending && (
                <div className="flex items-center justify-center h-full">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  <p className="ml-2 text-muted-foreground">Generating...</p>
                </div>
              )}
              {explanation && (
                <motion.p
                  className="text-foreground whitespace-pre-wrap text-sm leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {explanation}
                </motion.p>
              )}
              {!useFormStatus().pending && !explanation && (
                <p className="text-muted-foreground italic text-center pt-16">Select a concept and click "Explain Concept" to see the AI explanation.</p>
              )}
            </CardContent>
             {/* Footer can be added if needed, e.g., for copy button */}
             {/* {explanation && (
              <CardFooter className="pt-4">
                  <Button variant="outline" onClick={handleCopyToClipboard} className="w-full transition-transform hover:scale-105">
                    <ClipboardCopy className="mr-2 h-4 w-4" /> Copy Explanation
                  </Button>
              </CardFooter>
            )} */}
          </Card>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
