import type { Project, ResumeData } from './types';

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with Next.js, Stripe, and Firebase.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    imageHint: 'online shopping',
    tags: ['Next.js', 'React', 'TypeScript', 'Stripe', 'Firebase', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    imageHint: 'productivity tool',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    liveUrl: '#',
  },
  {
    id: '3',
    title: 'Portfolio Website V1',
    description: 'My previous personal portfolio website built with Gatsby and GraphQL.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    imageHint: 'personal website',
    tags: ['Gatsby', 'React', 'GraphQL', 'Styled Components'],
    repoUrl: '#',
  },
];

export const resumeData: ResumeData = {
  summary: "A highly motivated and results-oriented Full Stack Developer with 5+ years of experience in designing, developing, and deploying web applications. Proficient in JavaScript, React, Node.js, and various cloud technologies. Passionate about creating intuitive user experiences and solving complex problems.",
  experience: [
    {
      id: 'exp1',
      title: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      period: 'Jan 2021 - Present',
      description: [
        'Led a team of 5 developers in agile sprints to deliver key features for a SaaS product.',
        'Architected and implemented microservices using Node.js and Docker, improving scalability by 30%.',
        'Mentored junior engineers and conducted code reviews to ensure code quality and consistency.',
      ],
    },
    {
      id: 'exp2',
      title: 'Full Stack Developer',
      company: 'Web Wizards LLC',
      period: 'Jun 2018 - Dec 2020',
      description: [
        'Developed and maintained client websites using React, Angular, and Vue.js.',
        'Collaborated with designers to translate mockups into responsive and interactive web pages.',
        'Integrated third-party APIs for payment processing, social media, and analytics.',
      ],
    },
  ],
  education: [
    {
      id: 'edu1',
      title: 'Master of Science in Computer Science',
      institution: 'University of Advanced Technology',
      period: '2016 - 2018',
      description: ['Specialized in Web Development and Distributed Systems.', 'Thesis on optimizing real-time data synchronization.'],
    },
    {
      id: 'edu2',
      title: 'Bachelor of Science in Software Engineering',
      institution: 'State Engineering College',
      period: '2012 - 2016',
      description: ['Graduated with Honors.', 'Active member of the coding club.'],
    },
  ],
  skills: [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Express.js',
    'Python',
    'Django',
    'SQL (PostgreSQL, MySQL)',
    'NoSQL (MongoDB, Firebase)',
    'RESTful APIs',
    'GraphQL',
    'Docker',
    'Kubernetes',
    'AWS',
    'Git',
    'Agile Methodologies',
    'Problem Solving',
  ],
  downloadUrl: '/resume.pdf',
};
