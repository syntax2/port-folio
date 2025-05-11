import { resumeData } from '@/lib/data';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Briefcase, GraduationCap, Star } from 'lucide-react';
import Link from 'next/link';

export function ResumeSection() {
  return (
    <SectionWrapper id="resume" title="My Resume">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground mb-6 text-balance">{resumeData.summary}</p>
          <Button asChild size="lg">
            <Link href={resumeData.downloadUrl} download="YourName_Resume.pdf">
              <Download className="mr-2 h-5 w-5" /> Download PDF
            </Link>
          </Button>
        </div>

        {/* Experience Section */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Briefcase className="mr-3 h-7 w-7 text-primary" /> Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {resumeData.experience.map((exp) => (
              <div key={exp.id} className="border-l-4 border-primary pl-4 py-2 hover:bg-secondary/50 rounded-r-md transition-colors">
                <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                <p className="text-md text-muted-foreground">{exp.company} | {exp.period}</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-muted-foreground">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Education Section */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <GraduationCap className="mr-3 h-7 w-7 text-primary" /> Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {resumeData.education.map((edu) => (
              <div key={edu.id} className="border-l-4 border-primary pl-4 py-2 hover:bg-secondary/50 rounded-r-md transition-colors">
                <h3 className="text-xl font-semibold text-foreground">{edu.title}</h3>
                <p className="text-md text-muted-foreground">{edu.institution} | {edu.period}</p>
                 <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-muted-foreground">
                  {edu.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Star className="mr-3 h-7 w-7 text-primary" /> Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {resumeData.skills.map((skill) => (
                <span key={skill} className="bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
