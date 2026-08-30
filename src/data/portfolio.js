import {
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  Mail,
  MapPin,
  Rocket,
  Server,
  ShieldCheck,
  Trophy,
  Users,
  Wrench
} from 'lucide-react'

export const personal = {
  name: 'Abhishek Tomar',
  location: 'Greater Noida, India',
  education: 'B.Tech CSE, Galgotias University',
  graduation: 'July 2027',
  targetRole: 'Software Engineering Intern, Summer 2027',
  email: 'abhishek9720086@gmail.com',
  github: 'https://github.com/Abhishek-09-Tomar',
  githubUsername: 'Abhishek-09-Tomar',
  linkedin: 'https://www.linkedin.com/in/abhishek-tomar-7aa29127b/',
  leetcode: 'Abhishek_Tomar_99',
  codolio: 'https://codolio.com/profile/iamagoodboy'
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' }
]

export const heroBadges = [
  '250+ LeetCode Problems',
  'MERN Stack Developer',
  'AI/ML Projects',
  'Open to Software Engineering Internships'
]

export const quickInfo = [
  { label: 'B.Tech CSE', icon: GraduationCap },
  { label: 'Software Engineering Intern Candidate', icon: BriefcaseBusiness },
  { label: 'Full-Stack Developer', icon: Code2 },
  { label: 'AI/ML Enthusiast', icon: BrainCircuit },
  { label: '500+ DSA Problems', icon: Trophy },
  { label: 'Open to Worldwide Opportunities', icon: MapPin }
]

export const skills = [
  {
    title: 'Programming Languages',
    icon: Code2,
    items: ['C++', 'Python', 'JavaScript', 'Java']
  },
  {
    title: 'Frontend',
    icon: Rocket,
    items: ['HTML', 'CSS', 'React.js', 'Tailwind CSS', 'Bootstrap']
  },
  {
    title: 'Backend',
    icon: Server,
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication']
  },
  {
    title: 'Databases',
    icon: Database,
    items: ['MongoDB', 'MySQL']
  },
  {
    title: 'AI/ML',
    icon: BrainCircuit,
    items: [
      'Machine Learning Basics',
      'NLP',
      'RAG',
      'OpenAI API',
      'LLM Integration'
    ]
  },
  {
    title: 'Core Computer Science',
    icon: GraduationCap,
    items: [
      'Data Structures and Algorithms',
      'OOP',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
      'System Design Basics'
    ]
  },
  {
    title: 'Tools',
    icon: Wrench,
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'MongoDB Compass']
  }
]

export const projects = [
  {
    title: 'Mini LinkedIn - MERN Social Platform',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    description:
      'A LinkedIn-style professional networking platform with authentication, user profiles, posts, likes, comments, and follow/unfollow features.',
    github: 'https://github.com/Abhishek-09-Tomar/mini-linkedin.git',
    demo: '#',
    features: [
      'Secure authentication',
      'Profile management',
      'Post creation',
      'Like and comment system',
      'Follow/unfollow functionality',
      'REST API backend'
    ],
    accent: 'blue'
  },
  {
    title: 'AI Document Chatbot',
    tech: ['Python', 'Flask', 'OpenAI API', 'RAG'],
    description:
      'An AI-powered chatbot that answers questions from uploaded documents using retrieval-based generation.',
    github: 'https://github.com/Abhishek-09-Tomar/ai-document-chatbot.git',
    demo: '#',
    features: [
      'Document upload',
      'Context-based question answering',
      'OpenAI API integration',
      'RAG-style retrieval',
      'Simple Flask backend'
    ],
    accent: 'green'
  }
]

export const experiences = [
  {
    role: 'Machine Learning Internship',
    company: 'EduSkills',
    period: 'June 2026 - Aug 2026',
    description:
      'Worked with Scikit-Learn,  data cleaning, exploratory data analysis, feature engineering, and predictive machine learning models.'
  },
  {
    role: 'Data Science Intern',
    company: 'Interns Elite',
    period: 'Jul 2024 - Sep 2024',
    description:
      'Worked with Python, Pandas, NumPy, data preprocessing, real estate price prediction, and spam mail detection.'
  }
]

export const codingProfiles = [
  {
    name: 'LeetCode',
    username: 'Abhishek_Tomar_99',
    highlight: '250+ problems solved',
    href: 'https://leetcode.com/u/Abhishek_Tomar_99/',
    icon: Code2
  },
  {
    name: 'GitHub',
    username: 'Abhishek-09-Tomar',
    highlight: 'Project repositories and contribution-style growth',
    href: 'https://github.com/Abhishek-09-Tomar',
    icon: Code2
  },
  {
    name: 'Codolio',
    username: 'iamagoodboy',
    highlight: 'Coding profile and problem-solving tracker',
    href: 'https://codolio.com/profile/iamagoodboy',
    icon: Award
  }
]

export const achievements = [
  { title: 'Solved 500+ DSA problems across different platforms', icon: Code2 },
  {
    title:
      'Completed Data Science, AI/ML, and Cybersecurity Internship Experience',
    icon: BriefcaseBusiness
  },
  {
    title: 'Strong Foundation in DSA, Backend Systems, and AI Integration',
    icon: BrainCircuit
  },
  { title: 'Built multiple full-stack and AI-integrated projects', icon: Users }
]

export const socialLinks = [
  { label: 'GitHub', href: personal.github, icon: Code2 },
  { label: 'LinkedIn', href: personal.linkedin, icon: Users },
  { label: 'Email', href: `mailto:${personal.email}`, icon: Mail }
]
