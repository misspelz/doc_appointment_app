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
  // const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      // setLoading(true);
      try {
        const resp = await GlobalApi.getCategory();
        setCategories(resp.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        // setLoading(false);
      }
    };

    fetchCategories();
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
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-5 ">
        {categories.length > 0
          ? categories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 text-center cursor-pointer bg-blue-50 m-2 rounded-lg p-5 hover:scale-110 transition-all ease-in-out "
              >
                <Image
                  src={category?.attributes?.Icon?.data?.attributes?.url}
                  alt="icon"
                  width={30}
                  height={30}
                />
                <label className="text-sm max-w-xs overflow-hidden whitespace-nowrap overflow-ellipsis">
                  {category?.attributes?.Name}
                </label>
              </div>
            ))
          : // skeleton effect
            [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className="m-2 h-[100px] w-[90px] sm:w-[100px] md:w-[130px] bg-slate-200 rounded-lg animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  );
};

export default CategorySearch;
