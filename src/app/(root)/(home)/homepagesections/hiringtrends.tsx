"use client"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import Button from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/ui/Container"
import Input from "@/components/ui/input"
import { Label } from "@/components/ui/Label"

import { Section } from "@/components/ui/Section"
import { VerticalTabs, VerticalTabsContent, VerticalTabsList, VerticalTabsTrigger } from "@/components/ui/VerticalTabs"
const data = [
  {
    name: "0",
    percent: 0,
    pv: 2,

    year: "2020",
    prob: "10",
  },
  {
    name: "20",
    percent: 10,
    year: "2022",
    prob: "20",
  },
  {
    name: "40",
    percent: 20,
    year: "2024",
    prob: "60",
  },
  {
    name: "60",
    percent: 30,
    year: "2026",
    prob: "40",
  },
  {
    name: "80",
    percent: 70,
    year: "2026",
    prob: "80",
  },
  {
    name: "100",
    percent: 95,
    year: "2028",
  },
]

export function HiringTrends() {
  return (
    <Section className="!p-0">
      <Container className="max-w-screen-2xl">
        <h2 className="h4 py-2 text-center !font-medium text-black">Why Start Today? Insights into IT Hiring Trends</h2>
        <p className="mx-auto pb-6 text-center sm:pb-2 md:max-w-2xl 3xl:max-w-6xl">
          Discover why starting your IT learning journey today is crucial. Gain insights into current employment trends
          and projected growth by 2032, derived from recent industry reports, job market analysis, and surveys. Let us
          guide you towards a successful career path in technology.
        </p>

        <div className="rounded-2xl bg-gradient-to-b from-white via-transparent to-transparent p-4">
          <h6 className="h6 !font-mediumbold">Categories</h6>

          <VerticalTabs defaultValue="account" className="flex w-full flex-row">
            <VerticalTabsList className="flex w-full max-w-80 flex-col !items-start gap-4 p-4 ">
              <VerticalTabsTrigger value="account" variant="tab" className="">
                Cybersecurity
              </VerticalTabsTrigger>
              <VerticalTabsTrigger value="Data Science & Analytics" variant="tab" className="">
                Data Science & Analytics
              </VerticalTabsTrigger>
              <VerticalTabsTrigger value="Digital Marketing" variant="tab" className="">
                Digital Marketing
              </VerticalTabsTrigger>
              <VerticalTabsTrigger value="Cloud Computing" variant="tab" className="">
                Cloud Computing
              </VerticalTabsTrigger>
              <VerticalTabsTrigger value="Networking & IT Infrastructure" variant="tab" className="">
                Networking & IT Infrastructure{" "}
              </VerticalTabsTrigger>
            </VerticalTabsList>
            <div className="w-full">
              <VerticalTabsContent value="account">
                <div style={{ width: "100%", height: 300 }}>
                  <ResponsiveContainer>
                    <AreaChart
                      data={data}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis dataKey={"year"} />
                      <Tooltip />
                      <Area type="monotone" dataKey="percent" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </VerticalTabsContent>
              <VerticalTabsContent value="password">
                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>Change your password here. After saving, youll be logged out.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="current">Current password</Label>
                      <Input id="current" type="password" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="new">New password</Label>
                      <Input id="new" type="password" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save password</Button>
                  </CardFooter>
                </Card>
              </VerticalTabsContent>
            </div>
          </VerticalTabs>
        </div>
      </Container>
    </Section>
  )
}
