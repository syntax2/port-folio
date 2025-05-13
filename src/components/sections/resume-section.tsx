
"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { resumeData } from '@/lib/data';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Briefcase, GraduationCap, Lightbulb, CheckCircle } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30, scale: 0.95 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const skillVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
      ease: "easeOut"
    },
  }),
};

export function ResumeSection() {
  return (
    <SectionWrapper id="resume" title="My Journey & Expertise">
      <motion.div 
        className="max-w-4xl mx-auto space-y-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <p className="text-lg text-muted-foreground mb-8 text-balance leading-relaxed">{resumeData.summary}</p>
          {resumeData.downloadUrl && (
            <Button asChild size="lg" className="transition-all duration-300 ease-out transform hover:scale-105 shadow-lg hover:shadow-primary/40 focus-visible-ring">
                <Link href={resumeData.downloadUrl} download target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" /> Download Full Resume
                </Link>
            </Button>
           )}
        </motion.div>

        {/* Experience Section */}
        <motion.div variants={itemVariants}>
          <Card className="shadow-xl transition-all duration-300 hover:shadow-primary/10 backdrop-blur-sm bg-card/90 border border-border/70 dark:bg-card/80 dark:border-border/50 rounded-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl md:text-3xl font-semibold text-primary">
                <Briefcase className="mr-3 h-7 w-7" /> Professional Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {resumeData.experience.map((exp, index) => (
                <motion.div 
                  key={exp.id} 
                  className="border-l-4 border-accent pl-5 py-4 hover:bg-secondary/50 dark:hover:bg-secondary/30 rounded-r-lg transition-all duration-300 ease-out"
                  custom={index}
                  variants={itemVariants} // Re-using for staggered reveal within section
                >
                  <h3 className="text-xl font-semibold text-foreground mb-0.5">{exp.title}</h3>
                  <p className="text-md font-medium text-primary/90 dark:text-primary/80">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Education Section */}
        <motion.div variants={itemVariants}>
          <Card className="shadow-xl transition-all duration-300 hover:shadow-primary/10 backdrop-blur-sm bg-card/90 border border-border/70 dark:bg-card/80 dark:border-border/50 rounded-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl md:text-3xl font-semibold text-primary">
                <GraduationCap className="mr-3 h-7 w-7" /> Education & Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {resumeData.education.map((edu, index) => (
                <motion.div 
                  key={edu.id} 
                  className="border-l-4 border-accent pl-5 py-4 hover:bg-secondary/50 dark:hover:bg-secondary/30 rounded-r-lg transition-all duration-300 ease-out"
                  custom={index}
                  variants={itemVariants}
                >
                  <h3 className="text-xl font-semibold text-foreground mb-0.5">{edu.title}</h3>
                  <p className="text-md font-medium text-primary/90 dark:text-primary/80">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                  {edu.description.length > 0 && (
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {edu.description.map((desc, i) => (
                        <li key={i} className="flex items-start">
                           <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 shrink-0" />
                           <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills Section */}
        <motion.div variants={itemVariants}>
          <Card className="shadow-xl transition-all duration-300 hover:shadow-primary/10 backdrop-blur-sm bg-card/90 border border-border/70 dark:bg-card/80 dark:border-border/50 rounded-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl md:text-3xl font-semibold text-primary">
                <Lightbulb className="mr-3 h-7 w-7" /> Core Competencies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {resumeData.skills.map((skill, index) => (
                  <motion.span 
                    key={skill} 
                    className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground/90 px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-all duration-200 cursor-default transform hover:scale-105 hover:shadow-md"
                    custom={index}
                    variants={skillVariants} // Changed from itemVariants for distinct animation
                    initial="hidden"
                    animate="visible" 
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
