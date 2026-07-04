export const sampleProfiles = {
  softwareEngineer: {
    personal: {
      fullName: "Alex Rivera",
      jobTitle: "Senior Full Stack Engineer",
      email: "alex.rivera@example.com",
      phone: "+1 (555) 019-0001",
      location: "San Francisco, CA (Hybrid)",
      linkedin: "https://linkedin.com/in/example-software-engineer",
      github: "https://github.com/example-username",
      website: "https://portfolio.example.com",
      summary: "Innovative and results-driven Senior Full Stack Engineer with 8+ years of experience architecting scalable cloud applications, distributed microservices, and responsive web interfaces. Proven track record of mentoring engineering teams, optimizing system latency by up to 45%, and spearheading the migration of legacy monoliths to serverless architectures."
    },
    work: [
      {
        id: "w1",
        companyName: "CloudScale Technologies",
        positionTitle: "Lead Full Stack Engineer",
        location: "San Francisco, CA",
        dateStarted: "2021-03",
        dateEnded: "Present",
        isCurrent: true,
        duties: [
          "Spearheaded the architectural transition of the core analytics dashboard from REST to GraphQL, reducing average client load times by 38% for 200,000+ daily active users.",
          "Architected and deployed a distributed event-driven microservices pipeline using Node.js, Kafka, and AWS Lambda, handling over 15 million daily webhooks.",
          "Mentored a team of 8 junior and mid-level engineers through code reviews, pair programming, and engineering best practices, increasing sprint velocity by 25%.",
          "Implemented automated CI/CD pipelines with GitHub Actions and Docker, reducing deployment cycle times from 4 hours to under 15 minutes."
        ]
      },
      {
        id: "w2",
        companyName: "Nexus Software Inc.",
        positionTitle: "Senior Frontend Engineer",
        location: "Austin, TX (Remote)",
        dateStarted: "2018-06",
        dateEnded: "2021-02",
        isCurrent: false,
        duties: [
          "Engineered a comprehensive design system and UI component library using React, TypeScript, and Tailwind CSS, adopted across 12 distinct company products.",
          "Optimized Core Web Vitals (LCP, FID, CLS) across the primary e-commerce platform, resulting in a 14% increase in conversion rates and a 20% boost in organic SEO traffic.",
          "Collaborated closely with UX designers and product managers to prototype and launch automated workflow tools that saved enterprise clients ~10 hours weekly."
        ]
      },
      {
        id: "w3",
        companyName: "Vanguard Web Solutions",
        positionTitle: "Software Engineer",
        location: "Seattle, WA",
        dateStarted: "2016-01",
        dateEnded: "2018-05",
        isCurrent: false,
        duties: [
          "Developed responsive single-page applications using React, Redux, and Node.js RESTful APIs for fintech clients.",
          "Integrated OAuth2 and JWT-based authentication workflows with role-based access control (RBAC), ensuring strict compliance with SOC-2 security standards.",
          "Wrote comprehensive unit and integration tests using Jest and React Testing Library, maintaining over 85% code coverage."
        ]
      }
    ],
    education: [
      {
        id: "e1",
        schoolName: "University of California, Berkeley",
        schoolMajor: "B.S. in Computer Science",
        location: "Berkeley, CA",
        schoolStartDate: "2011-09",
        schoolEndDate: "2015-05",
        honors: "Magna Cum Laude (GPA: 3.86/4.0), Vice President of Association for Computing Machinery (ACM)"
      }
    ],
    skills: [
      { id: "s1", name: "JavaScript / TypeScript", level: "Expert", category: "Languages" },
      { id: "s2", name: "React & Next.js", level: "Expert", category: "Frontend" },
      { id: "s3", name: "Node.js & Express", level: "Expert", category: "Backend" },
      { id: "s4", name: "Python & Fast API", level: "Advanced", category: "Languages" },
      { id: "s5", name: "PostgreSQL & MongoDB", level: "Advanced", category: "Database" },
      { id: "s6", name: "AWS (Lambda, S3, ECS)", level: "Advanced", category: "Cloud & DevOps" },
      { id: "s7", name: "Docker & Kubernetes", level: "Intermediate", category: "Cloud & DevOps" },
      { id: "s8", name: "GraphQL & REST APIs", level: "Expert", category: "Backend" },
      { id: "s9", name: "Tailwind CSS & Vanilla CSS", level: "Expert", category: "Frontend" },
      { id: "s10", name: "System Architecture & CI/CD", level: "Advanced", category: "Engineering" }
    ],
    projects: [
      {
        id: "p1",
        name: "DevPulse - Real-Time CI/CD Telemetry Platform",
        description: "An open-source developer dashboard monitoring deployment health, test flake rates, and build metrics in real time via WebSockets.",
        technologies: "Next.js, TypeScript, Tailwind CSS, Go, WebSockets, Redis",
        link: "https://devpulse.example.com",
        repo: "https://github.com/example-username/devpulse"
      },
      {
        id: "p2",
        name: "CloudGuard - Automated IAM Security Auditor",
        description: "A CLI tool and web portal that scans AWS IAM policies for over-privileged roles and security vulnerabilities, generating automated remediation scripts.",
        technologies: "Python, AWS SDK, React, Chart.js, Docker",
        link: "https://cloudguard.example.org",
        repo: "https://github.com/example-username/cloudguard"
      }
    ],
    certifications: [
      { id: "c1", name: "AWS Certified Solutions Architect – Professional", issuer: "Amazon Web Services", date: "2023-08", link: "https://aws.example.com/verify/c1" },
      { id: "c2", name: "Certified Kubernetes Administrator (CKA)", issuer: "Cloud Native Computing Foundation", date: "2022-04", link: "https://cncf.example.org/verify/c2" }
    ],
    languages: [
      { id: "l1", name: "English", level: "Native / Bilingual" },
      { id: "l2", name: "Spanish", level: "Professional Working Proficiency" }
    ],
    customSections: [
      {
        id: "cs1",
        title: "Publications & Speaking",
        items: [
          { id: "csi1", title: "Speaker at QCon San Francisco 2023", subtitle: "Topic: Scaling Microfrontends in Enterprise Organizations", date: "2023-10" },
          { id: "csi2", title: "Author of 'Modern TypeScript Patterns'", subtitle: "Published in Smashing Magazine, receiving over 50,000 reads and community praise", date: "2022-05" }
        ]
      }
    ]
  },
  productManager: {
    personal: {
      fullName: "Sarah Jenkins",
      jobTitle: "Principal Product Manager",
      email: "sarah.jenkins@example.org",
      phone: "+1 (555) 019-0002",
      location: "New York, NY",
      linkedin: "https://linkedin.com/in/example-product-manager",
      website: "https://pm-portfolio.example.org",
      summary: "Strategic Principal Product Manager with 9+ years driving the vision, strategy, and execution of high-growth B2B SaaS and AI-powered enterprise tools. Expert in cross-functional leadership, user-centric discovery, and data-driven prioritization, delivering products that have scaled annual recurring revenue (ARR) from $5M to $35M+."
    },
    work: [
      {
        id: "w1",
        companyName: "Cognive AI Solutions",
        positionTitle: "Principal Product Manager - Enterprise AI",
        location: "New York, NY",
        dateStarted: "2022-01",
        dateEnded: "Present",
        isCurrent: true,
        duties: [
          "Defined and executed the product roadmap for a flagship generative AI workflow automation suite, driving $12M in net new ARR within 18 months of launch.",
          "Partnered with VP of Engineering and Data Science leads to establish AI governance frameworks, reducing model hallucination rates by 34% through iterative user feedback loops.",
          "Conducted over 100 customer discovery interviews with Fortune 500 executives to uncover unmet workflow bottlenecks and guide product prioritization."
        ]
      },
      {
        id: "w2",
        companyName: "MetricFlow Analytics",
        positionTitle: "Senior Product Manager",
        location: "Boston, MA",
        dateStarted: "2018-04",
        dateEnded: "2021-12",
        isCurrent: false,
        duties: [
          "Led a cross-functional pod of 12 engineers, UX designers, and QA analysts to relaunch the primary customer reporting dashboard, boosting user engagement by 42%.",
          "Introduced product-led growth (PLG) self-serve onboarding, cutting user time-to-first-value from 14 days to under 45 minutes and increasing conversion by 28%.",
          "Managed quarterly OKRs and executive stakeholder communications across sales, marketing, and customer success teams."
        ]
      }
    ],
    education: [
      {
        id: "e1",
        schoolName: "Columbia Business School",
        schoolMajor: "Master of Business Administration (MBA)",
        location: "New York, NY",
        schoolStartDate: "2015-09",
        schoolEndDate: "2017-05",
        honors: "Dean's Honors List, Product Management Club President"
      },
      {
        id: "e2",
        schoolName: "Northwestern University",
        schoolMajor: "B.A. in Economics & Psychology",
        location: "Evanston, IL",
        schoolStartDate: "2009-09",
        schoolEndDate: "2013-05",
        honors: "Cum Laude"
      }
    ],
    skills: [
      { id: "s1", name: "Product Strategy & Roadmapping", level: "Expert", category: "Strategy" },
      { id: "s2", name: "User Research & Discovery", level: "Expert", category: "Discovery" },
      { id: "s3", name: "Agile / Scrum & JIRA", level: "Expert", category: "Execution" },
      { id: "s4", name: "Data Analytics (SQL, Amplitude, Mixpanel)", level: "Advanced", category: "Analytics" },
      { id: "s5", name: "AI/ML Product Governance", level: "Advanced", category: "Technical" },
      { id: "s6", name: "Go-to-Market (GTM) Strategy", level: "Advanced", category: "Strategy" },
      { id: "s7", name: "A/B Testing & Experimentation", level: "Expert", category: "Analytics" }
    ],
    projects: [
      {
        id: "p1",
        name: "PM Mentorship Initiative",
        description: "Founded an online mentoring community connecting 200+ aspiring product managers from underrepresented backgrounds with tech industry leaders.",
        technologies: "Community Building, Mentorship, Public Speaking",
        link: "https://pm-mentors.example.org"
      }
    ],
    certifications: [
      { id: "c1", name: "Certified Scrum Product Owner (CSPO)", issuer: "Scrum Alliance", date: "2019-05" },
      { id: "c2", name: "Pragmatic Institute Certified (Foundations & Focus)", issuer: "Pragmatic Institute", date: "2020-11" }
    ],
    languages: [
      { id: "l1", name: "English", level: "Native / Bilingual" },
      { id: "l2", name: "French", level: "Conversational" }
    ],
    customSections: []
  },
  uxDesigner: {
    personal: {
      fullName: "Marcus Chen",
      jobTitle: "Lead UX/UI Designer & Design Systems Architect",
      email: "marcus.chen@example.net",
      phone: "+1 (555) 019-0003",
      location: "Seattle, WA (Remote)",
      linkedin: "https://linkedin.com/in/example-ux-designer",
      website: "https://ux-design.example.net",
      summary: "Passionate Lead UX/UI Designer with 7+ years of experience crafting intuitive, human-centered digital experiences and scalable design systems. Blends aesthetic precision with empirical UX research to transform complex enterprise problems into elegant, accessible, and delightful interfaces."
    },
    work: [
      {
        id: "w1",
        companyName: "Veloce Interactive",
        positionTitle: "Lead Product Designer",
        location: "Seattle, WA",
        dateStarted: "2021-07",
        dateEnded: "Present",
        isCurrent: true,
        duties: [
          "Directed the comprehensive redesign of Veloce's core cloud collaboration suite, improving task completion rate by 35% and elevating System Usability Scale (SUS) score from 64 to 86.",
          "Built and maintained 'Horizon DS', a multi-brand Figma and React design system comprising 150+ tokens and accessible WCAG 2.1 AA compliant components.",
          "Facilitated design sprints and collaborative workshops with cross-functional engineering teams, aligning stakeholders on user journeys and interactive prototypes."
        ]
      },
      {
        id: "w2",
        companyName: "Artisanal Media Corp",
        positionTitle: "Senior UX Designer",
        location: "Portland, OR",
        dateStarted: "2018-02",
        dateEnded: "2021-06",
        isCurrent: false,
        duties: [
          "Conducted usability testing sessions, card sorting, and user interviews with over 80 participants to redesign mobile e-commerce checkout flows.",
          "Reduced cart abandonment rate by 18% through simplified form ergonomics, micro-interactions, and clear visual hierarchy.",
          "Created high-fidelity wireframes, interactive user flows, and motion design prototypes using Figma and Principle."
        ]
      }
    ],
    education: [
      {
        id: "e1",
        schoolName: "Rhode Island School of Design (RISD)",
        schoolMajor: "B.F.A. in Graphic & Interactive Design",
        location: "Providence, RI",
        schoolStartDate: "2013-09",
        schoolEndDate: "2017-05",
        honors: "RISD Award for Excellence in Interaction Design"
      }
    ],
    skills: [
      { id: "s1", name: "Figma & Design Systems", level: "Expert", category: "Design Tools" },
      { id: "s2", name: "User Research & Usability Testing", level: "Expert", category: "UX Research" },
      { id: "s3", name: "Wireframing & Prototyping", level: "Expert", category: "Design Tools" },
      { id: "s4", name: "HTML5, Vanilla CSS & Tailwind", level: "Advanced", category: "Technical" },
      { id: "s5", name: "Accessibility (WCAG 2.1 AA/AAA)", level: "Expert", category: "Standards" },
      { id: "s6", name: "Motion Design & Micro-interactions", level: "Advanced", category: "Visual Design" },
      { id: "s7", name: "Information Architecture", level: "Expert", category: "UX Research" }
    ],
    projects: [
      {
        id: "p1",
        name: "Aura - Mindful Focus & Productivity Mobile App",
        description: "An iOS/Android concept app utilizing ambient soundscapes and gentle haptics to promote deep focus without visual distraction.",
        technologies: "Figma, React Native UI, Protopie, User Journey Mapping",
        link: "https://aura-app.example.net"
      }
    ],
    certifications: [
      { id: "c1", name: "NN/g UX Certification (Interaction Design Specialty)", issuer: "Nielsen Norman Group", date: "2020-09" }
    ],
    languages: [
      { id: "l1", name: "English", level: "Native / Bilingual" },
      { id: "l2", name: "Mandarin Chinese", level: "Professional Working Proficiency" }
    ],
    customSections: []
  }
};

export const defaultCVData = sampleProfiles.softwareEngineer;
