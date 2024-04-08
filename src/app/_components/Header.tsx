"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import MenuItem from "@/app/_interfaces";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const route = usePathname();

  const Menu: MenuItem[] = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/explore",
    },
    {
      id: 3,
      name: "Contact Us",
      path: "/contact-us",
    },
  ];

  return (
    <div className="flex items-center justify-between p-4 shadow-md md:px-20 fixed top-0 w-full z-[999] bg-white">
      <div className="flex items-center gap-10">
        <Link href="/">
          <Image
            src="/app_logoo.png"
            alt="logo"
            width={120}
            height={20}
            className="cursor-pointer"
          />
        </Link>
      </div>
      <ul className="md:flex gap-8 hidden">
        {Menu.map((item) => (
          <li
            key={item.id}
            className={`cursor-pointer hover:scale-105 transition-all ease-in-out ${
              route === item.path ? "text-primary" : ""
            }`}
          >
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <Button>Get Started</Button>
    </div>
  );
};

export default Header;
