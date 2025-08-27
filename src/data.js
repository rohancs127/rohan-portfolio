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
          "Contribute to significant cloud infrastructure and data modernization projects, encompassing cross-regional failover solutions and large-scale database migrations.",
          "Develop and implement diverse DevOps automation scripts and Proof-of-Concepts (POCs) across multi-cloud environments, enhancing operational efficiency."
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
    paragraph2: "Currently working as a Cloud Associate at Niveus, I have hands-on experience with major cloud platforms like GCP, AWS, and Azure, contributing to data modernization projects and developing DevOps automation scripts.",
    leadership: "I am also an active member of the Sahyadri Open Source Community (SOSC), where I contribute to open-source projects and conduct workshops on topics like Git, Python, and C++ for my peers."
};

export const contactInfo = {
    email: "rohankumar5803@gmail.com",
    github: "https://github.com/rohancs127",
    linkedin: "https://www.linkedin.com/in/rohan-44aa02228",
    instagram: "https://www.instagram.com/rohan__kumar._",
    // Add other social links if you want
};