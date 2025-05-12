import type { Project, ResumeData } from './types';

// SRE/DevOps Focused Projects
export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Automated Kubernetes Deployment Pipeline',
    description: 'Built a CI/CD pipeline using GitHub Actions and Argo CD for automated testing, building, and deployment of microservices to a Kubernetes cluster.',
    imageUrl: 'https://picsum.photos/seed/cicd-kubernetes/600/400',
    imageHint: 'ci cd pipeline',
    tags: ['CI/CD', 'Kubernetes', 'Argo CD', 'GitHub Actions', 'Docker', 'DevOps'],
    repoUrl: '#', // Replace with actual URL
  },
  {
    id: '2',
    title: 'Infrastructure as Code for AWS Landing Zone',
    description: 'Developed Terraform modules to provision a secure and scalable AWS multi-account structure (Landing Zone) following best practices.',
    imageUrl: 'https://picsum.photos/seed/terraform-aws/600/400',
    imageHint: 'cloud infrastructure code',
    tags: ['Terraform', 'AWS', 'IaC', 'Security', 'Networking', 'SRE'],
    repoUrl: '#', // Replace with actual URL
  },
  {
    id: '3',
    title: 'Centralized Logging & Monitoring Stack',
    description: 'Implemented an EFK (Elasticsearch, Fluentd, Kibana) stack on Kubernetes for centralized logging, and integrated Prometheus/Grafana for application and infrastructure monitoring.',
    imageUrl: 'https://picsum.photos/seed/monitoring-stack/600/400',
    imageHint: 'dashboard monitoring',
    tags: ['Monitoring', 'Logging', 'EFK Stack', 'Prometheus', 'Grafana', 'Kubernetes'],
    liveUrl: '#', // Link to a demo dashboard if possible
  },
   {
    id: '4',
    title: 'Serverless API Cost Optimization',
    description: 'Analyzed and optimized AWS Lambda and API Gateway usage for a high-traffic serverless application, reducing monthly costs by 25% through architectural changes.',
    imageUrl: 'https://picsum.photos/seed/serverless-api/600/400',
    imageHint: 'cloud cost optimization',
    tags: ['Serverless', 'AWS Lambda', 'API Gateway', 'Cost Optimization', 'CloudWatch', 'Python'],
    repoUrl: '#',
  },
];

// SRE/DevOps Focused Resume Data
export const resumeData: ResumeData = {
  summary: "Results-driven SRE/DevOps Engineer with 5+ years of experience automating infrastructure, building robust CI/CD pipelines, and ensuring the reliability and scalability of cloud-native applications. Proven ability to reduce downtime, improve performance, and optimize cloud costs using modern DevOps practices and tools.",
  experience: [
    {
      id: 'exp1',
      title: 'Site Reliability Engineer (SRE)',
      company: 'CloudScale Dynamics',
      period: 'Mar 2021 - Present',
      description: [
        'Designed and implemented automated CI/CD pipelines using Jenkins & GitLab CI, reducing deployment times by 60%.',
        'Managed Kubernetes clusters (EKS) across multiple environments, ensuring high availability (99.99%) and performance.',
        'Developed Infrastructure as Code (IaC) using Terraform for AWS resource provisioning and management.',
        'Established comprehensive monitoring and alerting systems using Prometheus, Grafana, and Datadog.',
        'Led incident response efforts, conducted post-mortems, and implemented preventative measures.',
      ],
    },
    {
      id: 'exp2',
      title: 'DevOps Engineer',
      company: 'AgileSoft Solutions',
      period: 'Jul 2018 - Feb 2021',
      description: [
        'Automated server configuration and application deployment using Ansible.',
        'Migrated legacy applications to Docker containers, improving portability and resource utilization.',
        'Managed build systems and artifact repositories (e.g., Nexus, Artifactory).',
        'Collaborated with development teams to integrate security scanning (SAST/DAST) into pipelines.',
        'Implemented centralized logging solutions using the ELK stack.',
      ],
    },
  ],
  education: [
    {
      id: 'edu1',
      title: 'Bachelor of Science in Information Technology',
      institution: 'Tech State University',
      period: '2014 - 2018',
      description: ['Focus on Network Engineering and System Administration.', 'AWS Certified Solutions Architect – Associate (2019).'],
    },
    // Optional: Add another relevant certification or degree if applicable
    // {
    //   id: 'edu2',
    //   title: 'Certified Kubernetes Administrator (CKA)',
    //   institution: 'Cloud Native Computing Foundation (CNCF)',
    //   period: '2022',
    //   description: ['Demonstrated expertise in Kubernetes administration.'],
    // },
  ],
  skills: [
    // Cloud Platforms
    'AWS (EC2, EKS, S3, Lambda, VPC, IAM, CloudFormation)',
    'GCP (GKE, Compute Engine)',
    'Azure (AKS, VMs)', // Add specific Azure services if relevant

    // IaC & Configuration Management
    'Terraform',
    'Ansible',
    'CloudFormation',
    // 'Pulumi', // Optional

    // Containerization & Orchestration
    'Docker',
    'Kubernetes (K8s)',
    'Helm',

    // CI/CD
    'Jenkins',
    'GitLab CI',
    'GitHub Actions',
    'Argo CD', // If applicable

    // Monitoring & Logging
    'Prometheus',
    'Grafana',
    'Datadog',
    'ELK/EFK Stack (Elasticsearch, Logstash/Fluentd, Kibana)',
    'CloudWatch',

    // Scripting & Programming
    'Bash',
    'Python',
    'Go (Golang)', // Often used in SRE tools

    // Operating Systems & Networking
    'Linux (Ubuntu, CentOS)',
    'TCP/IP',
    'DNS',
    'Load Balancing (Nginx, HAProxy, ELB)',

    // Databases & Others
    'SQL (PostgreSQL, MySQL)',
    'NoSQL (Redis, MongoDB)', // As applicable
    'Git',
    'Agile Methodologies',
    'Incident Management',
    'Security Best Practices',
  ],
  downloadUrl: '/alex_johnson_sre_resume.pdf', // Replace with actual PDF path and name
};
