import { CourseModule, Program } from "@/types"

export const HeroData = [
  {
    backgroundImage: "/images/herobg.png",
    // background: "#fbfb89",
    heading: "Get The Best Cybersecurity Courses at One Place",
    subheading: "Build your future with our popular cybersecurity programs.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    buttonText: "Apply Now",
    brochureText: "Download Brochure",
    brochureLink: "https://dataspaceacademy.com/public/datascience/DataScience.pdf",
    buttonLink: "#cybersecurityCourses",
    rating: "4.8/5 Rating Program (1267 reviews)",
  },
]

export const courseDescriptionData = [
  {
    durationText: "Duration",
    duration: "6 Weeks",
    placementSupportText: "Placement Support",
    placementSupport: "100%",
    easyEMIText: "Easy EMI",
    easyEMI: "Available",
    classModeText: "Class Mode",
    classMode: "Online",
    extraBenefitsText: "Extra Benefits",
    extraBenefits: "FREE DataSpace Lab Access",
  },
]

export const ProgramOverviewData = [
  {
    title: "Easy apply for trending jobs",
    id: "easyApply",
    content: "Industry-standard Technical cybersecurity skills and tools",
  },
  {
    title: "Get the best learning experience",
    id: "learningExperience",
    content: "Expert interview preparation assistance",
  },
  {
    title: "Enroll free skill-up courses",
    id: "freeCourses1",
    content: "Grooming and resume optimisation",
  },
  {
    title: "Enroll free skill-up courses",
    id: "freeCourses2",
    content: "Personality development coaching",
  },
]

export const skillsData = [
  { title: "Network Penetration Testing", id: "network-penetration" },
  { title: "Web Application Security", id: "web-security" },
  { title: "Incident Response", id: "incident-response" },
  { title: "Security Auditing", id: "security-auditing" },
  { title: "Resume and LinkedIn profile optimisation strategies", id: "ResumeandLinkedIn" },
  { title: "Practical real-world skill development", id: "practical-real-world" },
]
export const benefitsData = [
  {
    title: "Hacker",
    salary: "₹5L PA - ₹10L PA",
    industries: "Information Technology, Finance, etc",
  },
  {
    title: "Network Security Engineer",
    salary: "₹5L PA - ₹10L PA",
    industries: "Information Technology, Finance, etc",
  },
  {
    title: "Cybersecurity Engineer",
    salary: "₹5L PA - ₹10L PA",
    industries: "Information Technology, Finance, etc",
  },
]

export const CybersecurityHandsOnProjectData = [
  {
    title: "Human Resources Analytics",
    description:
      "Power BI can help HR departments gain insights into employee data, such as turnover rates, recruitment analytics, training effectiveness, and performance evaluations. The tool also helps to create visualizations to identify patterns, measure employee engagement, and optimize HR processes.",
    imageUrl: "/images/human-resource-1.png",
    tools: ["/images/power-bi.png", "/images/excel.png", "/images/tableau.png"],
  },
  {
    title: "Netflix Dashboard Analysis ",
    description:
      "A Netflix Dashboard Analysis in Power BI involves creating a visual representation of data related to Netflix's subscribers, viewership, content performance, user engagement, recommendations, geographical analysis, content release schedule, and user retention.      ",
    imageUrl: "/images/netflix.png",
    tools: ["/images/power-bi.png", "/images/excel.png", "/images/tableau.png"],
  },
  {
    title: "Exploratory Data Analysis on  IPL Dataset",
    description:
      "By conducting EDA on the IPL dataset, we can gain a deeper understanding of the tournament's dynamics, team performances, player statistics, and various factors that contribute to match outcomes. It can also help in identifying strategies and areas for improvement for teams and players.",
    imageUrl: "/images/ipl.png",
    tools: ["/images/power-bi.png", "/images/excel.png"],
  },
  {
    title: "Netflix Dashboard Analysis ",
    description:
      "Power BI can help HR departments gain insights into employee data, such as turnover rates, recruitment analytics, training effectiveness, and performance evaluations. The tool also helps to create visualizations to identify patterns, measure employee engagement, and optimize HR processes.",
    imageUrl: "/images/human-resource-1.png",
    tools: ["/images/power-bi.png", "/images/excel.png", "/images/tableau.png"],
  },
  {
    title: "Human Resources Analytics",
    description:
      "Power BI can help HR departments gain insights into employee data, such as turnover rates, recruitment analytics, training effectiveness, and performance evaluations. The tool also helps to create visualizations to identify patterns, measure employee engagement, and optimize HR processes.",
    imageUrl: "/images/human-resource-1.png",
    tools: ["/images/power-bi.png", "/images/excel.png", "/images/tableau.png"],
  },
  {
    title: "Netflix Dashboard Analysis ",
    description:
      "A Netflix Dashboard Analysis in Power BI involves creating a visual representation of data related to Netflix's subscribers, viewership, content performance, user engagement, recommendations, geographical analysis, content release schedule, and user retention.      ",
    imageUrl: "/images/netflix.png",
    tools: ["/images/power-bi.png", "/images/excel.png", "/images/tableau.png"],
  },
  {
    title: "Exploratory Data Analysis on  IPL Dataset",
    description:
      "By conducting EDA on the IPL dataset, we can gain a deeper understanding of the tournament's dynamics, team performances, player statistics, and various factors that contribute to match outcomes. It can also help in identifying strategies and areas for improvement for teams and players.",
    imageUrl: "/images/ipl.png",
    tools: ["/images/power-bi.png", "/images/excel.png"],
  },
  {
    title: "Netflix Dashboard Analysis ",
    description:
      "Power BI can help HR departments gain insights into employee data, such as turnover rates, recruitment analytics, training effectiveness, and performance evaluations. The tool also helps to create visualizations to identify patterns, measure employee engagement, and optimize HR processes.",
    imageUrl: "/images/human-resource-1.png",
    tools: ["/images/power-bi.png", "/images/excel.png", "/images/tableau.png"],
  },
]
export const CybersecurityCurriculumData: CourseModule[] = [
  {
    module: "Module 1",
    type: "module",
    submodule: [
      {
        title: "Introduction to Network Security",
      },
      {
        title: "Web Application Security",
      },
    ],
  },
  {
    module: "Module 2",
    type: "module",
    submodule: [
      {
        title: "Introduction to Cybersecurity",
        subtitle: ["Introduction to cyber threats", "Types of cyber attacks", "Importance of cybersecurity"],
      },
      {
        title: "Network Security",
      },
      {
        title: "Web Application Security",
      },
    ],
  },
  {
    module: "Test",
    type: "test",
  },
  {
    module: "Module 3",
    type: "module",
    submodule: [
      {
        title: "Introduction to Cybersecurity",
      },
      {
        title: "Network Security",
      },
      {
        title: "Web Application Security",
      },
    ],
  },
  {
    module: "Module 4",
    type: "module",
    submodule: [
      {
        title: "Introduction to Cybersecurity",
        subtitle: ["Introduction to cyber threats", "Types of cyber attacks", "Importance of cybersecurity"],
      },
      {
        title: "Network Security",
      },
      {
        title: "Web Application Security",
      },
    ],
  },
  // Additional modules and assignments
  {
    module: "Module 5",
    type: "module",
    submodule: [
      {
        title: "Data Encryption Techniques",
        subtitle: ["Symmetric encryption", "Asymmetric encryption", "Hash functions"],
      },
      {
        title: "Wireless Security",
        subtitle: ["Wi-Fi security protocols", "Bluetooth security", "RFID security"],
      },
    ],
  },
  {
    module: "Assignment 1",
    type: "test",
  },
  {
    module: "Module 6",
    type: "module",
    submodule: [
      {
        title: "Incident Response and Disaster Recovery",
        subtitle: ["Creating incident response plans", "Business continuity planning", "Disaster recovery strategies"],
      },
      {
        title: "Cloud Security",
        subtitle: [
          "Cloud computing security challenges",
          "Securing cloud-based applications",
          "Data protection in the cloud",
        ],
      },
    ],
  },
  {
    module: "Assignment 2",
    type: "test",
  },
  {
    module: "Module 7",
    type: "module",
    submodule: [
      {
        title: "Ethical Hacking",
        subtitle: ["Penetration testing", "Vulnerability assessment", "Social engineering"],
      },
      {
        title: "Mobile Security",
        subtitle: ["Mobile device management", "App security", "Mobile malware detection"],
      },
    ],
  },
  {
    module: "Assignment 3",
    type: "test",
  },
  {
    module: "Module 8",
    type: "module",
    submodule: [
      {
        title: "Security Governance",
        subtitle: ["Risk management", "Compliance frameworks", "Security policies and procedures"],
      },
      {
        title: "IoT Security",
        subtitle: ["Securing IoT devices", "Privacy concerns", "IoT security best practices"],
      },
    ],
  },
  {
    module: "Assignment 4",
    type: "test",
  },
  {
    module: "Module 9",
    type: "module",
    submodule: [
      {
        title: "Cybersecurity Laws and Regulations",
        subtitle: ["GDPR", "HIPAA", "PCI DSS"],
      },
      {
        title: "Blockchain Security",
        subtitle: ["Consensus mechanisms", "Smart contract security", "Privacy in blockchain"],
      },
    ],
  },
  {
    module: "Assignment 5",
    type: "test",
  },
  {
    module: "Module 10",
    type: "module",
    submodule: [
      {
        title: "Emerging Threats and Trends",
        subtitle: ["AI-driven attacks", "Quantum computing threats", "Biometric security"],
      },
      {
        title: "Social Media Security",
        subtitle: ["Privacy settings", "Identity theft prevention", "Social engineering on social media"],
      },
    ],
  },
  {
    module: "Assignment 6",
    type: "test",
  },
]

export const CybersecurityWhoCanJoinData = [
  {
    title: "Learners with Science Background in 12th Standard (Pre-Enrollment Test needed)",
    id: "learner",
  },
  { title: "Learners pursuing/pursued B.Tech", id: "btech" },
  { title: "Learners with I.T. background", id: "security-auditing" },
  { title: "Graduates (or ongoing graduates) pursuing/pursued BSc, BCA, and CSE", id: "ResumeandLinkedIn" },
]

export const CybersecurityMainProgramBenefitsData = {
  title: "MASTER Program In Cybersecurity",
  duration: "6 months",
  level: "Intermediate",
  points: [
    "Training & Mentorship",
    "Flexible Schedule",
    "Online Live Interaction Session",
    "Recorded Session after the Class",
    "Industry-recognised Certificate",
  ],
}

export const CybersecurityaddOnBenefitsData: Program[] = [
  {
    title: "Job & Placement Guarantee",
    points: [
      "Placement Guarantee (based on assessment and individual performance & attendance)",
      "HR interview preparation",
      "CEHv12 Certification",
      "Technical Grooming",
      "C.V. and LinkedIn profile optimisation",
    ],
  },
  {
    title: "Premium Masterclass ",
    subtitle: "*(+1 year Extra)",
    points: [
      "Placement Guarantee (based on assessment and individual performance & attendance)",
      "HR interview preparation",
      "CEHv12 Certification",
      "Technical Grooming",
      "C.V. and LinkedIn profile optimisation",
    ],
  },
  {
    title: "Effective communication & Personality Development ",
    subtitle: "*(3 Months)",

    points: [
      "Placement Guarantee (based on assessment and individual performance & attendance)",
      "HR interview preparation",
      "CEHv12 Certification",
      "Technical Grooming",
      "C.V. and LinkedIn profile optimisation",
    ],
  },
]
