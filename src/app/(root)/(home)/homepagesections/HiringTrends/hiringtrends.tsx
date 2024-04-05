"use client"

import Button from "@/components/ui/button"

import { Container } from "@/components/ui/Container"

import { Section } from "@/components/ui/Section"
import { VerticalTabs, VerticalTabsContent, VerticalTabsList, VerticalTabsTrigger } from "@/components/ui/VerticalTabs"
import {
  Cloud_Computing_data,
  Cybersecurity_data,
  Data_Science_Analytics_data,
  Digital_Marketing_data,
  Networking_IT_Infrastructure_data,
} from "@/constants/graph-data"
import CustomAreaChart from "./CustomAreaChart"
import DonutChart from "./donoughtchart"

export function HiringTrends(this: any) {
  return (
    <Section className="!p-0">
      <Container className="max-w-screen-2xl">
        <h2 className="h4 py-2 text-center !font-medium text-black">Why Start Today? Insights into IT Hiring Trends</h2>
        <p className="mx-auto pb-6 text-center sm:pb-2 md:max-w-2xl 3xl:max-w-6xl">
          Discover why starting your IT learning journey today is crucial. Gain insights into current employment trends
          and projected growth by 2032, derived from recent industry reports, job market analysis, and surveys. Let us
          guide you towards a successful career path in technology.
        </p>

        <div className="mx-auto my-6 max-w-6xl rounded-2xl bg-gradient-to-b from-white to-transparent  p-4 shadow-upwards  md:p-12 ">
          <h6 className="h6 !font-mediumbold">Categories</h6>

          <VerticalTabs defaultValue="cybersecurity" className="flex w-full flex-col !p-0 md:flex-row">
            <VerticalTabsList className="custom-scrollbar  flex h-16 w-full scroll-mb-3.5 flex-row !items-start gap-1 overflow-scroll bg-transparent pt-4 sm:h-auto md:flex-col  md:gap-4  lg:max-w-60">
              <VerticalTabsTrigger value="cybersecurity" variant="tab" className="!bg-transparent !p-2 lg:!p-3 ">
                Cybersecurity
              </VerticalTabsTrigger>
              <VerticalTabsTrigger
                value="Data_Science_Analytics"
                variant="tab"
                className="!bg-transparent !p-2 lg:!p-3 "
              >
                Data Science & Analytics
              </VerticalTabsTrigger>
              <VerticalTabsTrigger value="Digital_Marketing" variant="tab" className="!bg-transparent !p-2 lg:!p-3 ">
                Digital Marketing
              </VerticalTabsTrigger>
              <VerticalTabsTrigger value="Cloud_Computing" variant="tab" className="!bg-transparent !p-2 lg:!p-3 ">
                Cloud Computing
              </VerticalTabsTrigger>
              <VerticalTabsTrigger
                value="Networking_IT_Infrastructure"
                variant="tab"
                className="!bg-transparent !p-2 lg:!p-3 "
              >
                Networking & IT Infrastructure{" "}
              </VerticalTabsTrigger>
            </VerticalTabsList>
            <div className="w-full">
              <VerticalTabsContent value="cybersecurity">
                <CustomAreaChart data={Cybersecurity_data} />
              </VerticalTabsContent>
              <VerticalTabsContent value="Data_Science_Analytics">
                <CustomAreaChart data={Data_Science_Analytics_data} />
              </VerticalTabsContent>
              <VerticalTabsContent value="Digital_Marketing">
                <CustomAreaChart data={Digital_Marketing_data} />
              </VerticalTabsContent>
              <VerticalTabsContent value="Cloud_Computing">
                <CustomAreaChart data={Cloud_Computing_data} />
              </VerticalTabsContent>
              <VerticalTabsContent value="Networking_IT_Infrastructure">
                {" "}
                <CustomAreaChart data={Networking_IT_Infrastructure_data} />
              </VerticalTabsContent>
            </div>
          </VerticalTabs>
        </div>
        <div className="flex  flex-col md:flex-row">
          <div className="basis-1/2 ">
            <div className="mx-auto size-80 !h-[450px]  self-center md:size-96">
              {" "}
              <DonutChart />
            </div>
          </div>
          <div className="mt-16 basis-1/2 self-center md:mt-0">
            {" "}
            <h2 className="h5 py-2 !font-medium text-black">IT Domain Hiring Trends in Top Companies</h2>
            <p className="p base-regular">
              In todays digital age, understanding the hiring trends within various IT domains is essential for both job
              seekers and employers alike. From digital marketing to cybersecurity, data science, network and cloud
              computing, and programming, each sector plays a critical role in shaping the technological landscape. By
              delving into the percentage of hiring within these domains, we can gain insights into the opportunities
              and dynamics driving the IT industry forward.
            </p>
            <Button variant={"default"} href="" size="medium" className="mt-5 w-full  max-w-[250px]">
              Get In Touch{" "}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
