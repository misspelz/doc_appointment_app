import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl  py-8  sm:py-12 ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              alt="doctors"
              src="/doc.jpg"
              width={800}
              height={800}
              className="absolute inset-0 h-full w-full  rounded-3xl object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Find and Book <span className="text-primary">Appointment</span>{" "}
              with your Favourite <span className="text-primary">Doctors</span>
            </h2>

            <p className="mt-4 text-gray-600">
              Discovering and scheduling appointments with your preferred
              doctors has never been easier. Our platform streamlines the
              process, allowing you to seamlessly find and book appointments
              with the healthcare professionals you trust.
            </p>

            <Button className="mt-10">Explore Now!</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
