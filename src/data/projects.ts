// Project data interface definition
import car from "../assets/car_accident.png";
import aimath from "../assets/aimath.png";
import intern from "../assets/intern.png";
import portfolio from "../assets/portfolio.png";
import face from "../assets/face.png"
import nqueens from "../assets/nqueens.png"
import dashboard from "../assets/dashboard.png"
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
    liveUrl: "https://www.linkedin.com/posts/divyansh-pansari-896a90234_machinelearning-computervision-yolov8-activity-7299689962004758530-nKOF?utm_source=share&utm_medium=member_desktop&rcm=ACoAADqJVfIBA3Bnz4JDLXppPbXEhZevQ8TYulQ",
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
    liveUrl: "https://www.linkedin.com/posts/divyansh-pansari-896a90234_aiinaction-techinnovation-gesturebasedcalculator-activity-7297294629521997825-ZCAc?utm_source=share&utm_medium=member_desktop&rcm=ACoAADqJVfIBA3Bnz4JDLXppPbXEhZevQ8TYulQ",
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
    title: "FaceTracker-Face Attendance System", // Change project title
    description: "Built a real-time Face Attendance System using facial recognition and Redis for logging, with role-based identity detection and webcam integration", // Update description
    image: face,
    tags: ["OpenCV", "Redis", "EC2", "Insightface API","Streamlit"],
    repoUrl: "https://github.com/Divyansh9007/attendance-system-app", // Update with your repo URL
    liveUrl:"https://attendance-system-app-h8tvetxnfpkpuzqfmnqtnz.streamlit.app/",
    techStack: [
      "React",
      "Typescript",
      "Javascript",
      "TailwindCSS",
      "Framer Motion"
    ]
  },
  {
    id: 4,
    title: "InternHub-Intern Management System", // Change project title
    description: "The Intern Management System handles intern registration, task assignments, and performance tracking for efficient management and feedback.", // Update description
    image: intern,
    tags: ["React", "Javascript", "Typescript", "TailwindCSS"],
    repoUrl: "https://github.com/Divyansh9007/InternHub", // Update with your repo URL
    liveUrl: "https://divyansh9007.github.io/InternHub/",
    techStack: [
      "React",
      "Javascript",
      "Typescript",
      "TailwindCSS"
     
    ]
  },
  {
    id: 5,
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
  {
    id: 6,
    title: "AlgoVisualizer", // Change project title
    description: "Interactive platform to visualize and understand algorithms through animations and step-by-step explanations.", // Update description
    image: nqueens,
    tags: ["React", "Javascript", "TailwindCSS","Framer Motion"],
    repoUrl: "https://github.com/Divyansh9007/AlgoVision", // Update with your repo URL
    liveUrl: "algo-vision-flax.vercel.app",
  
    techStack: [
      "React",
      "Javascript",
      "TailwindCSS",
      "Framer Motion",
      "Zustand"
    ]
  },
  {
    id: 7,
    title: "Finance Tracker", // Change project title
    description: "Interactive Platform to manage client transactions and investments and provide AI Insights", // Update description
    image: dashboard,
    tags: ["React", "Javascript", "TailwindCSS","Framer Motion"],
    repoUrl: "https://github.com/Divyansh9007/finance-app", // Update with your repo URL
    liveUrl: "finance-personal-app.vercel.app/",
  
    techStack: [
      "React",
      "TypeScript",
      "Javascript",
      "TailwindCSS",
      "Framer Motion"
    ]
  },
  // Continue with your other projects...
];