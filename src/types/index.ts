export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  postedDate: string;
  category: string;
  logo: string;
  featured?: boolean;
}

export interface Company {
  id: number;
  name: string;
  description: string;
  location: string;
  website: string;
  logo: string;
  industry: string;
  size: string;
  jobsCount: number;
  rating: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role: 'jobseeker' | 'employer';
  location: string;
  phone: string;
  skills: string[];
  experience: string;
  education: string;
  resume: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export interface Category {
  id: number;
  name: string;
  icon: string;
  jobsCount: number;
}

export interface Notification {
  id: number;
  title: string;
  message: string;
  date: string;
  read: boolean;
  type: 'job' | 'message' | 'system';
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}
