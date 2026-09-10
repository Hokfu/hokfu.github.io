export type SocialLink = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
};

export type EducationItem = {
  school: string;
  period: string;
  detail?: string;
};

export type CaseStudy = {
  title: string;
  summary: string;
  stack: string[];
};

export type CertificateItem = {
  label: string;
  href: string;
};

export const portfolio = {
  name: "Khant Htoo Naing",
  role: "AI Software Engineer",
  heroTitle: "Agentic AI systems with memory, reasoning, and production reliability.",
  heroSummary:
    "I design and build autonomous AI software that combines cognitive architectures with scalable Go and Python microservices for SaaS environments.",
  about:
    "Specializing in Agentic AI and autonomous AI agents. I focus on practical architecture and measurable delivery speed using agentic coding workflows.",
  contact: {
    email: "khanthtoonaing2000@gmail.com",
    phone: "(66) 619680046, (95) 943019344"
  },
  socials: [
    { label: "GitHub", href: "https://github.com/Hokfu" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/khant-htoo-naing-31799a234"
    }
  ] satisfies SocialLink[],
  caseStudies: [
    {
      title: "Autonomous Agentic Workflows",
      summary:
        "Designed AI agents that execute multi-step tasks using tool invocation and reasoning loops beyond one-shot generation.",
      stack: ["Agentic AI", "Python", "Tool Use", "Reasoning Systems"]
    },
    {
      title: "Long-Term Memory for In-Context Learning",
      summary:
        "Implemented memory architecture enabling persistent state retrieval across extended sessions to improve continuity and context quality.",
      stack: ["Memory Systems", "ICL", "RAG", "Python"]
    },
    {
      title: "Scalable AI SaaS Microservices",
      summary:
        "Built high-performance backend services in Go and Python for AI workloads, emphasizing reliability, modular APIs, and maintainability.",
      stack: ["Go", "Python", "Microservices", "API Design"]
    }
  ] satisfies CaseStudy[],
  experience: [
    {
      company: "General Magick Industries",
      role: "AI Developer",
      location: "Thailand",
      period: "June 2023 - Present",
      highlights: [
        "Architected autonomous AI systems for complex reasoning and task execution.",
        "Engineered memory mechanisms to retain and retrieve state over long-running interactions.",
        "Developed scalable AI-powered SaaS microservices using Go and Python."
      ]
    }
  ] satisfies ExperienceItem[],
  skills: {
    "Core AI": ["Agentic Systems", "In-Context Learning", "RAG", "Memory Systems"],
    Languages: ["Python", "Go"],
    Engineering: ["Microservices", "API Design", "SaaS Architecture", "Agentic Coding"]
  },
  education: [
    {
      school: "Rangsit University, Thailand",
      period: "January 2023 - June 2024",
      detail: "Bachelor of Science in Information and Communication Technology"
    },
    {
      school: "Yangon Technological University, Myanmar",
      period: "December 2016 - January 2020"
    }
  ] satisfies EducationItem[],
  certificates: [
    {
      label: "CS50AI",
      href: "https://certificates.cs50.io/b4258c09-5a0f-4318-996e-10b3cfac5fbb.pdf"
    },
    {
      label: "MLOps (DataTalksClub)",
      href: "https://certificate.datatalks.club/mlops-zoomcamp/2024/eb546fc3dedcd0c2b8a86c3e2970e60f9623fb4f.pdf"
    },
    {
      label: "Machine Learning (DataTalksClub)",
      href: "https://certificate.datatalks.club/ml-zoomcamp/2023/eb546fc3dedcd0c2b8a86c3e2970e60f9623fb4f.pdf"
    }
  ] satisfies CertificateItem[]
};
