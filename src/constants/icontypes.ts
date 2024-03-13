import { SVGProps } from "react"
export interface TrendingIconProps extends SVGProps<SVGSVGElement> {
  color?: string
  width: number
  height: number
  title: string
  altText: string
}

export interface ChevronProps extends SVGProps<SVGSVGElement> {
  isChipHovered?: boolean
}
export interface TrustpilotRatingProps extends SVGProps<SVGSVGElement> {
  isChipHovered?: string
}
export interface TrustpilotRatingProps extends SVGProps<SVGSVGElement> {
  title?: string
  titleId?: string
}

export interface OurProgramIcons extends SVGProps<SVGSVGElement> {
  title?: string
  titleId?: string
  hoverColor?: string // Define a prop for hover color

  isHovered?: boolean // Change the type to boolean
}

export interface InitialProps extends SVGProps<SVGSVGElement> {
  title?: string
  titleId?: string
  fillColor?: string // Optional fill color prop
}
