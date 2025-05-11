"use client";

import { motion } from 'framer-motion';
import { resumeData } from '@/lib/data';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Briefcase, GraduationCap, Star, Lightbulb } from 'lucide-react';
import Link from 'next/link';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
      ease: "easeOut"
    },
  }),
};

export function ResumeSection() {
  return (
    <SectionWrapper id="resume" title="My Resume">
      <motion.div 
        className="max-w-4xl mx-auto space-y-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <p className="text-lg text-muted-foreground mb-6 text-balance">{resumeData.summary}</p>
          {resumeData.downloadUrl && (
            <Button asChild size="lg" className="transition-transform hover:scale-105">
                <Link href={resumeData.downloadUrl} download target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" /> Download PDF
                </Link>
            </Button>
           )}
        </motion.div>

        {/* Experience Section */}
        <motion.div variants={itemVariants}>
          <Card className="shadow-xl transition-all hover:shadow-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Briefcase className="mr-3 h-7 w-7 text-primary" /> Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {resumeData.experience.map((exp, index) => (
                <motion.div 
                  key={exp.id} 
                  className="border-l-4 border-primary pl-4 py-2 hover:bg-secondary/50 rounded-r-md transition-colors duration-300"
                  custom={index}
                  variants={itemVariants}
                >
                  <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-md text-muted-foreground">{exp.company} | {exp.period}</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-muted-foreground">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Education Section */}
        <motion.div variants={itemVariants}>
          <Card className="shadow-xl transition-all hover:shadow-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <GraduationCap className="mr-3 h-7 w-7 text-primary" /> Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {resumeData.education.map((edu, index) => (
                <motion.div 
                  key={edu.id} 
                  className="border-l-4 border-primary pl-4 py-2 hover:bg-secondary/50 rounded-r-md transition-colors duration-300"
                  custom={index}
                  variants={itemVariants}
                >
                  <h3 className="text-xl font-semibold text-foreground">{edu.title}</h3>
                  <p className="text-md text-muted-foreground">{edu.institution} | {edu.period}</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-muted-foreground">
                    {edu.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills Section */}
        <motion.div variants={itemVariants}>
          <Card className="shadow-xl transition-all hover:shadow-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Lightbulb className="mr-3 h-7 w-7 text-primary" /> Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {resumeData.skills.map((skill, index) => (
                  <motion.span 
                    key={skill} 
                    className="bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-all duration-200 cursor-default transform hover:scale-110"
                    custom={index}
                    variants={skillVariants}
                    initial="hidden" // Initial for each skill, viewport handles parent
                    animate="visible" // Animate for each skill, viewport handles parent
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
