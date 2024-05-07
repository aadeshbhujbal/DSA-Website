import { Container } from "@/components/ui/Container"
import React from "react"
import Rating from "../(home)/homepagesections/Hero/Rating"
import { Weight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Testimonialslist, TestimonialstabcategoryList } from "./content"

const Testimonials = () => {
  return (
    <div>
      <div className="pt-24 ">
        <div className="py-10 flex flex-col items-center gap-4 text-center px-6 md:px-16">
          <p className="h1" style={{ fontWeight: '400' }}>Echoes of Satisfaction: <br /><span className="pt-4">Testimonials</span> </p>
         
          <p className="md:max-w-[700px] items-center py-8">Uncover heartfelt testimonials revealing the true impact of our offerings. Dive into real stories of transformation and joy from those who've experienced our services firsthand.</p>
        </div>
        <div>
          <Rating header={false} />
        </div>
      </div>


      <div className="px-4">
          <Tabs defaultValue={TestimonialstabcategoryList && TestimonialstabcategoryList.length > 0 ? TestimonialstabcategoryList[0]?.id : ""} className="flex flex-col">
                <TabsList className="my-6 mx-auto flex flex-row gap-5 flex-wrap justify-center  text-center border-b-2">
                  {TestimonialstabcategoryList && TestimonialstabcategoryList.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="mx-0 text-sm md:mx-2 lg:text-base xl:mx-6 px-3 py-2 text-black "
                      variant="testimonialpagetab"
                    >
                      {category.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {TestimonialstabcategoryList && TestimonialstabcategoryList.map((category) => (
                  <TabsContent key={category.id} value={category.id}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:px-20 py-20">
                    {category.id === "1" ? (
                      // Render all testimonials if "All" tab is selected
                      Testimonialslist.map(testimonial => (
                        <div key={testimonial.id} className="bg-white max-w-[600px] h-auto rounded-lg shadow-xl ">
                          <div className="flex flex-col gap-3 px-4 py-6">
                            <p>{testimonial.story}</p>
                            <p className="font-extrabold">- {testimonial.name}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      // Render testimonials filtered by category
                      Testimonialslist.filter(testimonial => testimonial.categoryId === category.id).map(testimonial => (
                        <div key={testimonial.id} className="bg-white max-w-[600px] rounded-lg shadow-xl ">
                          <div className="flex flex-col gap-3 px-4 py-6">
                            <p>{testimonial.story}</p>
                            <p className="font-extrabold">- {testimonial.name}</p>
                          </div>
                        </div>
                      ))
                    )}
                    </div>
                  </TabsContent>

                ))}
              </Tabs>
          </div>  



    </div>


  )
}

export default Testimonials;
