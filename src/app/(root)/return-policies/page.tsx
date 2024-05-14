import React from "react"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"

const RefundPolicy = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-8 py-8">
          <p className="h2">Return / Refund Policy</p>
          <div className="flex flex-col gap-5">
            <p>
              At DataSpace Academy, we are committed to your satisfaction. If youre not completely delighted with your
              purchase, we offer a hassle-free 30-day money-back guarantee.
            </p>
            <p>
              To initiate a refund, simply reach out to our dedicated customer support team within 30 days of your
              purchase date. Well guide you through the process and ensure your refund is processed swiftly.
            </p>
            <p>Conditions for a refund:</p>
            <div className="pl-10">
              <ul style={{ listStyleType: "disc" }}>
                <li>The product/service must be returned in its original condition, undamaged and unused.</li>
                <li>Refunds are applicable only to purchases made directly through our website.</li>
                <li>Shipping and handling charges are non-refundable.</li>
                <li>Please allow up to [X] business days for the refunded amount to reflect in your account.</li>
              </ul>
            </div>
            <p>
              While we strive to accommodate every refund request, we reserve the right to decline refunds in cases of
              abuse or misuse of our products/services.
            </p>
            <p>
              Your satisfaction is our priority. Should you have any questions or concerns regarding our refund
              policy,dont hesitate to contact us at{" "}
              <a href={`mailto:${"support@dataspacesecurity.com"}`}>support@dataspacesecurity.com</a>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default RefundPolicy
