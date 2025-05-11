"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import { submitContactForm, type ContactFormState } from "@/lib/actions";
import { SectionWrapper } from "@/components/section-wrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send, MessageSquarePlus } from "lucide-react";

const initialState: ContactFormState = {
  message: "",
  success: false,
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const formItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};


function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto transition-transform hover:scale-105">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
      Send Message
    </Button>
  );
}

export function ContactSection() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Success!" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
      if (state.success) {
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Card className="max-w-2xl mx-auto shadow-xl backdrop-blur-sm bg-card/80 border border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <MessageSquarePlus className="mr-2 h-6 w-6 text-primary"/>
              Contact Me
            </CardTitle>
            <CardDescription>
              Have a project in mind or just want to say hi? Fill out the form below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form ref={formRef} action={formAction} className="space-y-6">
              <motion.div className="space-y-2" custom={0} variants={formItemVariants}>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your Name" required aria-describedby={state.errors?.name ? "name-error" : undefined} />
                {state.errors?.name && <p id="name-error" className="text-sm text-destructive">{state.errors.name.join(", ")}</p>}
              </motion.div>
              <motion.div className="space-y-2" custom={1} variants={formItemVariants}>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="your.email@example.com" required aria-describedby={state.errors?.email ? "email-error" : undefined} />
                {state.errors?.email && <p id="email-error" className="text-sm text-destructive">{state.errors.email.join(", ")}</p>}
              </motion.div>
              <motion.div className="space-y-2" custom={2} variants={formItemVariants}>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Your message..." rows={5} required aria-describedby={state.errors?.message ? "message-error" : undefined} />
                {state.errors?.message && <p id="message-error" className="text-sm text-destructive">{state.errors.message.join(", ")}</p>}
              </motion.div>
              <motion.div custom={3} variants={formItemVariants}>
                <SubmitButton />
              </motion.div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </SectionWrapper>
  );
}
