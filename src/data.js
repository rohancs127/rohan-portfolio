// src/data.js

// Import your skill logos
import gcp from './assets/skillLogos/gcp.svg';
import aws from './assets/skillLogos/aws.svg';
import azure from './assets/skillLogos/azure.svg';
import python from './assets/skillLogos/python.svg';
import cpp from './assets/skillLogos/c++.svg';
import javascript from './assets/skillLogos/javascript.svg';
import react from './assets/skillLogos/react.svg';
import nodejs from './assets/skillLogos/node-js.svg';
import sql from './assets/skillLogos/sql.svg';
import git from './assets/skillLogos/git.svg';
import docker from './assets/skillLogos/docker.svg';
import jenkins from './assets/skillLogos/jenkins.svg';

import gcpAceLogo from './assets/Certificates/gcp-ace.png';


export const professionalSummary = {
  name: "Rohan Kumar",
  title: "Cloud Associate Engineer",
  summary: "A Cloud Associate with practical experience in leading cloud platforms, specializing in Infrastructure and Data Modernization. I excel at solving complex problems, always seeking to build efficient technical solutions."
};

export const navigation = [
  { name: "About", ref: "aboutRef" },
  { name: "Experience", ref: "experienceRef" },
  { name: "Certifications", ref: "certificationsRef" },
  { name: "Work", ref: "projectRef" },
  { name: "Contact", ref: "contactRef" },
];

export const experience = [
    {
        role: "Cloud Associate, Customer Engineering",
        company: "Niveus Solutions (Part of NTT Data)",
        date: "July 2025 - Present",
        description: [
          "Analyze customer on-premise and multi-cloud (AWS, Azure) systems to design tailored, cost-effective infrastructure and data modernization solutions on Google Cloud Platform.",
          "Author comprehensive technical proposals that define project scope and serve as a blueprint for the development of the solution.",
          "Develop and present Proof-of-Concepts (POCs) to validate proposed GCP solutions and demonstrate technical value to customers."
        ],
      },
  {
    role: "Customer Engineering Intern",
    company: "Niveus Solutions (Part of NTT Data)",
    date: "Jan 2025 - Jun 2025",
    description: [
      "Contributed to significant cloud infrastructure and data modernization projects, encompassing cross-regional failover solutions and large-scale database migrations.",
      "Developed and implemented diverse DevOps automation scripts and Proof-of-Concepts (POCs) across multi-cloud environments, enhancing operational efficiency."
    ],
  },
  {
    role: "Game Developer Intern",
    company: "Eklavya.me",
    date: "Nov 2023 - Feb 2024",
    description: [
      "Enhanced HTML5 games using Phaser.js as a JavaScript game developer.",
      "Contributed as an Alpha tester for the organization's e-commerce mobile application."
    ],
  },
];

export const projects = [
  {
    name: "Open Source Real-time IoT Enabled Transportation Monitoring",
    description: "Developed an open-source school bus tracking system to enhance student safety by integrating real-time tracking and cloud-stored data.",
    tech: ["ReactJS", "NodeJS", "PostgreSQL", "Supabase", "IoT"],
    link: "https://github.com/dev-shetty/bus-tracking-system", 
  },
  {
    name: "ResQL - Disaster Response System",
    description: "Designed a database management system to streamline disaster response efforts for officials, featuring roles for public users, volunteers, and officials.",
    tech: ["Reactjs", "PostgreSQL", "NodeJS"],
    link: "https://github.com/rohancs127/ResQL",
  },
  {
    name: "Bus Reservation System",
    description: "Developed a full-stack application providing comprehensive functionality for secure and efficient seat reservation in tourist buses.",
    tech: ["NodeJS", "Reactjs", "PostgreSQL"],
    link: "https://github.com/rohancs127/Bus-Reservation-App",
  }
];

export const certifications = [
    {
      name: "Google Cloud Certified - Associate Cloud Engineer",
      issuer: "Google Cloud",
      logo: gcpAceLogo,
      link: "https://www.credly.com/badges/9d786c67-731e-4399-bb4c-5262e5196d7d/public_url"
    }
  ];

export const skills = {
    "Cloud Platforms": [
        { name: "GCP", icon: gcp },
        { name: "AWS", icon: aws },
        { name: "Azure", icon: azure },
    ],
    "Languages & Databases": [
        { name: "Python", icon: python },
        { name: "C++", icon: cpp },
        { name: "JS", icon: javascript },
        { name: "SQL", icon: sql },
    ],
    "Frameworks & Tools": [
        { name: "React.js", icon: react },
        { name: "Node.js", icon: nodejs },
        { name: "Git", icon: git },
        { name: "Docker", icon: docker },
        { name: "CI/CD", icon: jenkins },
    ]
};

export const aboutMe = {
    paragraph1: "Hello! My name is Rohan. As a Cloud and DevOps enthusiast, I have a passion for building efficient, scalable, and resilient cloud infrastructure. My journey in tech has been driven by a curiosity for solving complex problems and a desire to leverage technology to create impactful solutions.",
    paragraph2: "In my current role as a Cloud Associate under Customer Engineering at Niveus, I specialize in analyzing customer environments across different environments to architect tailored and cost-effective modernization solutions on Google Cloud. It's a role that perfectly blends technical discovery with strategic problem-solving.",
    leadership: "During my academic years, I was an active member in the Sahyadri Open Source Community (SOSC). Contributing to open-source and mentoring peers through workshops on core development technologies like Git & Python was a formative experience that solidified my passion for collaborative tech and knowledge sharing."
};

export const contactInfo = {
    email: "rohankumar5803@gmail.com",
    github: "https://github.com/rohancs127",
    linkedin: "https://www.linkedin.com/in/rohan-kumar-k-44aa02228",
    instagram: "https://www.instagram.com/rohan__kumar._",
    // Add other social links if you want
};