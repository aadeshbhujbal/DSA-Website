import localFont from "next/font/local"
import { MainLayout } from "@/components/ui/MainLayout"
import "./globals.css"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

const clashgrotesk = localFont({
  variable: "--font-clashgrotesk",
  preload: true,
  display: "swap",
  src: "./fonts/ClashGrotesk-Variable.woff2",
})
const satoshi = localFont({
  preload: true,
  display: "swap",
  variable: "--font_satoshi",
  src: "./fonts/Satoshi-Variable.woff2",
})
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${clashgrotesk.variable} ${satoshi.variable} custom-scrollbar`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}