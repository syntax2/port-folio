export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface ResumeEntry {
  id: string;
  title: string;
  company?: string; // For experience
  institution?: string; // For education
  period: string;
  description: string[];
}

export interface ResumeData {
  summary: string;
  experience: ResumeEntry[];
  education: ResumeEntry[];
  skills: string[];
  downloadUrl: string; // Type is already string
}
