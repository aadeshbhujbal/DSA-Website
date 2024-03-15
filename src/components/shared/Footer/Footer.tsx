import Link from "next/link"
import { SVGProps } from "react"
import { Logo } from "./FooterLogo"
import { SocialMedia } from "./SocialMedia"
import { Container } from "../../ui/Container"
import { FadeIn } from "../../ui/FadeIn"

const navigation = [
  {
    title: "Quick Links",
    links: [
      { title: "Home", href: "/" },
      { title: "About", href: "/about" },
      { title: "Blogs", href: "/blogs" },
      { title: "Jobs", href: "/jobs" },
      { title: "Events", href: "/events" },
    ],
  },
  {
    title: "TOP SELLING COURSES",
    links: [
      {
        title: "Certification In Ethical Hacking",
        href: "/Certification In Ethical Hacking",
      },
      {
        title: "Diploma in Cyber Security",
        href: "/Diploma in Cyber Security",
      },
      {
        title: "Machine Learning Using Python",
        href: "/Machine Learning Using Python",
      },
      {
        title: "Certification In Data Science",
        href: "/Certification In Data Science",
      },
      {
        title: "Certified Ethical Hacker V12",
        href: "/Certified Ethical Hacker V12",
      },
    ],
  },
  // {
  //   title: "Connect",
  //   links: socialMediaProfiles,
  // },
]
function GooglePlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={150} height={60} viewBox="0 0 200 60" {...props}>
      <g fill="rgba(255,255,255,0)" stroke="#fff" data-name="Rectangle 8120">
        <rect width={200} height={60} stroke="none" rx={10} />
        <rect width={199} height={59} x={0.5} y={0.5} fill="none" rx={9.5} />
      </g>
      <path
        fill="#fff"
        d="m47.322 26.058-3.964-2.291-4.777 5.867 4.868 5.988 3.871-2.236a4.346 4.346 0 0 0 2.5-3.667 4.338 4.338 0 0 0-2.498-3.661ZM21.638 47.44l14.5-17.8-14.316-17.616c-.045 0-.093-.023-.138-.023-2.204 0-3.686 1.791-3.686 4.459v26.529c0 2.643 1.465 4.425 3.638 4.451Zm20.054-24.628L25.381 13.39l11.98 14.741Zm-4.334 8.323-12.3 15.1 16.723-9.658Z"
        data-name="google-play"
      />
      <g fill="#fff" data-name="Group 14951">
        <text data-name="GET IT ON" fontFamily="Satoshi-Regular, Satoshi" fontSize={16} transform="translate(58 25)">
          <tspan x={0} y={0} fontFamily="Helvetica">
            {"\r\n              GET IT ON\r\n            "}
          </tspan>
        </text>
        <text
          data-name="Google Play"
          fontFamily="Satoshi-Bold, Satoshi"
          fontSize={22}
          fontWeight={700}
          transform="translate(58 47)"
        >
          <tspan x={0} y={0} fontFamily="Helvetica">
            {"\r\n              Google Play\r\n            "}
          </tspan>
        </text>
      </g>
    </svg>
  )
}
const reachus = [
  {
    title: "Reach Us",
    links: [
      { title: "Kolkata", href: "/" },
      {
        title: "3rd Floor, Seven Hills Building, En 34, Salt Lake Sector 5, Kolkata 700091. ",
        href: "/about",
      },
    ],
  },
  {
    title: "a",
    links: [
      {
        title: "KSA",
        href: "/Certification In Ethical Hacking",
      },
      {
        title: "C.R. 2051243484, Al-Khobar, KSA ",
        href: "/Diploma in Cyber Security",
      },
    ],
  },
]

function Navigation() {
  return (
    <nav>
      <ul className="grid w-full max-w-full grid-cols-2 gap-1 sm:grid-cols-2">
        {navigation.map((section) => (
          <li key={section.title}>
            <div className="font-display title_2 text-sm font-semibold tracking-wider text-[#CCCCCC]">
              {section.title}
            </div>
            <ul className="mt-4 text-sm text-[#FFFFFF]">
              {section.links.map((link) => (
                <li key={link.title} className="mt-4">
                  <Link href={link.href} className="transition hover:text-[#006CE8]">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ReachUs() {
  return (
    <nav>
      <p className="font-display title_2 text-sm font-semibold text-[#CCCCCC]">Reach Us</p>
      <ul className="grid w-full max-w-full grid-cols-2 gap-8 sm:grid-cols-2">
        {reachus.map((section) => (
          <li key={section.title} className="">
            <ul className="mt-4 text-sm text-[#FFFFFF]">
              {section.links.map((link) => (
                <li key={link.title} className="mt-4 ">
                  <Link href={link.href} className="transition hover:text-[#006CE8]">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function Footer() {
  return (
    <Container className="mt-4 bg-black ">
      <div className=" mx-auto">
        <FadeIn>
          <div className="space-y-8 px-4 py-0 sm:px-6 lg:space-y-16">
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-3">
              <div className="">
                <Link href="/" aria-label="Home">
                  <Logo className="h-8" fillOnHover />
                </Link>
                <SocialMedia className={"mt-6 justify-center"} invert />
                <p className="mt-4 text-sm text-[#cccccc]">
                  Download our Learning App:
                  <Link href="https://play.google.com/store/search?q=dataspace%20academy&c=apps" target="_blank">
                    {" "}
                    <GooglePlayIcon />
                  </Link>
                </p>
              </div>
              <div className="w-full max-w-full">
                <div className="">
                  {/* <NewsletterForm /> */}
                  <Navigation />
                </div>
              </div>
              <div className="w-full max-w-full">
                <div className="">
                  {/* <NewsletterForm /> */}
                  <ReachUs />
                </div>
              </div>

              {/* <p className="text-sm text-neutral-700">
              DataSpace Academy{new Date().getFullYear()}
            </p> */}
            </div>
          </div>
        </FadeIn>
      </div>
    </Container>
  )
}
