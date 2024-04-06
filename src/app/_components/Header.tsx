import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import MenuItem from "@/app/_interfaces";

const Header: React.FC = () => {
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
    <div className="flex items-center justify-between p-4 shadow-md md:px-20">
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
          <Link key={item.id} href={item.path}>
            <li className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out">
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
      <Button>Get Started</Button>
    </div>
  );
};

export default Header;
