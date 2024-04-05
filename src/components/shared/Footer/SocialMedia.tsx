import clsx from "clsx"
import Link from "next/link"

function InstagramIcon(props: any) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" {...props}>
      <path
        transform="translate(-24.75 -24.75)"
        fill="#ccc"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M51,36H38.5A2.5,2.5,0,0,0,36,38.5V51a2.5,2.5,0,0,0,2.5,2.5H51A2.5,2.5,0,0,0,53.5,51V38.5A2.5,2.5,0,0,0,51,36ZM44.75,49.75a5,5,0,1,1,5-5A5,5,0,0,1,44.75,49.75Zm5.625-9.062a1.563,1.563,0,1,1,1.563-1.562A1.562,1.562,0,0,1,50.375,40.688Z"
      />
      <circle
        id="Ellipse_429"
        data-name="Ellipse 429"
        cx="2.5"
        cy="2.5"
        r="2.5"
        transform="translate(17.5 17.5)"
        fill="#ccc"
      />
      <path
        id="Path_30678"
        data-name="Path 30678"
        d="M20,0A20,20,0,1,0,40,20,20,20,0,0,0,20,0ZM31.25,26.25a5,5,0,0,1-5,5H13.75a5,5,0,0,1-5-5V13.75a5,5,0,0,1,5-5h12.5a5,5,0,0,1,5,5Z"
        fill="#ccc"
      />
    </svg>
  )
}

function YoutubeIcon(props: any) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20,0A20,20,0,1,0,40,20,20,20,0,0,0,20,0ZM30.86,20.876a37.3,37.3,0,0,1-.217,3.75,5.22,5.22,0,0,1-.863,2.3,3.011,3.011,0,0,1-2.176.982c-3.04.233-7.6.24-7.6.24s-5.648-.055-7.385-.233a3.555,3.555,0,0,1-2.4-.99,5.209,5.209,0,0,1-.862-2.3,37.264,37.264,0,0,1-.218-3.75V19.119a37.256,37.256,0,0,1,.218-3.749,5.237,5.237,0,0,1,.862-2.3,2.993,2.993,0,0,1,2.176-.981c3.039-.235,7.6-.235,7.6-.235H20s4.56,0,7.6.235a3,3,0,0,1,2.176.98,5.22,5.22,0,0,1,.863,2.3,37.3,37.3,0,0,1,.217,3.75v1.757Z"
      />
      <path
        id="Path_30679"
        data-name="Path 30679"
        d="M13.83,20.889l6.79-4.074-6.79-4.074Z"
        transform="translate(3.457 3.185)"
        fill="#ccc"
      />
    </svg>
  )
}

function LinkedinIcon(props: any) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        transform="translate(-5.13 -3.77)"
        d="M27.123,21.462h.031v-.048Zm0,0h.031v-.048Zm0,0h.031v-.048Zm0,0h.031v-.048Zm0,0h.031v-.048Zm0,0h.031v-.048Zm0,0h.031v-.048Zm0,0h.031v-.048Zm0,0h.031v-.048Zm0,0h.031v-.048Zm0,0h.031v-.048Zm0,0h.031v-.048Zm0,0h.031v-.048Zm0,0h.031v-.048Zm0,0h.031v-.048Zm0,0h.031v-.048ZM25.13,3.77a20,20,0,1,0,20,20A20,20,0,0,0,25.13,3.77Zm-5,29a.337.337,0,0,1-.337.333H15.938a.333.333,0,0,1-.333-.333V19.824a.333.333,0,0,1,.333-.337h3.854a.337.337,0,0,1,.337.337Zm-2.4-15.016a2.417,2.417,0,1,1,1.714-.708A2.422,2.422,0,0,1,17.729,17.757ZM36.437,32.774a.337.337,0,0,1-.337.333H32.246a.333.333,0,0,1-.333-.333V25.815c0-1.831-.653-3.065-2.29-3.065A2.474,2.474,0,0,0,27.3,24.4a3.118,3.118,0,0,0-.149,1.1v7.265a.337.337,0,0,1-.337.337H22.962a.333.333,0,0,1-.333-.337c0-1.848.048-10.821,0-12.932a.333.333,0,0,1,.333-.337h3.845a.333.333,0,0,1,.337.337v1.59a4.493,4.493,0,0,1,4.077-2.247c2.974,0,5.207,1.944,5.207,6.131Zm-9.284-11.3v-.048l-.031.048Zm-.031,0h.031v-.048Zm0,0h.031v-.048Zm0,0h.031v-.048Zm0,0h.031v-.048Zm0,0h.031v-.048Zm0,0h.031v-.048Zm0,0h.031v-.048Zm0,0h.031v-.048Zm0,0h.031v-.048Zm0,0h.031v-.048Zm0,0h.031v-.048Zm0,0h.031v-.048Zm0,0h.031v-.048Zm0,0h.031v-.048Z"
      />
    </svg>
  )
}

export const socialMediaProfiles = [
  // { title: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
  { title: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { title: "Linked in", href: "https://linkedin.com", icon: LinkedinIcon },

  { title: "Dribbble", href: "https://dribbble.com", icon: YoutubeIcon },
]

export function SocialMedia({ className, invert = false }: { className?: string; invert?: boolean }) {
  return (
    <>
      {" "}
      <h5 className="h5 mt-5 !font-medium text-[#CCCCCC]">Social Handles </h5>
      <ul className={clsx("flex gap-x-8", invert ? "text-white" : "text-neutral-950", className)}>
        {socialMediaProfiles.map((socialMediaProfile) => (
          <li key={socialMediaProfile.title}>
            <Link
              href={socialMediaProfile.href}
              aria-label={socialMediaProfile.title}
              className={clsx("transition", invert ? "hover:text-neutral-200" : "hover:text-neutral-700")}
            >
              <socialMediaProfile.icon className="size-8 fill-current" />
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
