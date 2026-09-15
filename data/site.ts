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
  link?: string;
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
      title: "TechQA Agent — Agentic RAG",
      summary:
        "Agentic RAG that answers IBM technical-support questions across 28k Technotes. When single-shot retrieval misses, the agent rewrites the query and searches again before answering — grounded in retrieved docs and measured against gold answers.",
      stack: ["Agentic RAG", "Qdrant", "MiniLM", "LLM", "Python"],
      link: "https://github.com/Hokfu/techqa-agentic-rag"
    },
    {
      title: "Campaign Success Prediction (MLOps)",
      summary:
        "End-to-end MLOps pipeline predicting marketing-campaign success. A Random Forest classifier tuned and versioned in MLflow, wrapped with experiment tracking, orchestration, deployment, and monitoring for a reproducible, production-style workflow.",
      stack: ["MLOps", "MLflow", "Random Forest", "Python", "Pipeline"],
      link: "https://github.com/Hokfu/campaign_success_prediction_with_mlops"
    },
    {
      title: "Steel Industry Energy Classification",
      summary:
        "Classification model predicting energy-load type for a smart small-scale steel plant (UCI dataset), letting the plant anticipate high/medium/low consumption and cut costs. Covers EDA, model training and tuning, dependency management, and containerization.",
      stack: ["Machine Learning", "Classification", "Python", "Docker"],
      link: "https://github.com/Hokfu/Energy-Consumption-Model"
    }
  ] satisfies CaseStudy[],
  experience: [
    {
      company: "General Magick Industries",
      role: "Software Engineer",
      location: "Thailand",
      period: "June 2023 - Present",
      highlights: [
        "Architected autonomous AI systems for complex reasoning and task execution.",
        "Engineered memory mechanisms to retain and retrieve state over long-running interactions.",
        "Developed scalable AI-powered SaaS microservices using Go and Python."
      ]
    },
    {
      company: "Rangsit International College",
      role: "Software Developer Intern",
      location: "Thailand",
      period: "January 2022 - April 2022",
      highlights: [
        "Built a lightweight RAG application in Python with a FAISS vector database to answer department FAQs.",
        "Developed a Staff Evaluation web app with a React JS frontend to analyze staff self-motivation.",
        "Collaborated in a team of 7 to deliver both applications for the department."
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
