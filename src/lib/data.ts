import type { Project, ResumeData } from './types';

// SRE/DevOps Focused Projects
export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Automated Kubernetes Deployment Pipeline',
    description: 'Built a CI/CD pipeline using GitHub Actions and Argo CD for automated testing, building, and deployment of microservices to a Kubernetes cluster, significantly improving deployment frequency and reliability.',
    imageUrl: 'https://picsum.photos/seed/cicd-kubernetes/600/400',
    imageHint: 'ci cd pipeline',
    tags: ['CI/CD', 'Kubernetes', 'Argo CD', 'GitOps', 'GitHub Actions', 'Docker', 'DevOps'],
    repoUrl: '#', // Replace with actual URL
  },
  {
    id: '2',
    title: 'Infrastructure as Code for AWS Landing Zone',
    description: 'Developed reusable Terraform modules to provision a secure, scalable, and compliant AWS multi-account structure (Landing Zone), enforcing best practices for governance and cost management.',
    imageUrl: 'https://picsum.photos/seed/terraform-aws/600/400',
    imageHint: 'cloud infrastructure code',
    tags: ['Terraform', 'AWS', 'IaC', 'Security', 'Networking', 'SRE', 'Governance'],
    repoUrl: '#', // Replace with actual URL
  },
  {
    id: '3',
    title: 'Centralized Logging & Monitoring Stack',
    description: 'Implemented and managed an EFK (Elasticsearch, Fluentd, Kibana) stack on Kubernetes for centralized logging, integrated with Prometheus/Grafana for application/infra monitoring and actionable alerting.',
    imageUrl: 'https://picsum.photos/seed/monitoring-stack/600/400',
    imageHint: 'dashboard monitoring logs',
    tags: ['Monitoring', 'Logging', 'EFK Stack', 'Prometheus', 'Grafana', 'Alerting', 'Kubernetes'],
    liveUrl: '#', // Link to a demo dashboard if possible
  },
   {
    id: '4',
    title: 'Serverless API Cost Optimization Initiative',
    description: 'Led an initiative to analyze and optimize AWS Lambda and API Gateway usage for a high-traffic serverless application, reducing monthly infrastructure costs by over 25% through architectural refactoring and tuning.',
    imageUrl: 'https://picsum.photos/seed/serverless-api/600/400',
    imageHint: 'cloud cost optimization chart',
    tags: ['Serverless', 'AWS Lambda', 'API Gateway', 'Cost Optimization', 'CloudWatch', 'Performance Tuning', 'Python'],
    repoUrl: '#',
  },
  {
    id: '5',
    title: 'Chaos Engineering Platform Development',
    description: 'Contributed to the design and development of an internal Chaos Engineering platform using LitmusChaos integrated with Kubernetes. Enabled controlled failure injection (pod deletes, network latency) to proactively identify and fix resilience issues.',
    imageUrl: 'https://picsum.photos/seed/chaos-engineering/600/400',
    imageHint: 'chaos monkey system failure',
    tags: ['Chaos Engineering', 'Resilience', 'Kubernetes', 'LitmusChaos', 'Go', 'Testing', 'SRE'],
    repoUrl: '#', // Replace with actual URL
  },
  {
    id: '6',
    title: 'Zero-Downtime Critical Database Migration',
    description: 'Successfully migrated a mission-critical multi-terabyte PostgreSQL database cluster to a new major version on AWS RDS with zero application downtime using logical replication, rigorous data validation, and a carefully orchestrated cutover process.',
    imageUrl: 'https://picsum.photos/seed/database-migration/600/400',
    imageHint: 'database server cluster',
    tags: ['Database Migration', 'High Availability', 'PostgreSQL', 'AWS RDS', 'Zero Downtime', 'Replication', 'Data Validation'],
    // liveUrl: '#', // Potentially link to a blog post/case study
  },
];

// SRE/DevOps Focused Resume Data
export const resumeData: ResumeData = {
  summary: "Results-driven SRE/DevOps Engineer with 5+ years of experience automating infrastructure, building robust CI/CD pipelines, implementing Chaos Engineering practices, and ensuring the reliability and scalability of cloud-native applications. Proven ability to reduce downtime, improve performance, and optimize cloud costs using modern DevOps practices and tools.", // Enhanced summary
  experience: [
    {
      id: 'exp1',
      title: 'Senior Site Reliability Engineer', // Updated title
      company: 'CloudScale Dynamics',
      period: 'Mar 2021 - Present',
      description: [
        'Led the design and implementation of automated CI/CD pipelines using GitLab CI & Argo CD, reducing deployment lead time by 60% and increasing deployment frequency.', // Updated impact
        'Managed and scaled Kubernetes clusters (EKS) across production and staging, ensuring high availability (>99.99%) and implementing auto-scaling policies.', // More specific
        'Developed and maintained Infrastructure as Code (IaC) using Terraform for provisioning and managing AWS resources adhering to security and compliance standards.', // Added detail
        'Established comprehensive observability stacks using Prometheus, Grafana, Thanos, and Loki for metrics, tracing, and logging.', // More specific tools
        'Championed and implemented Chaos Engineering experiments to validate system resilience and identify weaknesses.', // Added Chaos Engineering
        'Led incident response efforts for critical production issues, facilitated blameless post-mortems, and drove remediation actions.', // Strengthened language
      ],
    },
    {
      id: 'exp2',
      title: 'DevOps Engineer',
      company: 'AgileSoft Solutions',
      period: 'Jul 2018 - Feb 2021',
      description: [
        'Automated infrastructure configuration and application deployment across environments using Ansible playbooks and roles.',
        'Containerized legacy monolithic applications using Docker, improving deployment consistency and resource utilization.',
        'Managed build systems (Jenkins) and artifact repositories (Nexus, Artifactory), optimizing build times.',
        'Collaborated with development teams to integrate security scanning (SAST/DAST) and compliance checks into CI/CD pipelines.',
        'Implemented and maintained centralized logging solutions using the ELK stack for troubleshooting and analysis.',
      ],
    },
  ],
  education: [
    {
      id: 'edu1',
      title: 'Bachelor of Science in Information Technology',
      institution: 'Tech State University',
      period: '2014 - 2018',
      description: [
          'Concentration in Network Engineering and Systems Administration.',
          'Minor in Cybersecurity fundamentals.', // Added minor
        ],
    },
    {
      id: 'edu2', // Added certification
      title: 'Certified Kubernetes Administrator (CKA)',
      institution: 'Cloud Native Computing Foundation (CNCF)',
      period: '2022',
      description: ['Demonstrated expertise in Kubernetes cluster administration, configuration, and troubleshooting.'],
    },
     {
      id: 'edu3', // Added certification
      title: 'AWS Certified DevOps Engineer – Professional',
      institution: 'Amazon Web Services',
      period: '2021',
      description: ['Validated technical expertise in provisioning, operating, and managing distributed application systems on the AWS platform.'],
    },
  ],
  skills: [
    // Cloud Platforms
    'AWS (EKS, EC2, S3, RDS, Lambda, VPC, IAM, CloudFormation, CloudWatch)', // More specific AWS
    'GCP (GKE, Compute Engine, Cloud SQL)', // More specific GCP
    'Azure (Basic understanding of AKS, VMs)', // Specify level

    // IaC & Configuration Management
    'Terraform (Advanced)', 'Ansible', 'CloudFormation', 'Packer',

    // Containerization & Orchestration
    'Docker', 'Kubernetes (K8s)', 'Helm', 'Service Mesh (Istio/Linkerd - Basic)', // Added Service Mesh

    // CI/CD & GitOps
    'GitLab CI', 'GitHub Actions', 'Jenkins', 'Argo CD', 'FluxCD', // Added Flux

    // Monitoring, Logging & Observability
    'Prometheus', 'Grafana', 'Thanos', 'Loki', 'Tempo', // Added Tempo for tracing
    'Datadog', 'EFK/ELK Stack', 'OpenTelemetry', // Added OpenTelemetry

    // Scripting & Programming
    'Python', 'Bash', 'Go (Golang)', // Emphasized Go

    // Operating Systems & Networking
    'Linux (Ubuntu, CentOS, Alpine)', 'TCP/IP', 'DNS', 'HTTP/S', 'Load Balancing (Nginx, HAProxy, ELB/ALB)',

    // Databases & Caching
    'PostgreSQL', 'MySQL', 'Redis', 'MongoDB (Basic)', // Specify level

    // Security & Compliance
    'Security Best Practices', 'SAST/DAST Tools', 'Secrets Management (Vault)', // Added Vault

    // Other Concepts
    'Chaos Engineering', 'Incident Management', 'Blameless Post-mortems', 'Agile/Scrum', 'Git', 'SLO/SLI Definition',
  ],
  downloadUrl: '/alex_johnson_sre_devops_resume.pdf', // Updated file name
};
