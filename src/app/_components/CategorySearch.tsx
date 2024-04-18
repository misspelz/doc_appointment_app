"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import Image from "next/image";

interface Category {
  attributes: {
    Icon: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    Name: string;
  };
}

const CategorySearch = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const CategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      setCategories(resp.data.data);
    });
  };

  useEffect(() => {
    CategoryList();
  }, []);

  return (
    <div className="mb-5 flex flex-col items-center gap-2">
      <h2 className="font-bold text-2xl lg:text-4xl tracking-wide">
        Search <span className="text-primary">Doctors</span>
      </h2>
      <h2 className="text-gray-500 lg:text-xl text-center">
        Search Your Doctor and Book Appointment in one click
      </h2>
      <div className="flex mt-3 w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search..." />
        <Button type="submit">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>

      {/* Display Categories */}
      <div className="grid grid-cols-3 mt-5">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 text-center cursor-pointer bg-blue-50 m-2 rounded-lg p-5 hover:scale-110 transition-all ease-in-out"
          >
            <Image
              src={category?.attributes?.Icon?.data?.attributes?.url}
              alt="icon"
              width={30}
              height={30}
            />
            <label className="text-sm">{category?.attributes?.Name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySearch;
