import React from "react"
import Rating from "../(home)/homepagesections/Hero/Rating"
import { Container } from "@/components/ui/Container"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FaqtabcategoryList } from "./content"





const Referandearn = () => {
 
  return (

  <div>
    <Container>
      <div className="py-10">{/* Comment for the first div */}
        <div className="flex justify-center">
          <p className="h3">How To Refer?</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center align-middle items-center py-10">
          <div className="bg-white rounded-lg shadow-xl w-full md:w-[300px] md:max-w-[350px] h-[79px] max-h-[110px] flex items-center ">
            <div className=" inline-flex px-5 py-4 gap-3 items-center">
              <div className="bg-blue-600 rounded-md shadow-lg px-3 py-1 text-white"><p>1</p></div>
              <p className="py-1">Go to your profile</p>
            </div>
          </div>
          <div className="bg-yellow-400 rounded-full size-8 flex items-center justify-center "></div>
          <div className="bg-white rounded-lg shadow-xl  w-full md:w-[300px] md:max-w-[350px] h-[79px] max-h-[110px] flex items-center">
            <div className=" inline-flex px-5 py-4 gap-3 items-center">
              <div className="bg-blue-600 rounded-md shadow-lg px-3 py-1 text-white h-[33px] "><p>2</p></div>
              <p className="py-1">Find your unique code</p>
            </div>
          </div>
          <div className="bg-yellow-400 rounded-full size-8 flex items-center justify-center "></div>
          <div className="bg-white rounded-lg shadow-xl  w-full md:w-[300px] md:max-w-[350px] h-[79px] max-h-[110px] flex items-center">
            <div className=" inline-flex px-5 py-3 gap-3 items-center">
              <div className="bg-blue-600 rounded-md shadow-lg px-3 py-1 text-white  h-[33px] "><p>3</p></div>
              <div>
              <p className="py-1">Share the code with your family & friends</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div>{/* Comment for the second div */}
          <div className="flex justify-center">
            <p className="h3">Any Doubts? Let’s Clear</p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <Tabs defaultValue={FaqtabcategoryList && FaqtabcategoryList.length > 0 ? FaqtabcategoryList[0]?.id : ""} className="flex flex-col">
                <TabsList className="my-6 mx-auto flex flex-row gap-5 flex-wrap justify-center">
                  {FaqtabcategoryList && FaqtabcategoryList.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="mx-0 text-sm md:mx-2 lg:text-base xl:mx-6 bg-white rounded-lg px-3 py-2 text-black border-2 "
                      variant="referandearnpagetab"
                    >
                      {category.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {FaqtabcategoryList && FaqtabcategoryList.map((category) => (
                  <TabsContent key={category.id} value={category.id}>
                    {/* Add content for each tab here */}
                    <p>{/* Content for {category.title} tab */}</p>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </div>{/* End of comment for the second div */}
    </Container>
    

    <Rating header={false} />
  </div>
  )
}

export default Referandearn
