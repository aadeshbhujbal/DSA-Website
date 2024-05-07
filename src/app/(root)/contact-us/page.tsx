import React from "react"
import Rating from "../(home)/homepagesections/Hero/Rating"
import Input from "@/components/ui/input"
import { Container } from "@/components/ui/Container"
import Button from "@/components/ui/button"



const Contactus = () => {
  return (
    <div className="">

      <section>
      <Container className="w-full  bg-gradient-to-b from-[#C6FFAE4D] to-[#C6FFAE00] p-6  !pb-20  !opacity-100 md:p-2 lg:p-16 lg:pt-4 ">
      
      <div className="grid grid-cols-1 md:grid-cols-2  py-6 gap-10">
        <div className="flex flex-col gap-10">
          <div>
            <p className="h3 !font-medium">Get In Touch</p>
            <p className="py-4">Get in touch with us for any inquiries or assistance. Our team is here to help you.</p>
            <p className="pb-4">You can reach us via email or phone :</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className=" pb-1 ">
                <Input variant="({normal,normal})"
                  type="email"
                  placeholder="Email Address"
                  className="bg-white  text-black text-center w-full"
                />
              </div>
              <div className=" pb-3 md:pb-5 ">
                <Input variant="normal"
                    type="number"
                    placeholder="Phone Number"
                    className="bg-white  text-black text-center w-full"
                    
                />
              </div>
            </div>
          </div>
          <div>
            <p className="h4 !font-medium">Registered Officials</p>
            <div className="grid grid-cols-2 pt-10 gap-4" >
              <div className="bg-white rounded-lg shadow-lg">
                <div className="p-3 md:p-4">
                  <p className="base-semibold pb-4">Kolkata (Headquarter)</p>
                  <p>3rd Floor, Seven Hills Building, En 34, Salt Lake Sector 5, Kolkata 700091.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg">
                <div className="p-3 md:p-4">
                  <p className="base-semibold pb-4 ">KSA</p>
                  <p>C.R. 2051243484, Al-Khobar, KSA</p>
                </div>
              </div>
              <div className="col-span-2">
              <div className="bg-white rounded-lg shadow-lg">
                <div className="p-3 md:p-4">
                  <p className="base-semibold pb-4">Bengaluru</p>
                  <p>Prime Arcade, 1002, 3rd Floor, Above Health & Glow, Ananthnagar , Electonic City Phase 2, Bengaluru, Karnataka 560100</p>
                </div>
              </div>
              </div>
            </div>
          </div>

        </div>
        <div className=" flex justify-center">
          <div className="bg-white rounded-lg shadow-lg w-[400px] max-w-[700px]">
            <div className="px-8 py-8">
              <p className="mb-8 h5 !font-medium ">Let us know about your query</p>
              <div className=" pb-3 ">
                <Input variant="({normal,normal})"
                  type="text"
                  placeholder="Name"
                  className="bg-white  text-black  w-full"
                />
              </div>
              <div className=" pb-3  ">
                <Input variant="normal"
                    type="number"
                    placeholder="Phone Number"
                    className="bg-white  text-black  w-full"
                />
              </div>
              <div className=" pb-3 ">
                <Input variant="({normal,normal})"
                  type="email"
                  placeholder="Email Address"
                  className="bg-white  text-black  w-full"
                />
              </div>
              <div className=" pb-3 ">
                

                <div className="relative w-full border border-gray-200 rounded-md">
                  
                  <select className="block appearance-none w-full bg-white border-gray-400  text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    
                    
                    <option>Select Purpose</option>

                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
                
              </div>
              <div className=" pb-3 ">
                <Input variant="({normal,normal})"
                  type="text"
                  placeholder="Message"
                  className="bg-white  text-black  w-full h-20"
                />
              </div>
              
              <div className="flex items-center">
                  <Input    id="link-checkbox" type="checkbox"  className="size-4 text-blue-600 bg-gray-100 rounded-full dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label  className="ms-2 text-sm font-medium text-gray-700 dark:text-gray-300">By providing your contact details, you agree to our <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
              </div>

              <Button variant={"primary"} href="" size="medium" className="mt-5 text-black w-full ">
                Submit{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
     
    </Container>
      </section>
      

       



      <Rating header={false} />
  
    </div>


  
  )
}

export default Contactus
