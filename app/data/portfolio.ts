export const portfolioData = {
  meta: {
    name: 'Suresh Chandra Sekar',
    title: 'Senior Python Backend Developer',
    description: 'Senior Backend Engineer with 7+ years of REST API design and cloud integrations. Based in Chennai, India.',
    location: 'Chennai, India',
    role: 'Senior Backend Engineer',
    yearsOfExperience: '7+',
    openToRoles: 'Senior Backend, Platform, and Cloud Engineering',
  },

  social: {
    linkedin: 'https://www.linkedin.com/in/suresh-chandrasekar/',
    github: 'https://github.com/sureshchandrasekar',
    medium: 'https://medium.com/@sureshchandrasekar',
  },

  nav: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Blog', href: '#blog' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ],

  hero: {
    label: 'Senior Backend Engineer',
    name: 'Suresh Chandra Sekar',
    intro: 'Senior Backend Engineer with 7+ years of experience designing and owning Python API platforms, cloud integrations, and event-driven systems for enterprise-scale products.',
    typedPhrases: [
      'Enterprise API Platforms · Cloud Integrations',
      'Backend Ownership · Production Reliability',
      'Multi-Cloud Products · FinOps Systems',
      'Performance Optimization · Event-Driven Systems',
      'Scalable Python APIs · Platform Engineering',
    ],
    highlights: [
      '7+ years',
      '100+ API features',
      'AWS + Azure + GCP',
      '1,000+ cloud accounts',
    ],
    cta: 'Open to senior backend, platform, and cloud engineering roles focused on API ownership, cloud platform work, and production reliability · Chennai, India',
  },

  about: {
    label: 'Who I am',
    title: 'About Me',
    image: '/images/profile-800.jpg',
    summary: "I'm a Senior Backend Engineer with **7+ years of experience** building Python APIs, cloud integrations, and event-driven backend systems. My work centers on turning complex product and platform problems into reliable, maintainable systems that perform well at enterprise scale.",
    details: [
      { label: 'Name', value: 'Suresh Chandra Sekar' },
      { label: 'Location', value: 'Chennai, India' },
      { label: 'Experience', value: '7+ Years' },
      { label: 'Focus', value: 'Backend APIs, cloud platforms, and reliability engineering' },
      { label: 'Education', value: 'B.E. Computer Science (Anna University)' },
      { label: 'Availability', value: 'Open to Relocation & Remote' },
    ],
  },

  skills: {
    label: 'What I work with',
    title: 'Key Skills',
    groups: [
      {
        title: 'Languages & Frameworks',
        tags: [
          { label: 'Python (Advanced)', primary: true },
          { label: 'Flask', primary: true },
          { label: 'FastAPI', primary: true },
          { label: 'pytest', primary: true },
          { label: 'Pydantic', primary: false },
          { label: 'MSAL', primary: false },
          { label: 'Pandas', primary: false },
          { label: 'Go (Basic)', primary: false },
          { label: 'Rust (Basic)', primary: false },
        ],
      },
      {
        title: 'Backend Engineering',
        tags: [
          { label: 'REST API Design', primary: true },
          { label: 'Background Job Processing', primary: false },
          { label: 'Event-Driven Systems', primary: true },
          { label: 'In-memory Caching', primary: false },
          { label: 'Performance Profiling', primary: true },
          { label: 'Memory Optimisation', primary: true },
        ],
      },
      {
        title: 'Cloud SDKs',
        tags: [
          { label: 'AWS (Boto3)', primary: true },
          { label: 'Azure REST API', primary: true },
          { label: 'GCP (google-api-python-client)', primary: true },
          { label: 'OCI', primary: false },
        ],
      },
      {
        title: 'API & Messaging',
        tags: [
          { label: 'Swagger / OpenAPI', primary: false },
          { label: 'gRPC', primary: false },
          { label: 'RabbitMQ', primary: false },
          { label: 'AWS SQS', primary: false },
          { label: 'JWT', primary: false },
          { label: 'RBAC', primary: false },
        ],
      },
      {
        title: 'Infrastructure & Databases',
        tags: [
          { label: 'MongoDB', primary: true },
          { label: 'Docker', primary: false },
          { label: 'Terraform (Intermediate)', primary: false },
          { label: 'ARM Templates', primary: false },
          { label: 'CloudFormation', primary: false },
          { label: 'Linux', primary: false },
        ],
      },
      {
        title: 'DevOps, Testing & Tools',
        tags: [
          { label: 'Git', primary: true },
          { label: 'Jenkins', primary: true },
          { label: 'ServiceNow CMDB', primary: false },
          { label: 'Zabbix', primary: false },
          { label: 'Docker SDK', primary: false },
        ],
      },
    ],
  },

  experience: {
    label: 'My journey',
    title: 'Work Experience',
    items: [
      {
        period: 'Apr 2024 – Present',
        badge: 'Current',
        role: 'Senior Backend Engineer',
        company: 'Enterprise cloud platform product work · Chennai, India',
        summary: 'Led backend platform work across FinOps, pricing intelligence, performance optimization, and API delivery for large-scale multi-cloud products.',
        achievements: [
          'Delivered **100+ REST API features** for cloud governance products used across **1,000+ cloud accounts**.',
          'Designed and built FinOps ingestion pipelines across **15+ SaaS providers**, expanding billing intelligence coverage for enterprise clients.',
          'Optimized cost-processing performance and memory efficiency, resolving production incidents tied to large-scale SaaS spend.',
          'Led a budgeting engine redesign with better alerting, multi-dimensional policies, and stronger spend forecasting.',
          'Architected a real-time pricing engine for multi-cloud provisioning workflows and pre-deployment cost visibility.',
          'Mentored 2 junior engineers through code reviews, pairing, and backend/API design guidance.',
        ],
      },
      {
        period: 'Mar 2019 – Apr 2024',
        badge: null,
        role: 'Backend Engineer',
        company: 'Multi-cloud platform systems work · Chennai, India',
        summary: 'Built foundational backend systems for cloud discovery, automation, observability, and asynchronous job processing across multi-cloud integrations.',
        achievements: [
          'Migrated daemon- and thread-based services into a centralized background job framework secured with JWT authentication.',
          'Introduced Pydantic models and stronger typing across owned modules to improve reliability and development consistency.',
          'Built utilization metrics support for **30+ cloud services** through an event-driven discovery pipeline using AWS SQS.',
          'Expanded observability with CloudWatch alarm templates, Zabbix, and custom CWAgent metrics for EC2 instances.',
          'Integrated AWS SSM, ARM, CloudFormation, ServiceNow CMDB, and RabbitMQ for secure automation and ITSM workflows.',
          'Developed cloud provisioning workflows and Mistral templates, deepening multi-cloud IaC capabilities across the platform.',
        ],
      },
    ],
  },

  projects: {
    label: "Things I've built",
    title: 'Notable Projects',
    items: [
      {
        tech: ['Python', 'FastAPI', 'REST APIs'],
        title: 'Case Study 01: Real-Time Multi-Cloud Pricing API',
        org: 'A platform backend case study showing how I design APIs that help teams estimate infrastructure cost before provisioning.',
        points: [
          '**Problem:** Enterprise teams needed real-time multi-cloud cost visibility before provisioning.',
          '**Solution:** Built a real-time cost estimation API spanning AWS, Azure, GCP, and OCI with normalized pricing data across **50+ SKU categories**.',
          '**Performance:** Optimized the FastAPI endpoint to **<200ms p99 latency** using Redis caching and async processing.',
          '**Outcome:** Reduced deployment cost uncertainty by **40%** for enterprise provisioning workflows.',
          '**Validation:** Achieved **99.8% pricing accuracy** across environments managing **1,000+ cloud accounts**.',
        ],
      },
      {
        tech: ['Python', 'Flask', 'MongoDB', 'ETL'],
        title: 'Case Study 02: Multi-Provider Billing Intelligence Pipeline',
        org: 'A backend data systems case study showing how I built resilient ingestion, reconciliation, and billing intelligence workflows.',
        points: [
          '**Problem:** Billing data across SaaS providers was fragmented, noisy, and slow to reconcile.',
          '**Solution:** Built **15+ custom parsers** across CSV, JSON, and Parquet formats for multi-provider billing ingestion.',
          '**Data quality:** Reduced duplicate invoice records from **8,500+ monthly** to **<50** through idempotent MongoDB pipeline design.',
          '**Performance:** Cut billing reconciliation time from **4 hours to 45 minutes** through batching and async processing.',
          '**Outcome:** Maintained **100% uptime** for production ingestion serving **1,000+ cloud-account environments**.',
        ],
      },
    ],
  },

  education: {
    label: 'Academic background & growth',
    title: 'Education & Certifications',
    degree: {
      title: 'Bachelor of Engineering — Computer Science & Engineering',
      institution: 'T.J.S. Engineering College, Tamil Nadu (Anna University)',
      period: '2014 – 2018',
      cgpa: '6.8',
    },
    certifications: [
      {
        name: 'Master Modern Software Architecture: Microservices & Event-Driven Architecture',
        issuer: 'Udemy · Feb 2025',
      },
      {
        name: 'Pragmatic System Design',
        issuer: 'Udemy · Feb 2025',
      },
      {
        name: 'Python Unit Testing Fundamentals (unittest & pytest)',
        issuer: 'Udemy · Feb 2025',
      },
    ],
  },

  contact: {
    label: 'Open to backend roles',
    title: 'Contact',
    availability: 'Available for new opportunities — response within 24h via LinkedIn',
    items: [
      {
        label: 'Call',
        value: 'Available on request via LinkedIn',
        icon: 'phone',
        static: true,
      },
      {
        label: 'Email',
        value: 'Shared on request through LinkedIn',
        icon: 'mail',
        static: true,
      },
      {
        label: 'LinkedIn',
        value: 'linkedin.com/in/sureshchandrasekar',
        icon: 'linkedin',
        href: 'https://www.linkedin.com/in/suresh-chandrasekar/',
      },
      {
        label: 'GitHub',
        value: 'github.com/sureshchandrasekar',
        icon: 'github',
        href: 'https://github.com/sureshchandrasekar',
      },
      {
        label: 'Blog',
        value: 'medium.com/@sureshchandrasekar',
        icon: 'blog',
        href: 'https://medium.com/@sureshchandrasekar',
      },
      {
        label: 'Location',
        value: 'Chennai, India · Open to Remote',
        icon: 'location',
        static: true,
      },
      {
        label: 'Resume',
        value: 'Download resume',
        icon: 'download',
        href: '/documents/Suresh_Chandra_Sekar_Resume_FINAL_v16.pdf',
        download: true,
      },
    ],
  },

  footer: {
    message: "I'm currently looking for senior backend, platform, and cloud engineering roles where I can own APIs, integrations, and system reliability at scale.",
    tagline: 'Built with Python instincts and clean code habits',
  },
};
