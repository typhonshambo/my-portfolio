export interface Command {
  name: string;
  description: string;
  execute: () => void;
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  location?: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  name: string;
  description: string;
  duration: string;
  technologies: string[];
  highlights: string[];
  github?: string;
  demo?: string;
}

export interface Achievement {
  title: string;
  description: string;
  metric?: string;
  icon: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}