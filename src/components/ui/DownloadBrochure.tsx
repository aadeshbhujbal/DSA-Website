// "use client"
// import React, { useState } from "react"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import Button from "./button"
// import Input from "./input"
// import { Label } from "./Label"
// import DownloadBrochureForm from "../forms/courseForm/DownloadBrochureForm"

// interface DownloadBrochureProps {
//   buttonComponent: React.ReactNode
// }

// const DownloadBrochure: React.FC<DownloadBrochureProps> = ({ buttonComponent }) => {
//   const [submitted, setSubmitted] = useState(false)

//   const handleFormSubmit = () => {
//     // Simulate downloading the brochure
//     const blob = new Blob(["Brochure content"], { type: "application/pdf" })
//     const url = URL.createObjectURL(blob)
//     const a = document.createElement("a")
//     a.href = url
//     a.download = "brochure.pdf"
//     a.click()

//     // Show "Thank You" message
//     setSubmitted(true)
//     setTimeout(() => {
//       setSubmitted(false)
//     }, 2000)
//   }

//   return (
//     <Dialog>
//       <DialogTrigger asChild>{buttonComponent}</DialogTrigger>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle>Download Brochure</DialogTitle>
//           <DialogDescription>Get your brochure here.</DialogDescription>
//         </DialogHeader>

//         {/* Include the DownloadBrochureForm */}
//         <DownloadBrochureForm onSubmit={handleFormSubmit} />

//         {submitted && <span className="text-green-500">Thank you for downloading!</span>}
//       </DialogContent>
//     </Dialog>
//   )
// }

// export default DownloadBrochure
