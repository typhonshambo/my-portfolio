import { Experience, Project, Achievement, BlogPost } from '../types';

export const experiences: Experience[] = [
  {
    title: "Research Intern",
    company: "Prof. Prabhat Kumar Mishra | IIT Kharagpur",
    duration: "Dec '24 - Present",
    description: [
      "Developed an AI-powered Battery Management System using Polynomial Chaos Theory for uncertainty quantification",
      "Implemented stochastic Model Predictive Control (sMPC) to optimize SOC, voltage, and thermal profiles under uncertainty",
      "Built a real-time optimization pipeline with chaopy for nonlinear constrained optimization"
    ],
    technologies: ["Python", "AI/ML", "Control Systems", "Optimization", "Battery Management"]
  },
  {
    title: "Marketing and Growth Intern",
    company: "orliJEEn",
    duration: "Jul '24 - Mar '25",
    description: [
      "Increased user acquisition by 25% and lowered CPA by 18% through data-driven targeted ad optimizations and keyword tuning",
      "Conducted A/B tests and funnel analysis to find high-converting paths, boosting campaign ROI and marketing performance",
      "Led team to build official app with video streaming, notes, test modules and revamped website for usability and engagement"
    ],
    technologies: ["Digital Marketing", "A/B Testing", "Data Analysis", "App Development", "Growth Hacking"]
  }
];

export const projects: Project[] = [
  {
    name: "AI Style-guide Assistant",
    description: "GenAI-powered code analysis platform using Google Gemini API, reducing coding style inconsistencies by ~60%",
    duration: "Jun '24 - Jul '25",
    technologies: ["Google Gemini API", "VS Code Extension", "REST APIs", "CI/CD", "Streamlit"],
    highlights: [
      "Built a VS Code extension providing real-time suggestions across multiple languages with ~90% accuracy in issue detection",
      "Designed a scalable backend with REST APIs, CI/CD pipeline, and a Streamlit web interface for seamless online code analysis"
    ]
  },
  {
    name: "Predictive Maintenance Model",
    description: "Built complete ML pipeline with Random Forest, achieving ~93% accuracy for predicting failures across 9 distinct sensor metrics",
    duration: "May '24 - Jun '24",
    technologies: ["Machine Learning", "Random Forest", "Streamlit", "MLflow", "DagsHub"],
    highlights: [
      "Deployed a Streamlit dashboard integrated with MLflow, enabling real-time predictions while reducing manual monitoring effort",
      "Automated preprocessing of 1,000+ sensor records, balancing classes via undersampling to improve model performance",
      "Established MLOps lifecycle with DagsHub, enabling reproducible pipelines and version-controlled model deployment"
    ]
  },
  {
    name: "Vstat Discord BOT",
    description: "Built a Discord bot delivering Valorant stats including profiles, match histories, leaderboards, skins, agents, maps, & weapons",
    duration: "Aug '21 - May '24",
    technologies: ["Discord API", "Riot Games API", "PostgreSQL", "MongoDB", "AWS EC2"],
    highlights: [
      "Used Riot Games REST APIs, async handling, PostgreSQL, and MongoDB for efficient, low-latency data retrieval for the bot",
      "Deployed on Amazon AWS EC2 with scalable workflows and automated CI/CD for reliable performance and stable uptime",
      "Verified on Top.gg with 1.7k+ upvotes with active usage across 1.3k+ Discord servers, helping grow and support community"
    ]
  }
];

export const achievements: Achievement[] = [
  {
    title: "LeetCode Contest",
    description: "Achieved a peak rating of 1600+ in global coding contests",
    metric: "1600+",
    icon: "trophy"
  },
  {
    title: "Google Cloud Challenges",
    description: "Solved 40+ competitive LLM/GenAI challenges on Google Cloud Skill Boost, secured 10 points in a month",
    metric: "40+",
    icon: "cloud"
  },
  {
    title: "Hacktoberfest 2024",
    description: "Contributed to and mentored a community of 800+ participants during the global developer event",
    metric: "800+",
    icon: "users"
  },
  {
    title: "Discord Bot Success",
    description: "Scaled Discord bot projects to 2,300+ server deployments, receiving 1,700+ upvotes in the competitive top.gg global listings",
    metric: "2.3k+",
    icon: "bot"
  }
];

export const openSourceContributions = [
  {
    title: "Moderation Logging Improvement | Python.org",
    duration: "Jul '24 - Aug '24",
    description: "Added message linking to official Python bot for 400k+ members, improving deleted message traceability with discord.py."
  },
  {
    title: "Documentation Improvement | Haskell.org",
    duration: "Mar '25 - Apr '25",
    description: "Improved LiquidHaskell docs by clarifying lazy/var usage, recursive termination, and making formal annotations for onboarders."
  },
  {
    title: "MFTP Architecture Refactor | MetaKGP",
    duration: "Jun '24- Jul '24",
    description: "Refactored legacy email processing system by removing deprecated Gmail API, reducing external dependency risks."
  }
];

export const blogPosts: BlogPost[] = [
  {
    title: "Building AI-Powered Code Analysis Tools",
    excerpt: "Deep dive into creating a GenAI-powered style guide assistant using Google Gemini API and VS Code extensions.",
    date: "2025-01-15",
    readTime: "8 min read",
    tags: ["AI", "VS Code", "Developer Tools", "GenAI"]
  },
  {
    title: "MLOps Best Practices for Predictive Maintenance",
    excerpt: "Lessons learned from building end-to-end ML pipelines with MLflow, DagsHub, and automated model deployment.",
    date: "2025-01-10",
    readTime: "12 min read",
    tags: ["MLOps", "Machine Learning", "DevOps", "Automation"]
  },
  {
    title: "Scaling Discord Bots: From Hobby to Production",
    excerpt: "How I scaled my Discord bot to 2,300+ servers and the challenges of handling real-time game data at scale.",
    date: "2025-01-05",
    readTime: "15 min read",
    tags: ["Discord", "Scaling", "Backend", "API Design"]
  },
  {
    title: "Open Source Contributions: Making an Impact",
    excerpt: "My journey contributing to major projects like Python.org and Haskell.org, and what I learned along the way.",
    date: "2024-12-28",
    readTime: "6 min read",
    tags: ["Open Source", "Community", "Documentation", "Python"]
  }
];

export const skills = {
  languages: ["Python", "C", "C++", "SQL", "Bash"],
  dataScience: ["Scikit-learn", "Pandas", "NumPy", "MLflow", "ZenML", "DagsHub", "Matplotlib", "Seaborn"],
  cloudDevOps: ["Docker", "Git", "GitHub Actions", "AWS EC2", "PostgreSQL", "MongoDB", "MySQL"],
  backend: ["Flask", "FastAPI", "Streamlit"]
};