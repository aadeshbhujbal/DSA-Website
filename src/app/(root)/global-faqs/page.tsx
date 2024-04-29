import React from "react"
import { Container } from "@/components/ui/Container"
import Rating from "../(home)/homepagesections/Hero/Rating"


const GlobalFaqs = () => {
  return (
    <div>
      <section>
        <Container>
          <div className="flex justify-center text-center">
            <p className="h2">Any Doubts? Let’s Clear</p>
          </div>
        </Container>
      </section>     
      <Rating header={false} />    
    </div>




)
}

export default GlobalFaqs
