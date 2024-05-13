"use client"
import { SlidersHorizontal } from "lucide-react";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import Jobdetailscard from "./components/jobcard";
import Search from "./components/search";
import { jobdetails } from "./content";

// Import Filter component dynamically to ensure it's only rendered on the client-side
const FilterClient = dynamic(() => import("./components/filter"), { ssr: false });

const Careers = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Function to toggle mobile view
  const handleResize = () => {
    setIsMobileView(window.innerWidth < 768); // Adjust the breakpoint as needed
  };

  // Function to toggle filter popup
  const toggleFilter = () => {
    if (!isFilterOpen) {
      setIsMobileView(true); // Ensure mobile view is active when filter opens
    }
    setIsFilterOpen(!isFilterOpen);
    if (!isFilterOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = ''; // Enable scrolling
    }
  };

  // Initialize mobile view on component mount
  React.useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="bg-black">
        <section>
          <Container className="flex justify-center md:w-[85%] lg:w-[70%] xl:w-[60%]">
            <div className="flex flex-col justify-center gap-5 px-4 py-6 text-center md:gap-8 md:py-10">
              <p className="h2 text-white ">Join Our Team and Shape the Future of EdTech</p>
              <p className="text-white">
                Join us to reshape EdTech. Drive innovation, impact globally, and grow in a collaborative team.
              </p>
              <div className="">
                <Search />
              </div>
            </div>
          </Container>
        </section>
      </div>
      <section>
        <Container>
          <div className="py-10">
            <div className="flex justify-between gap-4">
              <p className="h3">Current Openings</p>
              {isMobileView ? (
                <div className="block md:hidden" onClick={toggleFilter}>
                  <div className="flex gap-2 rounded-lg bg-white px-5 py-2">
                    <div className="pt-1">
                      <SlidersHorizontal size={18} />
                    </div>
                    <p>filter</p>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="flex gap-3 py-10">
              <div className={`grid w-full grid-cols-1 gap-5 ${isMobileView ? 'md:w-2/3' : 'md:w-2/3'}`}>
                {jobdetails &&
                  jobdetails.map((data, index) => (
                    <div key={index}>
                      <Jobdetailscard data={data} />
                    </div>
                  ))}
              </div>
              {isFilterOpen && isMobileView && (
                <div className="fixed top-0 left-0 z-50 size-full overflow-y-auto bg-black/50  flex justify-center items-center">
                  <div className="max-w-screen-sm w-full relative top-[200px]">
                    <div className="rounded-lg p-4">
                      <FilterClient />
                    </div>
                  </div>
                </div>
              )}
              {!isMobileView && (
                <div className="md:w-1/3">
                  <FilterClient />
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Careers;
