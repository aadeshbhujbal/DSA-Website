import { OurProgramCardProps } from "@/types"
import { BestSelling, CybersecurityIcon, Datascience, DigitalMarketing, NetworkingCloud, Programing } from "./icons"

export const ourPrograms: OurProgramCardProps[] = [
  {
    id: 1,
    program_Name: "Best Selling",
    program_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    program_link: "courses/cybersecurity/",
    hoverColor: "#f52b02",
    icons: <CybersecurityIcon title="Best Selling" titleId="best-selling-title" />,
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
      {
        id: "4",
        name: "Master Program in Cyber Security",
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
        name: "Global Certification in Cyber security",
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
        name: "Advanced Penetration Testing",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    program_link: "/",
    hoverColor: "#00d1b9",
    icons: <Datascience title="Best Selling" titleId="best-selling-title" />,
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
        name: "Master Program in Cyber Security",
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
        name: "Global Certification in Cyber security",
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
        name: "Advanced Penetration Testing",
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
    id: 4,
    program_Name: "Digital Marketing",
    program_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    program_link: "/",
    hoverColor: "#b200f2",
    icons: <DigitalMarketing title="Best Selling" titleId="best-selling-title" />,
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
        name: "Master Program in Cyber Security",
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
        name: "Global Certification in Cyber security",
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
        name: "Advanced Penetration Testing",
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
    id: 5,
    program_Name: "Network & Clouds Computing",
    program_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    program_link: "/best-selling",
    hoverColor: "#3977D4",
    icons: <NetworkingCloud title="Best Selling" titleId="best-selling-title" />,
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
        name: "Master Program in Cyber Security",
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
        name: "Global Certification in Cyber security",
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
        name: "Advanced Penetration Testing",
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
    id: 6,
    program_Name: "Programming",
    program_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    program_link: "/",
    hoverColor: "#53B44A ",
    icons: <Programing title="Best Selling" titleId="best-selling-title" />,
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
        name: "Master Program in Cyber Security",
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
        name: "Global Certification in Cyber security",
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
        name: "Advanced Penetration Testing",
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
    id: 7,
    program_Name: "Diploma",
    program_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    program_link: "/best-selling",
    hoverColor: "#3977D4",
    icons: <NetworkingCloud title="Best Selling" titleId="best-selling-title" />,
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
        name: "Master Program in Cyber Security",
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
        name: "Global Certification in Cyber security",
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
        name: "Advanced Penetration Testing",
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
    id: 8,
    program_Name: "Global",
    program_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    program_link: "/",
    hoverColor: "#53B44A ",
    icons: <Programing title="Best Selling" titleId="best-selling-title" />,
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
        name: "Master Program in Cyber Security",
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
        name: "Global Certification in Cyber security",
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
        name: "Advanced Penetration Testing",
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
    id: 9,
    program_Name: "Robotics",
    program_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    program_link: "/",
    hoverColor: "#53B44A ",
    icons: <Programing title="Best Selling" titleId="best-selling-title" />,
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
        name: "Master Program in Cyber Security",
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
        name: "Global Certification in Cyber security",
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
        name: "Advanced Penetration Testing",
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
]
