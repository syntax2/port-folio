import type { Project, ResumeData } from './types';

// SRE/DevOps Focused Projects for Ashish Kadian
export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Automated Kubernetes Deployment Pipeline (CI/CD)',
    description: 'Engineered a robust CI/CD pipeline using Jenkins and Argo CD for automated testing, building, and deployment of microservices to Amazon EKS, achieving a 70% reduction in deployment time and enhancing release reliability.',
    imageUrl: 'https://picsum.photos/seed/kubernetes-cicd/600/400',
    imageHint: 'ci cd kubernetes',
    tags: ['Kubernetes', 'CI/CD', 'Jenkins', 'Argo CD', 'Amazon EKS', 'Docker', 'DevOps', 'GitOps'],
    repoUrl: 'https://github.com/syntax2/', // Placeholder, use actual if available
  },
  {
    id: '2',
    title: 'Scalable AWS Infrastructure with Terraform & CloudFormation',
    description: 'Provisioned and managed a secure multi-account AWS environment from scratch using Terraform and CloudFormation, implementing VPCs, subnets, IAM roles, and security groups following scalability and security best practices.',
    imageUrl: 'https://picsum.photos/seed/aws-terraform-iac/600/400',
    imageHint: 'cloud infrastructure diagram',
    tags: ['AWS', 'Terraform', 'CloudFormation', 'IaC', 'VPC', 'IAM', 'Security', 'Scalability'],
    repoUrl: 'https://github.com/syntax2/', // Placeholder
  },
  {
    id: '3',
    title: 'End-to-End Observability Stack Implementation',
    description: 'Deployed and configured a comprehensive observability solution using Prometheus, Grafana, and ELK Stack (Elasticsearch, Logstash, Kibana) for real-time monitoring, centralized logging, and proactive alerting, reducing downtime by 40%.',
    imageUrl: 'https://picsum.photos/seed/observability-stack/600/400',
    imageHint: 'monitoring dashboard charts',
    tags: ['Monitoring', 'Logging', 'Prometheus', 'Grafana', 'ELK Stack', 'Alerting', 'DevOps', 'AWS CodeDeploy'],
    liveUrl: 'https://www.ashishkadian.tech', // Placeholder
  },
  {
    id: '4',
    title: 'Automated Cloud Security & Compliance Framework',
    description: 'Designed and implemented a security automation framework using Ansible, achieving 100% audit clearance for 40+ compliance requirements. Integrated WAF, RBAC, and secrets management to strengthen system security across diverse environments.',
    imageUrl: 'https://picsum.photos/seed/cloud-security-automation/600/400',
    imageHint: 'security compliance dashboard',
    tags: ['Cloud Security', 'Ansible', 'Automation', 'Compliance', 'WAF', 'RBAC', 'DevSecOps'],
    repoUrl: 'https://github.com/syntax2/', // Placeholder
  },
  {
    id: '5',
    title: 'Optimized Cloud-Native Application Performance',
    description: 'Led optimization efforts for Python-based (Django/FastAPI) applications on Kubernetes, reducing container service boot time by 73% and improving overall application response times. Optimized cloud infrastructure costs by 25% through right-sizing and auto-scaling.',
    imageUrl: 'https://picsum.photos/seed/app-performance-optimization/600/400',
    imageHint: 'performance graph application',
    tags: ['Performance Optimization', 'Kubernetes', 'Docker', 'Python', 'Django', 'FastAPI', 'Cost Optimization', 'AWS'],
    // liveUrl: 'https://www.ashishkadian.tech', // Placeholder
  },
];

// Resume Data for Ashish Kadian
export const resumeData: ResumeData = {
  summary: "Site Reliability Engineer (SRE) and DevOps specialist with proven expertise in AWS cloud services, infrastructure automation, and scalable system design. Proven track record of reducing provisioning time by 70% using Terraform and CloudFormation, and enhancing deployment efficiency through Kubernetes-based CI/CD pipelines. Strong focus on reliability, security, and performance, integrating SRE principles with modern DevOps practices to support mission-critical systems. Ranked All India #2 in the GATE CSE Scholarship Test, demonstrating top-tier technical proficiency and problem-solving excellence.",
  experience: [
    {
      id: 'exp1',
      title: 'Site Reliability Engineer, Cloud Security & Operations',
      company: 'Teradata',
      period: '07/2023 - Present',
      description: [
        'Deployed Jenkins on Amazon EKS with a fully automated CI/CD pipeline using CodeDeploy, cutting deployment time by 70% and achieving 99.9% reliability for production workloads.',
        'Reduced container service boot time by 73% (from 8 to 3 minutes) by optimizing orchestration logic and configurations.',
        'Provisioned new AWS account from scratch using Terraform (VPCs, subnets, IAM, security groups), applying security and scalability best practices.',
        'Built and owned an internal Operations Portal (Angular + FastAPI), enabling 100+ users to manage cloud operations with 70% improved efficiency.',
        'Achieved 20% AWS cost savings via environment consolidation, right-sizing, and mandatory tagging enforcement (SCP).',
        'Strengthened cloud infrastructure security with IAM policies, WAF, CIS compliance, and automated audits.',
        'Deployed Datadog for centralized monitoring and logging, reducing production debugging time by 40%.',
        'Managed uptime, scaling, and automated backups/patches for AWS services including EC2, S3, ALB, RDS, Redis, and Kafka.',
        'Containerized applications using Docker and orchestrated deployments on Amazon EKS, enhancing scalability and reliability.',
      ],
    },
    {
      id: 'exp2',
      title: 'DevOps Engineer',
      company: 'IIT Bombay',
      period: '08/2022 - 06/2023',
      description: [
        'Designed and implemented a security automation framework using Ansible, covering 40+ compliance requirements, achieving 100% audit clearance and reducing Critical and high vulnerabilities.',
        'Architected and deployed Kubernetes-based CI/CD pipelines for Django applications, reducing deployment time by 50% and improving rollback efficiency.',
        'Automated infrastructure provisioning with Terraform and Ansible, cutting manual setup time by 70% for compute-intensive research environments.',
        'Strengthened system security by 60% using WAF, RBAC, and encrypted secrets across web, database, and infrastructure layers.',
        'Deployed observability stack (Prometheus + Grafana for monitoring; ELK for logging), reducing incident detection time from 15 minutes to under 2 minutes.',
        'Optimized cloud infrastructure costs by 25% through right-sizing, auto-scaling, and resource utilization analysis, while maintaining SLA performance.',
      ],
    },
    {
      id: 'exp3',
      title: 'Devops Engineer (Intern)',
      company: 'Sachtak',
      period: '02/2022 - 07/2022',
      description: [
        'Automated CI/CD pipelines with Jenkins and GitHub Actions, cutting deploy time by 80%.',
        'Containerized applications using Docker and deployed to AWS ECS, eliminating "works on my machine" errors.',
        'Provisioned infra with Terraform (VPCs, EC2, RDS, SGs), slashing environment spin-up from days to minutes.',
        'Integrated Prometheus and Grafana for real-time monitoring.',
      ],
    },
  ],
  education: [
    {
      id: 'edu1',
      title: 'Post Graduate Diploma in Computer Science',
      institution: 'IIIT Bangalore',
      period: '02/2024 - 02/2025',
      description: ['Specializing in cloud computing, distributed systems, and advanced algorithms.'],
    },
    {
      id: 'edu2',
      title: 'Bachelor of Technology (BTech) in Computer Science',
      institution: 'JECRC University',
      period: '06/2016 - 06/2020',
      description: ['Focus on software engineering, data structures, and database management systems.'],
    },
  ],
  skills: [
    // Cloud Platforms
    'AWS', 'Docker', 'Kubernetes', 'Terraform',
    // IaC & Configuration Management
    'Ansible', 'CloudFormation',
    // CI/CD
    'Gitlab CI', 'Jenkins', 'GitHub Actions',
    // Programming & Scripting
    'Python', 'Bash', 'FastAPI',
    // Monitoring & Logging
    'Datadog', 'Prometheus', 'Grafana', 'ELK Stack',
    // Databases
    'MySQL', 'Redis',
    // Web Servers & Others
    'Nginx', 'Azure (Basic)',
    // Concepts
    'Cloud Security', 'System Design', 'DevSecOps', 'Infrastructure Hardening', 'Continuous Compliance', 'Threat Modeling'
  ],
  downloadUrl: '/ashish_kadian_resume.pdf', // Placeholder, ensure this file exists in /public
};
