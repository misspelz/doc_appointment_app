import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center px-6 lg:px-0 pt-4">
        <Image
          src="/notfound.svg"
          alt="not-found-img"
          width={400}
          height={400}
          className="hidden lg:flex"
        />
        <Image
          src="/notfound.svg"
          alt="not-found-img"
          width={200}
          height={200}
          className="flex lg:hidden"
        />

        <h2
          className={` text-center text-[24px] lg:text-[36px] font-[500] lg:leading-[70px] `}
        >
          Uh oh! We can’t find that page...
        </h2>
        <p className="text-center mt-4 lg:mt-0">
          Sorry, the page you are looking for doesn’t exist or has been moved.{" "}
        </p>
        <p className="text-center mt-4 lg:mt-0">
          You could trying going back to the homepage
        </p>
       <div className="mt-4">
       <Link href="/">
          <Button>Go to Homepage</Button>
        </Link>
       </div>
      </div>
    </>
  );
};

export default NotFound;
