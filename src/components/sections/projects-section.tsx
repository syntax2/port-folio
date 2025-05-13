// src/components/sections/projects-section.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '@/lib/data';
import type { Project } from '@/lib/types';
import { SectionWrapper } from '@/components/section-wrapper';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Server, Terminal, BarChart3, GitBranchPlus, Cloud } from 'lucide-react';
import { HoverEffect, CardTitle as EffectCardTitle, CardDescription as EffectCardDescription } from "@/components/card-hover-effect"; // Updated import

function getTechIcon(tags: string[]) {
  const lowerTags = tags.map(tag => tag.toLowerCase());
  if (lowerTags.includes('ci/cd') || lowerTags.includes('gitops') || lowerTags.includes('jenkins') || lowerTags.includes('github actions')) return <GitBranchPlus className="h-5 w-5 text-primary" />;
  if (lowerTags.includes('monitoring') || lowerTags.includes('prometheus') || lowerTags.includes('grafana') || lowerTags.includes('datadog')) return <BarChart3 className="h-5 w-5 text-primary" />;
  if (lowerTags.includes('iac') || lowerTags.includes('terraform') || lowerTags.includes('ansible') || lowerTags.includes('cloudformation')) return <Terminal className="h-5 w-5 text-primary" />;
  if (lowerTags.includes('kubernetes') || lowerTags.includes('docker') || lowerTags.includes('container')) return <Server className="h-5 w-5 text-primary" />;
  if (lowerTags.includes('aws') || lowerTags.includes('gcp') || lowerTags.includes('azure') || lowerTags.includes('cloud')) return <Cloud className="h-5 w-5 text-primary" />;
  return <Server className="h-5 w-5 text-primary" />;
}

function ProjectCardContent({ project }: { project: Project }) {
  return (
    <div className="flex flex-col h-full">
      <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" // group-hover from HoverEffect
          data-ai-hint={project.imageHint || 'project infrastructure'}
        />
        <div className="absolute top-2 right-2 bg-card/70 backdrop-blur-sm p-1.5 rounded-md shadow-md">
          {getTechIcon(project.tags)}
        </div>
      </div>
      <EffectCardTitle className="text-xl mb-1 group-hover:text-primary-foreground">{project.title}</EffectCardTitle>
      <EffectCardDescription className="text-sm mb-3 min-h-[60px] text-balance group-hover:text-primary-foreground/80">{project.description}</EffectCardDescription>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.slice(0, 4).map((tag) => (
          <Badge 
            key={tag} 
            variant="secondary" 
            className="text-xs bg-secondary/70 group-hover:bg-primary-foreground/20 group-hover:text-primary-foreground transition-colors"
          >
            {tag}
          </Badge>
        ))}
      </div>
      <div className="mt-auto flex gap-2 justify-end pt-2">
        {project.liveUrl && (
          <Button asChild variant="outline" size="sm" className="bg-transparent border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground group-hover:border-primary-foreground/70 group-hover:text-primary-foreground group-hover:bg-primary-foreground/10">
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1.5 h-4 w-4" /> Live
            </Link>
          </Button>
        )}
        {project.repoUrl && (
          <Button asChild variant="default" size="sm" className="bg-primary/90 text-primary-foreground hover:bg-primary group-hover:bg-primary-foreground group-hover:text-primary">
            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1.5 h-4 w-4" /> GitHub
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const projectsForHoverEffect = projectsData.map(project => ({
    title: project.title,
    description: project.description,
    // Link is handled by buttons inside content for more flexibility
    // link: project.repoUrl || project.liveUrl, 
    content: <ProjectCardContent project={project} />
  }));

  return (
    <SectionWrapper id="projects" title="Featured Projects">
      <HoverEffect items={projectsForHoverEffect} />
    </SectionWrapper>
  );
}
