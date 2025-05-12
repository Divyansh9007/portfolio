// Experience item interface
interface ExperienceItem {
  date: string;
  title: string;
  organization: string;
  description: string;
}

// Education item interface
interface EducationItem {
  date: string;
  degree: string;
  institution: string;
  description: string;
}

// Work experience data - Update with your professional experience
export const experienceData: ExperienceItem[] = [
  {
    date: "May 2024 - Aug 2024", // Update date range
    title: "Machine Learning Intern", // Update job title
    organization: "KalkiNI", // Update company name
    description: "Optimized a computer vision model for violence detection, improving accuracy by 25% and reducing false positives by 30%. Streamlined processes and debugging, leading to a 20% faster project delivery and enhanced model performance." // Update job description
  },
  {
    date: "June 2024 - July 2024", // Update date range
    title: "Frontend Developer Intern", // Update job title
    organization: "Yhills", // Update company name
    description: "Built a pizza delivery website using React.js, achieving a 40% faster load time and 25% higher user engagement.Integrated features like ordering, cart management, and a responsive UI, with advanced animations and CSS for an enhanced customer experience." // Update job description
  },
  // Add more work experience entries here
];

// Education data - Update with your educational background
export const educationData: EducationItem[] = [
  {
    date: "2022 - 2026", // Update education dates
    degree: "Bachelor of Technology in Computer Science", // Update degree
    institution: "Vellore Institute of Technology, Vellore", // Update institution
    description: "CGPA: 8.73/10. Specialized in web development, algorithms, and software engineering. Active member of coding club and technical events." // Update education details
  },
  {
    date: "2020", // Update education dates
    degree: "Class X", // Update degree
    institution: "Sri Sri Academy, Kolkata", // Update institution
    description: "Percentage: 95.4" // Update education details
  },
  {
    date: "2022", // Update education dates
    degree: "Class XII", // Update degree
    institution: "Birla High School, Kolkata", // Update institution
    description: "Percentage: 93.4" // Update education details
  },
  // Add more education entries here
];