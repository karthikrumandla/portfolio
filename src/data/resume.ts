import { Project, Experience, Skill, BlogPost } from '@/types';

export const projects: Project[] = [
  {
    id: 'starcare360',
    title: 'StarCare360',
    subtitle: 'Insurance Claim & Renewal Ecosystem',
    description: 'Enterprise-grade digital insurance ecosystem handling claims processing, renewals, endorsements, agent workflows, customer support, and notification systems.',
    longDescription: 'StarCare360 is a comprehensive insurance management platform that transformed traditional paper-based workflows into a fully digital, scalable solution. Built for enterprise-scale operations with focus on automation, security, and user experience.',
    category: 'Enterprise Platform',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'JWT', 'RBAC'],
    highlights: [
      '40% reduction in claims turnaround time',
      'Automated renewal workflows for 50K+ policies',
      'Real-time WhatsApp/SMS notifications',
      'Multi-tenant architecture with RBAC'
    ],
    architecture: {
      frontend: ['React.js', 'Redux Toolkit', 'TypeScript', 'Tailwind CSS', 'React Router'],
      backend: ['Node.js', 'Express.js', 'JWT Authentication', 'RBAC', 'REST APIs'],
      database: ['MongoDB', 'MySQL', 'Aggregation Pipelines', 'Indexing'],
      cloud: ['AWS S3', 'CloudFront', 'Lambda', 'API Gateway', 'EC2'],
      deployment: ['GitHub Actions', 'CI/CD', 'Vercel', 'PM2']
    },
    features: [
      {
        title: 'Dynamic Workflow Engine',
        description: 'Configurable workflow pipelines for claim approval, policy renewals, escalation management, and SLA handling',
        icon: 'git-branch'
      },
      {
        title: 'Role-Based Access Control',
        description: 'Multi-tenant RBAC system with granular permissions, department isolation, and audit logging',
        icon: 'shield'
      },
      {
        title: 'Real-Time Notifications',
        description: 'WhatsApp, SMS, and email automation with status tracking and delivery confirmation',
        icon: 'bell'
      },
      {
        title: 'Performance Optimization',
        description: 'MongoDB indexing, aggregation pipelines, lazy loading, and API response caching',
        icon: 'zap'
      }
    ],
    metrics: [
      { label: 'Claims Processed', value: '100K+' },
      { label: 'Reduction in Turnaround', value: '40%' },
      { label: 'Policies Managed', value: '50K+' },
      { label: 'API Response Time', value: '<200ms' }
    ]
  },
  {
    id: 'omni-support',
    title: 'OmniSupport Platform',
    subtitle: 'Omni-Channel Customer Support Suite',
    description: 'Integrated customer support platform combining email, chat, WhatsApp, and CRM into a unified dashboard with real-time analytics.',
    longDescription: 'A comprehensive omni-channel support solution that unified multiple communication channels into a single platform, enabling agents to handle customer queries efficiently with full context and history.',
    category: 'Communication Platform',
    tags: ['WebSockets', 'Redis', 'MongoDB', 'React', 'Express'],
    highlights: [
      'Unified inbox for 5+ communication channels',
      'Real-time agent availability management',
      'SLA monitoring with automated escalation',
      'CRM integration with customer360 view'
    ],
    architecture: {
      frontend: ['React.js', 'Socket.io Client', 'Redux', 'TypeScript', 'Recharts'],
      backend: ['Node.js', 'Express.js', 'Socket.io', 'Redis', 'Bull Queue'],
      database: ['MongoDB', 'Redis', 'Elasticsearch'],
      cloud: ['AWS EC2', 'S3', 'CloudFront', 'SES'],
      deployment: ['Docker', 'Kubernetes', 'GitHub Actions', 'PM2']
    },
    features: [
      {
        title: 'Unified Inbox',
        description: 'Single dashboard for email, chat, WhatsApp, and social media with intelligent routing',
        icon: 'inbox'
      },
      {
        title: 'Real-Time Analytics',
        description: 'Live dashboards with response times, resolution rates, and agent performance metrics',
        icon: 'bar-chart-2'
      },
      {
        title: 'Smart Routing',
        description: 'AI-powered ticket routing based on skills, language, and workload distribution',
        icon: 'route'
      },
      {
        title: 'Knowledge Base',
        description: 'Integrated KB with ML-powered article suggestions and auto-response capabilities',
        icon: 'book-open'
      }
    ],
    metrics: [
      { label: 'Channels Integrated', value: '5+' },
      { label: 'Daily Tickets', value: '10K+' },
      { label: 'Response Time', value: '<30s' },
      { label: 'SLA Compliance', value: '98%' }
    ]
  },
  {
    id: 'contact-center-suite',
    title: 'Contact Center Suite',
    subtitle: 'Enterprise Communication Platform',
    description: 'Scalable contact center solution with IVR, predictive dialer, recording, and analytics for outbound campaigns.',
    longDescription: 'A complete contact center platform built for enterprise outbound campaigns, featuring intelligent dialer systems, call recording, real-time monitoring, and comprehensive analytics.',
    category: 'Enterprise Software',
    tags: ['Twilio', 'Asterisk', 'WebRTC', 'PostgreSQL', 'Socket.io'],
    highlights: [
      'Predictive dialing with 3x agent efficiency',
      'Real-time call monitoring and whisper coaching',
      ' PCI-DSS compliant call recording',
      'Campaign management with auto-scheduling'
    ],
    architecture: {
      frontend: ['React.js', 'WebRTC', 'Socket.io Client', 'D3.js'],
      backend: ['Node.js', 'Asterisk AMI', 'Twilio API', 'RabbitMQ'],
      database: ['PostgreSQL', 'Redis', 'TimescaleDB'],
      cloud: ['AWS EC2', 'S3', 'CloudWatch', 'RDS'],
      deployment: ['Docker', 'Ansible', 'Jenkins']
    },
    features: [
      {
        title: 'Predictive Dialer',
        description: 'AI-powered dialing that maximizes agent talk time and minimizes idle periods',
        icon: 'phone-outgoing'
      },
      {
        title: 'IVR Designer',
        description: 'Visual IVR builder with multi-level menus, DTMF recognition, and语音 prompts',
        icon: 'menu'
      },
      {
        title: 'Call Recording',
        description: 'PCI-DSS compliant recording with encryption, storage, and retrieval system',
        icon: 'disc'
      },
      {
        title: 'Real-Time Monitoring',
        description: 'Live dashboards with call queues, agent status, and campaign performance',
        icon: 'activity'
      }
    ],
    metrics: [
      { label: 'Agents Supported', value: '500+' },
      { label: 'Calls per Day', value: '50K+' },
      { label: 'Agent Efficiency', value: '3x' },
      { label: 'Uptime', value: '99.9%' }
    ]
  },
  {
    id: 'insurance-portal',
    title: 'InsureConnect Portal',
    subtitle: 'B2B Insurance Distribution Platform',
    description: 'Multi-tenant B2B insurance portal enabling agents and partners to quote, sell, and manage insurance products.',
    longDescription: 'A white-label insurance distribution platform built for insurance companies and their channel partners, featuring product configuration, commission tracking, and lead management.',
    category: 'B2B Platform',
    tags: ['Next.js', 'GraphQL', 'Prisma', 'PostgreSQL', 'AWS'],
    highlights: [
      'Multi-tenant architecture with white-labeling',
      'Real-time premium calculation engine',
      'Commission tracking with hierarchy',
      'Lead management with conversion tracking'
    ],
    architecture: {
      frontend: ['Next.js', 'Apollo Client', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js', 'GraphQL', 'Prisma ORM', 'Redis'],
      database: ['PostgreSQL', 'Redis Cache'],
      cloud: ['AWS Lambda', 'CloudFront', 'RDS', 'S3'],
      deployment: ['Vercel', 'AWS ECS', 'GitHub Actions']
    },
    features: [
      {
        title: 'Quote Engine',
        description: 'Real-time premium calculation with multiple product configurations and riders',
        icon: 'calculator'
      },
      {
        title: 'Partner Dashboard',
        description: 'White-label dashboards with branding, commission reports, and analytics',
        icon: 'layout-dashboard'
      },
      {
        title: 'Lead Management',
        description: 'End-to-end lead tracking from capture to conversion with automated nurture',
        icon: 'target'
      },
      {
        title: 'Product Catalog',
        description: 'Configurable insurance products with custom fields, riders, and pricing rules',
        icon: 'package'
      }
    ],
    metrics: [
      { label: 'Partners Onboarded', value: '100+' },
      { label: 'Quotes Generated', value: '1M+' },
      { label: 'Conversion Rate', value: '25%' },
      { label: 'Commission Processed', value: '$10M+' }
    ]
  }
];

export const experiences: Experience[] = [
  {
    company: 'Deepija Telecom Pvt Ltd',
    role: 'Sr. Software Engineer',
    period: '2022 – Present',
    location: 'Hyderabad, India',
    description: 'Leading development of enterprise SaaS platforms for insurance and communication industries. Architecting scalable solutions using MERN stack with cloud-native deployment strategies.',
    projects: [
      {
        title: 'Insurance Digital Transformation Platforms',
        description: 'Built scalable insurance workflow systems for claims management, renewals, endorsements, customer support, and payment integrations.',
        technologies: ['React.js', 'Node.js', 'MongoDB', 'AWS', 'JWT', 'RBAC'],
        achievements: [
          'Designed scalable MERN architecture supporting 100K+ daily transactions',
          'Developed modular React component system reducing development time by 40%',
          'Built JWT-secured REST APIs with RBAC authorization',
          'Integrated AWS Lambda microservices for automated workflows',
          'Implemented CI/CD pipelines reducing deployment time by 60%',
          'Designed RBAC authorization system with granular permissions',
          'Optimized MongoDB queries achieving <200ms response times',
          'Added WhatsApp/SMS automation for customer notifications'
        ]
      },
      {
        title: 'Omni-Channel Communication Solutions',
        description: 'Developed enterprise communication platforms integrating multiple channels with unified dashboards and real-time analytics.',
        technologies: ['Node.js', 'Socket.io', 'Redis', 'React', 'Twilio'],
        achievements: [
          'Built real-time chat system handling 10K+ concurrent connections',
          'Implemented WebSocket-based notifications across channels',
          'Designed scalable message queuing system with Bull + Redis',
          'Integrated Twilio for SMS/WhatsApp automation',
          'Created analytics dashboard with real-time metrics visualization'
        ]
      }
    ]
  },
  {
    company: 'TechEra Solutions',
    role: 'Full Stack Developer',
    period: '2018 – 2022',
    location: 'Hyderabad, India',
    description: 'Developed enterprise web applications and REST APIs for various clients. Led migration projects from legacy systems to modern architectures.',
    projects: [
      {
        title: 'Enterprise CRM Development',
        description: 'Built comprehensive CRM solutions with contact management, lead tracking, and sales automation features.',
        technologies: ['React', 'Node.js', 'MongoDB', 'MySQL', 'AWS'],
        achievements: [
          'Developed contact management system with 1M+ records',
          'Built lead scoring algorithm with ML-based predictions',
          'Implemented email automation with drip campaigns',
          'Created sales pipeline visualization with drag-drop interface'
        ]
      },
      {
        title: 'Legacy System Migration',
        description: 'Led migration of legacy PHP systems to modern Node.js/React architecture.',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
        achievements: [
          'Migrated 15+ legacy modules to microservices',
          'Reduced page load time by 70% with new architecture',
          'Implemented automated testing achieving 85% coverage',
          'Created API documentation with Swagger'
        ]
      }
    ]
  },
  {
    company: 'InnovateTech Labs',
    role: 'Software Developer',
    period: '2015 – 2018',
    location: 'Hyderabad, India',
    description: 'Started career developing frontend applications and progressively took ownership of backend systems.',
    projects: [
      {
        title: 'Web Application Development',
        description: 'Developed responsive web applications using React and Node.js for various business domains.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
        achievements: [
          'Built 20+ responsive web applications',
          'Developed reusable component library',
          'Implemented authentication systems',
          'Created RESTful APIs for mobile apps'
        ]
      }
    ]
  }
];

export const skills: Skill[] = [
  {
    category: 'Frontend',
    icon: 'monitor',
    items: ['React.js', 'Next.js', 'Redux Toolkit', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Router', 'RTK Query']
  },
  {
    category: 'Backend',
    icon: 'server',
    items: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'WebSockets', 'JWT', 'RBAC', 'Socket.io']
  },
  {
    category: 'Database',
    icon: 'database',
    items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Aggregation Pipelines', 'Indexing Strategy', 'ORM/Prisma']
  },
  {
    category: 'Cloud & DevOps',
    icon: 'cloud',
    items: ['AWS EC2', 'S3', 'Lambda', 'CloudFront', 'API Gateway', 'RDS', 'GitHub Actions', 'CI/CD', 'Docker', 'Nginx']
  },
  {
    category: 'Security',
    icon: 'shield',
    items: ['JWT Authentication', 'RBAC Authorization', 'OAuth2', 'API Security', 'Rate Limiting', 'Input Validation', 'Encryption']
  },
  {
    category: 'Tools & Practices',
    icon: 'wrench',
    items: ['Git', 'Agile/Scrum', 'Jira', 'Swagger/OpenAPI', 'Postman', 'VS Code', 'Vercel', 'PM2']
  }
];

export const blogs: BlogPost[] = [
  {
    slug: 'jwt-authentication-best-practices',
    title: 'JWT Authentication Best Practices for Enterprise Applications',
    excerpt: 'Learn how to implement secure JWT authentication with refresh token rotation, refresh token storage, and proper RBAC implementation.',
    date: '2024-01-15',
    readTime: '12 min',
    tags: ['Security', 'Node.js', 'JWT']
  },
  {
    slug: 'mern-scalable-folder-structure',
    title: 'Building Scalable MERN Architecture: A Production-Ready Folder Structure',
    excerpt: 'Discover the folder structure that scales from MVP to enterprise, with clear separation of concerns, service layers, and modular design.',
    date: '2024-01-08',
    readTime: '10 min',
    tags: ['Architecture', 'MERN', 'Best Practices']
  },
  {
    slug: 'rbac-in-react-express',
    title: 'Implementing RBAC in React + Express Applications',
    excerpt: 'Step-by-step guide to building a complete role-based access control system with permission management and API guards.',
    date: '2023-12-20',
    readTime: '15 min',
    tags: ['Security', 'React', 'Express']
  },
  {
    slug: 'aws-lambda-nodejs',
    title: 'Serverless Architecture with AWS Lambda and Node.js',
    excerpt: 'How to build and deploy serverless functions with proper error handling, cold start optimization, and cost management.',
    date: '2023-12-10',
    readTime: '14 min',
    tags: ['AWS', 'Serverless', 'Node.js']
  },
  {
    slug: 'mongodb-optimization',
    title: 'MongoDB Performance Optimization: Indexing and Aggregation Pipelines',
    excerpt: 'Master MongoDB query optimization with proper indexing strategies, aggregation pipelines, and performance monitoring.',
    date: '2023-11-25',
    readTime: '11 min',
    tags: ['MongoDB', 'Database', 'Performance']
  },
  {
    slug: 'ci-cd-github-actions',
    title: 'Building a Complete CI/CD Pipeline with GitHub Actions',
    excerpt: 'Automate your deployment process with GitHub Actions, including testing, building, and multi-environment deployments.',
    date: '2023-11-15',
    readTime: '9 min',
    tags: ['DevOps', 'CI/CD', 'GitHub Actions']
  }
];

export const personalInfo = {
  name: 'Karthik',
  title: 'Senior Full Stack Engineer',
  subtitle: 'MERN Stack Expert | Cloud-Native Developer | Enterprise Solutions Architect',
  summary: '9+ years of experience building scalable MERN applications, cloud-native systems, enterprise CRM platforms, and omni-channel communication solutions. Specialized in designing and implementing high-performance backend architectures with focus on security, scalability, and maintainability.',
  email: 'karthik.rumandla@gmail.com',
  phone: '+91 9959869498',
  location: 'Hyderabad, India',
  linkedin: 'https://www.linkedin.com/in/karthik-rumandla/',
  github: 'https://github.com/karthikrumandla',
  resume: '/resume.pdf'
};

export const stats = [
  { label: 'Years Experience', value: '9+' },
  { label: 'Projects Delivered', value: '30+' },
  { label: 'Team Members Led', value: '8+' },
  { label: 'Daily Active Users', value: '100K+' }
];