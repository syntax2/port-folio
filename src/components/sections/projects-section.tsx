"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projectsData } from '@/lib/data';
import type { Project } from '@/lib/types';
import { SectionWrapper } from '@/components/section-wrapper';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Code, Globe, BarChart3, Bot } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

function getTechIcon(tags: string[]) {
  if (tags.some(tag => tag.toLowerCase().includes('web3') || tag.toLowerCase().includes('solidity'))) return <BarChart3 className="h-4 w-4 text-primary/70" />;
  if (tags.some(tag => tag.toLowerCase().includes('ai') || tag.toLowerCase().includes('ml'))) return <Bot className="h-4 w-4 text-primary/70" />;
  if (tags.some(tag => tag.toLowerCase().includes('rust') || tag.toLowerCase().includes('node'))) return <Code className="h-4 w-4 text-primary/70" />;
  return <Globe className="h-4 w-4 text-primary/70" />;
}


function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div variants={cardVariants} className="h-full">
      <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full group bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30">
        <CardHeader className="p-0 relative">
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              data-ai-hint={project.imageHint || 'project abstract'}
            />
            <div className="absolute top-2 right-2 bg-background/70 backdrop-blur-sm p-1.5 rounded-md shadow">
              {getTechIcon(project.tags)}
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <CardTitle className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</CardTitle>
          <CardDescription className="text-muted-foreground text-sm mb-4 min-h-[60px] text-balance">{project.description}</CardDescription>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 5).map((tag) => ( // Show up to 5 tags
              <Badge key={tag} variant="secondary" className="text-xs transition-colors group-hover:bg-accent group-hover:text-accent-foreground">{tag}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex gap-2 justify-end">
          {project.liveUrl && (
            <Button asChild variant="outline" size="sm" className="transition-transform group-hover:scale-105">
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </Link>
            </Button>
          )}
          {project.repoUrl && (
            <Button asChild variant="default" size="sm" className="transition-transform group-hover:scale-105">
              <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" title="My Projects">
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
