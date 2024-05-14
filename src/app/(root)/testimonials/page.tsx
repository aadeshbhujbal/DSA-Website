import React from "react"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Testimonialslist, TestimonialstabcategoryList } from "./content"
import Rating from "../(home)/homepagesections/Hero/Rating"

const Testimonials = () => {
  return (
    <Section>
      <div className="bg-black pt-24  ">
        <div className="flex flex-col items-center gap-4 px-6  text-center md:px-16 md:py-10">
          <h1 className="h1 text-white" style={{ fontWeight: "400" }}>
            Echoes of Satisfaction: <br />
            <span className="pt-4">Testimonials</span>{" "}
          </h1>

          <p className="items-center py-2 text-white md:max-w-[700px] md:py-8">
            Uncover heartfelt testimonials revealing the true impact of our offerings. Dive into real stories of
            transformation and joy from those whove experienced our services firsthand.
          </p>
        </div>

        <Rating header={false} />
      </div>
      <Container className="p-0 !pt-1 ">
        <Tabs
          defaultValue={
            TestimonialstabcategoryList && TestimonialstabcategoryList.length > 0
              ? TestimonialstabcategoryList[0]?.id
              : ""
          }
          className="flex flex-col "
        >
          <TabsList className=" md:flex-no-wrap flex flex-wrap justify-center  gap-5  bg-gradient-to-r from-transparent via-gray-100 to-gray-100 text-black md:!flex-row">
            {TestimonialstabcategoryList &&
              TestimonialstabcategoryList.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className=" p py-2.5 data-[state=active]:border-b-4 data-[state=active]:border-link data-[state=active]:!bg-inherit "
                >
                  {category.title}
                </TabsTrigger>
              ))}
          </TabsList>
          {TestimonialstabcategoryList &&
            TestimonialstabcategoryList.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-2 md:px-20 lg:grid-cols-3">
                  {category.id === "1"
                    ? Testimonialslist.map((testimonial) => (
                        <Card key={testimonial.id} className="m-3 h-auto max-w-[600px] rounded-xl  bg-white shadow-xl ">
                          <div className="flex flex-col gap-3 px-4 py-6">
                            <p>{testimonial.story}</p>
                            <p className="font-extrabold">- {testimonial.name}</p>
                          </div>
                        </Card>
                      ))
                    : Testimonialslist.filter((testimonial) => testimonial.categoryId === category.id).map(
                        (testimonial) => (
                          <div key={testimonial.id} className="m-3  max-w-[600px] rounded-lg bg-white shadow-xl ">
                            <div className="flex flex-col gap-3 px-4 py-6">
                              <p>{testimonial.story}</p>
                              <p className="font-extrabold">- {testimonial.name}</p>
                            </div>
                          </div>
                        )
                      )}
                </div>
              </TabsContent>
            ))}
        </Tabs>
      </Container>
    </Section>
  )
}

export default Testimonials
