"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';
import { generateBioAction, type AIBioGeneratorState } from "@/lib/actions";
import { SectionWrapper } from "@/components/section-wrapper";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Wand2, ClipboardCopy, Sparkles } from "lucide-react";

const initialState: AIBioGeneratorState = {
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


function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
      Generate Bio
    </Button>
  );
}

export function AIBioGeneratorSection() {
  const [state, formAction] = useFormState(generateBioAction, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [generatedBio, setGeneratedBio] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "AI Bio Generator" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
    }
    if (state.success && state.bio) {
      setGeneratedBio(state.bio);
      // formRef.current?.reset(); // Optionally reset form on success
    } else if (!state.success && state.bio === undefined) {
      setGeneratedBio(undefined);
    }
  }, [state, toast]);

  const handleCopyToClipboard = () => {
    if (generatedBio) {
      navigator.clipboard.writeText(generatedBio)
        .then(() => {
          toast({ title: "Copied!", description: "Bio copied to clipboard." });
        })
        .catch(err => {
          toast({ title: "Error", description: "Failed to copy bio.", variant: "destructive" });
          console.error('Failed to copy: ', err);
        });
    }
  };

  return (
    <SectionWrapper id="ai-bio" title="AI Bio Generator">
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
                <Sparkles className="mr-2 h-6 w-6 text-primary" />
                Create Your Professional Bio
              </CardTitle>
              <CardDescription>
                Fill in your details, and our AI will craft a compelling bio for you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} action={formAction} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name-ai">Full Name</Label>
                    <Input id="name-ai" name="name" placeholder="e.g., Jane Doe" aria-describedby={state.errors?.name ? "name-ai-error" : undefined} />
                    {state.errors?.name && <p id="name-ai-error" className="text-sm text-destructive">{state.errors.name.join(", ")}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title-ai">Current Title</Label>
                    <Input id="title-ai" name="title" placeholder="e.g., Software Engineer" aria-describedby={state.errors?.title ? "title-ai-error" : undefined} />
                    {state.errors?.title && <p id="title-ai-error" className="text-sm text-destructive">{state.errors.title.join(", ")}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-ai">Current Company</Label>
                  <Input id="company-ai" name="company" placeholder="e.g., Tech Innovations Inc." aria-describedby={state.errors?.company ? "company-ai-error" : undefined} />
                  {state.errors?.company && <p id="company-ai-error" className="text-sm text-destructive">{state.errors.company.join(", ")}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="skills-ai">Key Skills (comma-separated)</Label>
                  <Input id="skills-ai" name="skills" placeholder="e.g., React, Node.js, Python" aria-describedby={state.errors?.skills ? "skills-ai-error" : undefined} />
                  {state.errors?.skills && <p id="skills-ai-error" className="text-sm text-destructive">{state.errors.skills.join(", ")}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience-ai">Brief Experience Summary</Label>
                  <Textarea id="experience-ai" name="experience" placeholder="Summarize your work experience..." rows={4} aria-describedby={state.errors?.experience ? "experience-ai-error" : undefined} />
                  {state.errors?.experience && <p id="experience-ai-error" className="text-sm text-destructive">{state.errors.experience.join(", ")}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tone-ai">Tone</Label>
                  <Select name="tone" defaultValue="formal">
                    <SelectTrigger id="tone-ai" aria-describedby={state.errors?.tone ? "tone-ai-error" : undefined}>
                      <SelectValue placeholder="Select tone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="formal">Formal</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                    </SelectContent>
                  </Select>
                  {state.errors?.tone && <p id="tone-ai-error" className="text-sm text-destructive">{state.errors.tone.join(", ")}</p>}
                </div>
                {state.errors?._form && <p className="text-sm text-destructive">{state.errors._form.join(", ")}</p>}
                <SubmitButton />
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={resultCardVariants}>
          <Card className="shadow-xl sticky top-24 backdrop-blur-sm bg-card/80 border border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Generated Bio</CardTitle>
              <CardDescription>Your AI-crafted professional bio will appear here.</CardDescription>
            </CardHeader>
            <CardContent className="min-h-[200px] bg-muted/30 rounded-md p-4 relative">
              {useFormStatus().pending && !generatedBio && (
                <div className="flex items-center justify-center h-full">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  <p className="ml-2 text-muted-foreground">Generating...</p>
                </div>
              )}
              {generatedBio && (
                <motion.p 
                  className="text-foreground whitespace-pre-wrap text-sm leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {generatedBio}
                </motion.p>
              )}
              {!useFormStatus().pending && !generatedBio && (
                <p className="text-muted-foreground italic text-center pt-16">Your bio will be shown here once generated.</p>
              )}
            </CardContent>
            {generatedBio && (
              <CardFooter className="pt-4">
                  <Button variant="outline" onClick={handleCopyToClipboard} className="w-full transition-transform hover:scale-105">
                    <ClipboardCopy className="mr-2 h-4 w-4" /> Copy to Clipboard
                  </Button>
              </CardFooter>
            )}
          </Card>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
