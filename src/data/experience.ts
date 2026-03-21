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
    date: "January 2026 - Present",
    title: "MLOps Engineer",
    organization: "UPL",
    description: "Building and optimizing machine learning pipelines using Databricks, MLflow, and Airflow. Developing scalable data processing workflows with Python and implementing CI/CD practices for ML models. Managing experiment tracking, model versioning, and deployment automation."
  },
  {
    date: "May 2024 - Aug 2024",
    title: "Machine Learning Intern",
    organization: "KalkiNI",
    description: "Optimized a computer vision model for violence detection, improving accuracy by 25% and reducing false positives by 30%. Streamlined processes and debugging, leading to a 20% faster project delivery and enhanced model performance."
  },
  // Add more work experience entries here
];

// Education data - Update with your educational background
export const educationData: EducationItem[] = [
  {
    date: "2022 - 2026", // Update education dates
    degree: "Bachelor of Technology in Computer Science Engineering", // Update degree
    institution: "Vellore Institute of Technology, Vellore", // Update institution
    description: "Specialized in web development, algorithms, and software engineering. Active member of coding club and technical events." // Update education details
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