// Certification data interface
export interface CertificationData {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  description: string;
}

// Certifications array - Update with your certifications
export const certifications: CertificationData[] = [
  {
    id: 1,
    title: "AWS Certified Solution Architect", // Update certification title
    issuer: "AWS", // Update certification issuer
    date: "2025", // Update date
    credentialUrl: "https://drive.google.com/file/d/1LtjdOMjnk-OENZSO_wElJiVGn_AlhkVZ/view?usp=sharing", // Update with your credential URL
    description: "Achieved AWS Certified Solution Architect certification, validating advanced architectural designs and understanding of AWS services and architecture." // Update description
  },{
    id: 2,
    title: "AWS Certified Cloud Practitioner", // Update certification title
    issuer: "AWS", // Update certification issuer
    date: "2024", // Update date
    credentialUrl: "https://drive.google.com/file/d/1Hww8h_MNoIpvHxrMCAVA8NqA6P_w93Pm/view", // Update with your credential URL
    description: "Achieved AWS Certified Cloud Practitioner certification, validating foundational cloud knowledge and understanding of AWS services and architecture." // Update description
  },
  {
    id: 3,
    title: "Forage Certification: Software Engineering Job Simulation", // Update certification title
    issuer: "Accenture", // Update certification issuer
    date: "2024", // Update date
    credentialUrl: "https://drive.google.com/file/d/1alCl3WKWbo9u3vtLOYAC-7r98IDsvwCJ/view", // Update with your credential URL
    description: "Completed Forage’s Software Engineering Job Simulation, gaining hands-on experience with real-world engineering tasks like debugging, feature implementation, and code collaboration." // Update description
  },
  {
    id: 4,
    title: "HackerRank Problem Solving", // Update certification title
    issuer: "HackerRank", // Update certification issuer
    date: "2025", // Update date
    credentialUrl: "https://www.hackerrank.com/certificates/7640f5b00b39", // Update with your credential URL
    description: "Achieved certification in HackerRank Problem Solving, demonstrating strong analytical and algorithmic thinking through real-world coding challenges." // Update description
  },
  // Add more certifications here
];