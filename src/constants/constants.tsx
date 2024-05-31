import { OurProgramCardProps } from "@/types"
import { BestSelling, CybersecurityIcon, Datascience, DigitalMarketing, NetworkingCloud, Programing } from "./icons"

export const ourPrograms: OurProgramCardProps[] = [
  {
    id: 1,
    program_Name: "Best Selling",
    program_description:
      "We extend industry-leading certification courses in the most in-demand career domains, including Cybersecurity, Data Science, Data Analytics, Business Analytics, Digital Marketing, AWS, and Machine Learning.",
    program_link: "String",
    hoverColor: "#ff9933",
    icons: <BestSelling title="Best Selling" titleId="best-selling-title" />,
    courses: [
      {
        id: "1",
        name: "Diploma in Cyber Security",
        duration: "1 Month",
        programLevel: "Beginners Level Program",
        chip: "Limited Seats",
        route: "courses/cybersecurity/master-program-in-cybersecurity/",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
      {
        id: "2",
        name: "Cybersecurity Essentials Program",
        duration: "5 Month",
        programLevel: "Beginners Level Program",
        chip: "Best Seller",
        route: "https://dataspaceacademy.com/master-program-in-cybersecurity/",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
      {
        id: "3",
        name: "Penetration Testing for Security Engineer",
        duration: "1 Month",
        programLevel: "Intermediate Level Program",
        chip: "Best Seller",
        route: "cybersecurity/master-program-in-cybersecurity/",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
    ],
  },
  {
    id: 2,
    program_Name: "Cyber Security",
    program_description:
      "We provide multi-level Cybersecurity programs for learners of all levels, ranging from beginner to advanced level. Our cybersecurity programs are also open to learners from all backgrounds, including both tech and non-tech.      ",
    program_link: "courses/cybersecurity/",
    hoverColor: "#f52b02",
    icons: <CybersecurityIcon title="Best Selling" titleId="best-selling-title" />,
    courses: [
      {
        id: "1",
        name: "Diploma in Cybersecurity",
        duration: "1 Month",
        programLevel: "Beginners Level Program",
        chip: "Limited Seats",
        route: "courses/cybersecurity/master-program-in-cybersecurity/",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
      {
        id: "2",
        name: "Certified Ethical Hacker V12",
        duration: "5 Month",
        programLevel: "Beginners Level Program",
        chip: "Best Seller",
        route: "https://dataspaceacademy.com/master-program-in-cybersecurity/",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
      {
        id: "3",
        name: "Certification in Bug Bounty",
        duration: "1 Month",
        programLevel: "Intermediate Level Program",
        chip: "Best Seller",
        route: "cybersecurity/master-program-in-cybersecurity/",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
      {
        id: "4",
        name: "Certification in Cyber Forensic",
        duration: "6 Month",
        programLevel: "Intermediate Level Program",
        chip: "Limited Seats",
        route: "cybersecurity/master-program-in-cybersecurity/",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
      {
        id: "5",
        name: "Certification in OSCP",
        duration: "1 Month",
        programLevel: "Beginners Level Program",
        chip: "Limited Seats",
        route: "cybersecurity/master-program-in-cybersecurity/diploma-in-cyber-security",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
      {
        id: "6",
        name: "Cybersecurity Essential Program",
        duration: "12 Month",
        programLevel: "Beginners Level Program",
        chip: "Best Seller",
        route: "cybersecurity/master-program-in-cybersecurity/cybersecurity-essentials-program",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
      {
        id: "7",
        name: "Master Program in Cybersecurity",
        duration: "12 Month",
        programLevel: "Beginners Level Program",
        chip: "Best Seller",
        route: "cybersecurity/master-program-in-cybersecurity/cybersecurity-essentials-program",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
      {
        id: "8",
        name: "Advance Penetration Testing",
        duration: "12 Month",
        programLevel: "Beginners Level Program",
        chip: "Best Seller",
        route: "cybersecurity/master-program-in-cybersecurity/cybersecurity-essentials-program",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
      {
        id: "9",
        name: "Pentesting for security Engineer",
        duration: "12 Month",
        programLevel: "Beginners Level Program",
        chip: "Best Seller",
        route: "cybersecurity/master-program-in-cybersecurity/cybersecurity-essentials-program",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
      {
        id: "10",
        name: "Certified Network Defender",
        duration: "12 Month",
        programLevel: "Beginners Level Program",
        chip: "Best Seller",
        route: "cybersecurity/master-program-in-cybersecurity/cybersecurity-essentials-program",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
      {
        id: "11",
        name: "Certified Cloud Security Engineer",
        duration: "12 Month",
        programLevel: "Beginners Level Program",
        chip: "Best Seller",
        route: "cybersecurity/master-program-in-cybersecurity/cybersecurity-essentials-program",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
      {
        id: "12",
        name: "Certified SOC Analyst",
        duration: "12 Month",
        programLevel: "Beginners Level Program",
        chip: "Best Seller",
        route: "cybersecurity/master-program-in-cybersecurity/cybersecurity-essentials-program",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
      {
        id: "13",
        name: "Computer Hacker Forensic investigator",
        duration: "12 Month",
        programLevel: "Beginners Level Program",
        chip: "Best Seller",
        route: "cybersecurity/master-program-in-cybersecurity/cybersecurity-essentials-program",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
      {
        id: "14",
        name: "Certified penetration Testing",
        duration: "12 Month",
        programLevel: "Beginners Level Program",
        chip: "Best Seller",
        route: "cybersecurity/master-program-in-cybersecurity/cybersecurity-essentials-program",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
    ],
  },
  {
    id: 3,
    program_Name: "Data Science & Analytics",
    program_description:
      "We provide a comprehensive Data Science training course for aspiring data experts. Those new to the domain can begin with our Data Analytics and Business Analytics courses. Additionally, we are extending a Certification course in Microsoft Power BI.",
    program_link: "/",
    hoverColor: "#00d1b9",
    icons: <Datascience title="Best Selling" titleId="best-selling-title" />,
    courses: [
      {
        id: "1",
        name: "Certification In Data Analytics",
        duration: "1 Month",
        programLevel: "Beginners Level Program",
        chip: "Limited Seats",
        route: "courses/cybersecurity/master-program-in-cybersecurity/",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
      {
        id: "2",
        name: "Certification In Data Science",
        duration: "5 Month",
        programLevel: "Beginners Level Program",
        chip: "Best Seller",
        route: "cybersecurity/master-program-in-cybersecurity",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
      {
        id: "3",
        name: "Penetration Testing for Security Engineer",
        duration: "1 Month",
        programLevel: "Intermediate Level Program",
        chip: "Best Seller",
        route: "cybersecurity/master-program-in-cybersecurity/",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
      {
        id: "4",
        name: "Certification In Business Analytics",
        duration: "6 Month",
        programLevel: "Intermediate Level Program",
        chip: "Limited Seats",
        route: "/cybersecurity/master-program-in-cybersecurity",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
      {
        id: "5",
        name: "Certification In Power BI",
        duration: "1 Month",
        programLevel: "Beginners Level Program",
        chip: "Limited Seats",
        route: "cybersecurity/master-program-in-cybersecurity/diploma-in-cyber-security",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
    ],
  },
  {
    id: 4,
    program_Name: "Digital Marketing",
    program_description:
      "In light of the latest advancements, we are providing a cutting-edge AI-powered digital marketing course that is open to learners of all levels. We also provide a separate entry-level digital marketing course for beginners.",
    program_link: "/",
    hoverColor: "#b200f2",
    icons: <DigitalMarketing title="Best Selling" titleId="best-selling-title" />,
    courses: [
      {
        id: "1",
        name: "Certification in fundamentals of digital marketing",
        duration: "1 Month",
        programLevel: "Beginners Level Program",
        chip: "Limited Seats",
        route: "courses/cybersecurity/master-program-in-cybersecurity/",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
      {
        id: "2",
        name: "Advanced social media marketing",
        duration: "5 Month",
        programLevel: "Beginners Level Program",
        chip: "Best Seller",
        route: "cybersecurity/master-program-in-cybersecurity",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
      {
        id: "3",
        name: "Certification in Search Engine Optimization",
        duration: "1 Month",
        programLevel: "Intermediate Level Program",
        chip: "Best Seller",
        route: "cybersecurity/master-program-in-cybersecurity/",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
      {
        id: "4",
        name: "Master Program in Digital Marketing with AI",
        duration: "6 Month",
        programLevel: "Intermediate Level Program",
        chip: "Limited Seats",
        route: "/cybersecurity/master-program-in-cybersecurity",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
    ],
  },
  {
    id: 5,
    program_Name: "Network & Clouds Computing",
    program_description:
      "  We offer certification training courses that are designed to help learners crack leading certifications like CCNA and AWS Solution Architect.",
    program_link: "/best-selling",
    hoverColor: "#3977D4",
    icons: <NetworkingCloud title="Best Selling" titleId="best-selling-title" />,
    courses: [
      {
        id: "1",
        name: "Certification In Networking CCNA",
        duration: "1 Month",
        programLevel: "Beginners Level Program",
        chip: "Limited Seats",
        route: "courses/cybersecurity/master-program-in-cybersecurity/",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
      {
        id: "2",
        name: "Certification In AWS Solution Architect Training",
        duration: "5 Month",
        programLevel: "Beginners Level Program",
        chip: "Best Seller",
        route: "cybersecurity/master-program-in-cybersecurity",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
      {
        id: "3",
        name: "Prerequisites of Cybersecurity",
        duration: "1 Month",
        programLevel: "Intermediate Level Program",
        chip: "Best Seller",
        route: "cybersecurity/master-program-in-cybersecurity/",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
    ],
  },
  {
    id: 6,
    program_Name: "Programming",
    program_description:
      "In light of the latest advancements, we are providing a cutting-edge AI-powered digital marketing course that is open to learners of all levels. We also provide a separate entry-level digital marketing course for beginners.",
    program_link: "/",
    hoverColor: "#53B44A ",
    icons: <Programing title="Best Selling" titleId="best-selling-title" />,
    courses: [
      {
        id: "1",
        name: "Certification In Python Programming",
        duration: "1 Month",
        programLevel: "Beginners Level Program",
        chip: "Limited Seats",
        route: "courses/cybersecurity/master-program-in-cybersecurity/",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
      {
        id: "2",
        name: "Certification In Machine Learning Using Python",
        duration: "5 Month",
        programLevel: "Beginners Level Program",
        chip: "Best Seller",
        route: "cybersecurity/master-program-in-cybersecurity",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
      {
        id: "3",
        name: "Certification In Flutter",
        duration: "1 Month",
        programLevel: "Intermediate Level Program",
        chip: "Best Seller",
        route: "cybersecurity/master-program-in-cybersecurity/",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
    ],
  },

  {
    id: 7,
    program_Name: "Global Programs",
    program_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    program_link: "/",
    hoverColor: "#53B44A ",
    icons: <Programing title="Best Selling" titleId="best-selling-title" />,
    courses: [
      {
        id: "1",
        name: "Certified Ethical Hacker V12",
        duration: "1 Month",
        programLevel: "Beginners Level Program",
        chip: "Limited Seats",
        route: "courses/cybersecurity/master-program-in-cybersecurity/",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
      {
        id: "2",
        name: "Certified Network Defender",
        duration: "5 Month",
        programLevel: "Beginners Level Program",
        chip: "Best Seller",
        route: "cybersecurity/master-program-in-cybersecurity",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
      {
        id: "3",
        name: "Certified Cloud Security Engineer",
        duration: "1 Month",
        programLevel: "Intermediate Level Program",
        chip: "Best Seller",
        route: "cybersecurity/master-program-in-cybersecurity/",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
      {
        id: "4",
        name: "Certified SOC Analyst",
        duration: "6 Month",
        programLevel: "Intermediate Level Program",
        chip: "Limited Seats",
        route: "/cybersecurity/master-program-in-cybersecurity",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
      {
        id: "5",
        name: "Computer Hacker Forensic investigator",
        duration: "1 Month",
        programLevel: "Beginners Level Program",
        chip: "Limited Seats",
        route: "cybersecurity/master-program-in-cybersecurity/diploma-in-cyber-security",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
    ],
  },
  {
    id: 8,
    program_Name: "Communication Programs",
    program_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    program_link: "/",
    hoverColor: "#53B44A ",
    icons: <Programing title="Best Selling" titleId="best-selling-title" />,
    courses: [
      {
        id: "1",
        name: "Communication Mastery Program",
        duration: "1 Month",
        programLevel: "Beginners Level Program",
        chip: "Limited Seats",
        route: "courses/cybersecurity/master-program-in-cybersecurity/",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        qualification: "12th Pass / Diploma",
      },
    ],
  },
]
