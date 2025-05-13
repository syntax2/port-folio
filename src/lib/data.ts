import type { Project, ResumeData } from './types';

// SRE/DevOps Focused Projects for Ashish Kadian
export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Project Chimera: Unified Observability & AI-Driven Anomaly Detection',
    description:
      "Led the design and implementation of a cutting-edge observability platform, codenamed 'Chimera,' integrating metrics, logs, and traces from across a sprawling microservices landscape. Developed an AI/ML layer using Prometheus, Grafana, and Python to proactively identify anomalies, reducing critical incident MTTR by 65% and enabling predictive scaling.",
    imageUrl: 'https://picsum.photos/seed/ai-observability-platform/600/400',
    imageHint: 'observability dashboard analytics',
    tags: ['Observability', 'AI/ML', 'Prometheus', 'Grafana', 'Kubernetes', 'Python', 'SRE', 'Microservices'],
    repoUrl: 'https://github.com/syntax2/project-chimera', // Placeholder
  },
  {
    id: '2',
    title: 'Project Nova: Zero-Downtime Cloud Migration & Modernization',
    description:
      "Orchestrated the seamless migration of a legacy monolithic application to a cloud-native, microservices architecture on AWS EKS. Achieved zero downtime during the transition through meticulous planning, canary deployments, and robust rollback strategies. The modernized platform improved scalability by 300% and reduced operational costs by 40%.",
    imageUrl: 'https://picsum.photos/seed/cloud-migration-eks/600/400',
    imageHint: 'cloud migration architecture',
    tags: ['Cloud Migration', 'AWS EKS', 'Microservices', 'Zero-Downtime', 'DevOps', 'Terraform', 'CI/CD'],
    liveUrl: 'https://www.ashishkadian.tech/project-nova-showcase', // Placeholder
  },
  {
    id: '3',
    title: 'Project Citadel: Automated Security & Compliance Fortress',
    description:
      "Built 'Citadel,' an automated security and compliance framework using Policy-as-Code (OPA, Kyverno) and DevSecOps principles. Integrated security scanning (SAST, DAST, SCA) into CI/CD pipelines, enforced CIS benchmarks, and achieved 95% automated compliance reporting, significantly reducing security vulnerabilities.",
    imageUrl: 'https://picsum.photos/seed/automated-security-compliance/600/400',
    imageHint: 'security compliance dashboard',
    tags: ['DevSecOps', 'Policy-as-Code', 'OPA', 'Kubernetes Security', 'CI/CD', 'Automation', 'Compliance'],
  },
  {
    id: '4',
    title: 'Project QuantumLeap: High-Performance Compute Grid Optimization',
    description:
      "Engineered and optimized a distributed high-performance computing (HPC) grid for complex simulations, leveraging Kubernetes and custom scheduling algorithms. Improved resource utilization by 50% and reduced job completion times by an average of 35%, enabling faster research and development cycles.",
    imageUrl: 'https://picsum.photos/seed/hpc-grid-optimization/600/400',
    imageHint: 'compute grid cluster',
    tags: ['HPC', 'Kubernetes', 'Distributed Systems', 'Performance Optimization', 'Python', 'Go', 'Slurm (Conceptual)'],
    repoUrl: 'https://github.com/syntax2/project-quantumleap', // Placeholder
  },
  {
    id: '5',
    title: 'Project Atlas: Global Serverless Infrastructure Delivery',
    description:
        'Pioneered a global serverless infrastructure for a real-time data processing application using AWS Lambda, API Gateway, and DynamoDB. This architecture provided extreme scalability, handling millions of requests per minute with sub-second latency, while reducing infrastructure TCO by 60% compared to traditional server-based solutions.',
    imageUrl: 'https://picsum.photos/seed/serverless-global-architecture/600/400',
    imageHint: 'serverless architecture diagram',
    tags: ['Serverless', 'AWS Lambda', 'API Gateway', 'DynamoDB', 'Global Scale', 'Real-time Processing', 'Terraform'],
  },
  {
    id: '6',
    title: 'Project Sentinel: Proactive FinOps & Cost Optimization Engine',
    description:
        'Developed an intelligent FinOps engine that continuously monitored multi-cloud (AWS, GCP) spend, identified cost-saving opportunities (right-sizing, reserved instances, spot usage), and automated budget alerts. This system drove a sustained 25% reduction in monthly cloud expenditure through actionable insights and automated recommendations.',
    imageUrl: 'https://picsum.photos/seed/finops-cost-optimization/600/400',
    imageHint: 'cloud cost dashboard',
    tags: ['FinOps', 'Cloud Cost Management', 'AWS', 'GCP', 'Data Analytics', 'Python', 'Automation'],
  },
];

// Resume Data for Ashish Kadian
export const resumeData: ResumeData = {
  summary:
    "As an SRE & DevOps Engineer, I'm not just about keeping the lights on; I'm about architecting systems that anticipate the storm and dance in the rain. My passion lies in weaving together robust automation, intelligent observability, and proactive security to build cloud-native infrastructures that are not only resilient and scalable but also elegant in their efficiency. I thrive on transforming complex challenges into streamlined solutions, ensuring that technology empowers, rather than encumbers, innovation. My journey is one of continuous learning and a relentless pursuit of operational excellence, always aiming to build systems that are future-proof and performant.",
  experience: [
    {
      id: 'exp1',
      title: 'Lead Site Reliability Engineer & Cloud Architect',
      company: 'Innovatech Solutions (Cloud Platform Division)',
      period: 'July 2023 - Present',
      description: [
        'Spearheaded the architecture and implementation of a self-healing Kubernetes platform on EKS, reducing critical incidents by 70% and improving system uptime to 99.999%.',
        'Developed and deployed a comprehensive Infrastructure-as-Code (IaC) strategy using Terraform and Ansible, enabling 100% reproducible environments and cutting provisioning times by 80%.',
        'Championed a shift-left security culture by integrating DevSecOps practices, including automated security testing (SAST/DAST) and policy-as-code (OPA) into CI/CD pipelines, reducing pre-production vulnerabilities by 60%.',
        'Engineered a multi-region, active-active disaster recovery solution for critical services, ensuring business continuity with an RPO/RTO of under 15 minutes.',
        'Optimized cloud spend by 25% through intelligent resource management, FinOps dashboards, and automated cost-saving recommendations (e.g., spot instances, reserved capacity).',
      ],
    },
    {
      id: 'exp2',
      title: 'Senior DevOps Engineer',
      company: 'TechForward Dynamics',
      period: 'August 2020 - June 2023',
      description: [
        'Automated end-to-end CI/CD pipelines for diverse microservices (Python, Go, Java) using Jenkins, GitLab CI, and ArgoCD, achieving 50+ deployments per day with high reliability.',
        'Built and maintained a sophisticated observability stack (Prometheus, Grafana, ELK, Jaeger), providing deep insights into system performance and reducing Mean Time to Detection (MTTD) by 45%.',
        "Managed and scaled large-scale Kubernetes clusters, implementing GitOps for declarative configuration management and automated cluster operations.",
        'Collaborated with development teams to design and implement scalable, fault-tolerant application architectures, improving overall system resilience by 40%.',
      ],
    },
    {
      id: 'exp3',
      title: 'DevOps Engineer (Internship)',
      company: 'NextGen Systems',
      period: 'February 2020 - July 2020',
      description: [
        'Assisted in containerizing legacy applications using Docker, facilitating easier deployments and environment consistency.',
        'Contributed to the automation of infrastructure provisioning tasks using Ansible scripts and basic Terraform modules.',
        'Gained hands-on experience with CI/CD tools (Jenkins) and version control systems (Git).',
        'Supported the monitoring of production systems and participated in incident response drills.',
      ],
    },
  ],
  education: [
    {
      id: 'edu1',
      title: 'Master of Science in Cloud Computing & Distributed Systems',
      institution: 'Georgia Institute of Technology (Online)',
      period: 'Expected January 2025 - December 2026',
      description: ['Focusing on advanced cloud architecture, serverless computing, and large-scale system design.'],
    },
    {
      id: 'edu2',
      title: 'Bachelor of Technology in Computer Science & Engineering',
      institution: 'National Institute of Technology, Warangal',
      period: 'August 2016 - May 2020',
      description: ['Graduated with First Class Honors. Key coursework in Algorithms, Operating Systems, and Network Engineering.'],
    },
  ],
  skills: [
    // Core SRE/DevOps Principles
    'Site Reliability Engineering (SRE)',
    'DevOps Culture & Practices',
    'Infrastructure as Code (IaC)',
    'CI/CD Pipeline Architecture & Automation',
    'Observability (Monitoring, Logging, Tracing, Alerting)',
    'Cloud Security & Compliance (DevSecOps)',
    'System Design & Distributed Architecture',
    'High Availability & Disaster Recovery Planning',
    'Performance Engineering & Optimization',
    'Automation (Python, Go, Bash)',
    'FinOps & Cloud Cost Management',
    'Chaos Engineering & Resilience Testing',
    'GitOps & Declarative Configuration',
    'Problem Solving & Root Cause Analysis',

    // Cloud Platforms & Services
    'Amazon Web Services (AWS): EKS, EC2, S3, Lambda, RDS, VPC, IAM, CloudFormation, CloudWatch, Route53, API Gateway, CloudFront, Systems Manager, Secrets Manager, WAF, GuardDuty, Inspector',
    'Google Cloud Platform (GCP): GKE, Compute Engine, Cloud Storage, Cloud Functions, Cloud SQL (Familiarity)',
    'Microsoft Azure: AKS, Virtual Machines (Familiarity)',

    // Containerization & Orchestration
    'Kubernetes (K8s)',
    'Docker & Docker Swarm',
    'Helm & Kustomize',
    'Service Mesh (Istio, Linkerd - Conceptual & Practical)',

    // IaC & Configuration Management
    'Terraform (Advanced)',
    'Ansible (Advanced)',
    'Packer',
    'CloudFormation',

    // CI/CD & Version Control
    'Jenkins (Declarative & Scripted Pipelines)',
    'GitLab CI/CD',
    'GitHub Actions',
    'ArgoCD',
    'Spinnaker (Familiarity)',
    'Git & Git Flow',

    // Programming & Scripting
    'Python (Advanced - Flask, FastAPI, Boto3)',
    'Go (Golang - Intermediate)',
    'Bash/Shell Scripting (Advanced)',
    'Node.js (Basic for Tooling)',

    // Monitoring, Logging & Observability Tools
    'Prometheus & Alertmanager',
    'Grafana (Advanced Dashboarding & Alerting)',
    'Datadog',
    'ELK Stack (Elasticsearch, Logstash, Kibana)',
    'Splunk (Familiarity)',
    'OpenTelemetry & Jaeger (Distributed Tracing)',
    'Loki & Promtail',

    // Databases & Data Stores
    'PostgreSQL',
    'MySQL',
    'MongoDB (NoSQL)',
    'Redis (Caching & Messaging)',
    'Apache Kafka (Event Streaming)',
    'RabbitMQ',

    // Networking & Security Tools
    'Nginx & Apache HTTP Server',
    'HAProxy',
    'Load Balancers (AWS ELB/ALB/NLB)',
    'Firewalls & WAFs (AWS WAF, ModSecurity)',
    'Open Policy Agent (OPA) & Kyverno (Policy-as-Code)',
    'HashiCorp Vault (Secrets Management)',
    'TLS/SSL Certificates & PKI',
    'Vulnerability Scanning Tools (Nessus, Qualys - Conceptual)',

    // Operating Systems & Others
    'Linux (Expert - Debian, Ubuntu, CentOS, RHEL)',
    'Windows Server (Proficient)',
    'Agile & Scrum Methodologies',
    'JIRA & Confluence',
    'Technical Documentation & Diagramming (Lucidchart, Draw.io)',
  ],
  downloadUrl: '/resume/Ashish_Kadian_SRE_DevOps_Portfolio_Resume.pdf', // Placeholder, ensure this file exists in /public/resume
};