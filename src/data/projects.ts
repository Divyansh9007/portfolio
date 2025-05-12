// Project data interface definition
import car from "../../assets/car_accident.png";
import aimath from "../../assets/aimath.png";
import intern from "../../assets/intern.png";
import portfolio from "../../assets/portfolio.png";

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;  // URL to project screenshot/image
  tags: string[]; // Technologies used
  liveUrl?: string;  // Optional live demo URL
  repoUrl?: string;  // Optional GitHub repository URL
  features?: string[];  // Optional list of project features
  techStack?: string[]; // Optional detailed tech stack
}

// Main projects array - Update this with your own projects
export const projects: ProjectData[] = [
  {
    id: 1,
    title: "Car Accident Detection ", // Change project title
    description: "The Car Accident Detection model uses OpenCV and YOLOv8 to detect collisions and abnormal vehicle behavior in real-time. It ensures fast and accurate accident alerts for safety systems.", // Update project description
    // Replace with your project screenshot
    // Recommended size: 1280x720 or 16:9 aspect ratio
    image: car,
    tags: ["OpenCV", "Computer Vision", "Roboflow", "Python"], // Update tech tags
    repoUrl: "https://github.com/Divyansh9007/Car-Accident-Detection-Using-YOLOV8", // Update with your repo URL
    
   techStack: [
      "OpenCV",
      "Python",
      "YOLOV8",
      "Roboflow",
      
    ]
  },
  // Add more projects following the same structure
  {
    id: 2,
    title: "AI-based Hand Gesture Math Calculator", // Change project title
    description: "This project lets users draw math problems in the air using hand gestures tracked via webcam. On a specific gesture, the drawing is sent to Gemini AI for solving. The solution is displayed live in a Streamlit web interface", // Update description
    image: aimath,
    tags: ["Python", "OpenCV and cvzone", "streamlit", "NumPy","Gemini API"],
    repoUrl: "https://github.com/Divyansh9007/AI-Powered-Hand-Gesture-Based-Math-Solver", // Update with your repo URL
    
    techStack: [
      "Python",
      "OpenCV and cvzone",
      "Streamlit",
      "Gemini API",
      "NumPy and PIL"
    ]
  },
  {
    id: 3,
    title: "Intern Management System", // Change project title
    description: "The Intern Management System handles intern registration, task assignments, and performance tracking for efficient management and feedback.", // Update description
    image: intern,
    tags: ["React", "Javascript", "Typescript", "TailwindCSS"],
    repoUrl: "https://github.com/Divyansh9007/Intern-Management-System", // Update with your repo URL
   
    techStack: [
      "React",
      "Javascript",
      "Typescript",
      "TailwindCSS"
     
    ]
  },
  {
    id: 4,
    title: "Portfolio Website", // Change project title
    description: "A modern and interactive portfolio showcasing my skills, projects, and journey as a frontend developer. Built with React, Tailwind CSS, and Framer Motion to deliver a smooth and engaging user experience.", // Update description
    image: portfolio,
    tags: ["React", "Typescript", "Javascript", "TailwindCSS","Framer Motion"],
    repoUrl: "", // Update with your repo URL
  
    techStack: [
      "React",
      "Typescript",
      "Javascript",
      "TailwindCSS",
      "Framer Motion"
    ]
  },
  // Continue with your other projects...
];