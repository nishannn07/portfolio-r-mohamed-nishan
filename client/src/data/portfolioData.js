// /client/src/data/portfolioData.js
// Extracted from R Mohamed Nishan's CV

// --- Contact Info ---
export const contactInfo = {
    email: "nishan.md0502@gmail.com",
    phone: "+91-9345440095",
    linkedin: "https://linkedin.com/in/r-mohamed-nishan",
    github: "https://github.com/nishannn07",
  };
  
  // --- Skills ---
  // Categorized for better display
  export const skills = {
    languages: ["C++", "JavaScript", "C", "Python", "Java"],
    frameworks: ["HTML", "CSS", "Bootstrap", "Tailwind", "Node.js", "Express.js"],
    databases: ["MySQL", "MongoDB", "Mongoose"], // Added Mongoose from project
    cloud: ["AWS", "GCP", "AWS S3", "CloudFront", "CloudWatch", "ACM"], // Specific AWS services
    softSkills: ["Problem-Solving", "Team Player", "Project Management", "Adaptability", "Communication", "Event-Planning"],
  };
  
  // Example proficiency levels (adjust as needed)
  export const skillLevels = {
    "C++": 85,
    "JavaScript": 80,
    "Python": 70,
    "Java": 75,
    "HTML": 90,
    "CSS": 85,
    "Tailwind": 80,
    "Node.js": 75,
    "Express.js": 70,
    "React.js": 70, // Assuming some React knowledge for this portfolio build
    "MySQL": 70,
    "MongoDB": 75,
    "AWS": 70,
    "Data Structures": 80, // Implied skill
    "Algorithms": 75, // Implied skill
    "Problem-Solving": 90,
  };
  
  
  // --- Internship Experience ---
  export const experience = [
    {
      title: "Community Awareness Co-ordinator",
      company: "Thozhamai",
      duration: "March 2023 – Present", // Adjust if ended
      description: [
        "Engaged with children through interactive and fun-based learning activities to enhance their education.",
        "Organized 3 awareness sessions on women's health and hygiene for communities totaling over 150 residents.",
        "Facilitated access to free medical consultations for approximately 40 women.",
      ],
      skillsDeveloped: ["Communication", "Adaptability", "Event-Planning"],
    },
  ];
  
  // --- Projects ---
  export const projects = [
    {
      id: "agriconnect",
      title: "AgriConnect - Seed & Fertilizer Marketplace",
      date: "April 2025",
      description: "Developed a full-stack web application connecting farmers in Punjab with agricultural input suppliers, enhancing price transparency and accessibility.",
      features: [
          "Product catalog viewing.",
          "Add/Remove product listings via web form.",
          "RESTful API for product management (GET, POST, DELETE).",
          "MongoDB/Mongoose for data persistence and schema validation."
      ],
      tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Vanilla JavaScript", "Tailwind CSS"],
      github: "https://github.com/nishannn07", // Add specific repo link if available
      live: null, // Add live demo link if available
      imageUrl: "/images/project-agriconnect.png", // Placeholder path - Create /public/images folder
    },
    {
      id: "Command – Line Web Scrapper",
      title: "Command – Line Web Scrapper",
      date: "January 2025",
      description: "Developed a robust command line web scrapping tool in Go to extract hyperlinks and headlines from any public web page.",
      features: [
      "Extracts links and headlines from any public web page.",
      "Built with Go for speed and simplicity.",
      "Uses net/http and goquery for web scraping.",
      "Handles errors and invalid input gracefully.",
      "Works via a simple command-line interface."
      ],
      tech: ["Go", "net/http", "goquery", "URL", "CLI"],
      github: "https://github.com/nishannn07", // Add specific repo link if available
      live: null,
      imageUrl: "/images/project-aws.png", // Placeholder path
    },
    {
      id: "lms",
      title: "Learning Management System",
      date: "September 2022",
      description: "Designed and developed a full-stack LMS with secure authentication, course management, progress tracking, and an interactive dashboard. Deployed on AWS.",
      features: [
          "Secure user authentication & access control.",
          "Course management features.",
          "Interactive dashboard for students and instructors.",
          "Deployed on AWS for high availability and scalability."
      ],
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind", "AWS"], // Specify backend tech if known (e.g., Node.js?)
      github: "https://github.com/nishannn07", // Add specific repo link if available
      live: null,
      imageUrl: "/images/project-lms.png", // Placeholder path
    },
  ];
  
  // --- Education ---
  export const education = [
     {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      duration: "August 2022 – Present", // Or expected graduation date (e.g., May 2026)
      location: "Punjab, India",
      details: "CGPA: 7.92",
    },
     {
      institution: "Kendriya Vidyalaya",
      degree: "12th Grade",
      duration: "April 2020 – March 2022",
      location: "Tamil Nadu, India",
      details: "Percentage: 76%",
    },
    {
      institution: "Kendriya Vidyalaya",
      degree: "10th Grade",
      duration: "April 2018 – March 2020",
      location: "Tamil Nadu, India",
      details: "Percentage: 94%",
    },
  ];
  
  // --- Certificates --- (Optional Section)
  export const certificates = [
      { name: "Cloud Computing", issuer: "CipherSchool", date: "Feb 2025" },
      { name: "Introduction to MongoDB", issuer: "MongoDB", date: "June 2024" },
      { name: "DSA", issuer: "Programming Pathshala", date: "August 2024" },
      { name: "Front-End Course", issuer: "META", date: "July 2023" },
  ];
  
  