"use client";

import React, { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import Image from "next/image";
import Spin from "./loading/Spin";

interface Doctor {
  attributes: {
    Image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    Name: string;
    Year_of_experience: string;
    Address: string;
    categories: {
      data: [
        {
          attributes: {
            Name: string;
          };
        }
      ];
    };
  };
}

const DoctorList = () => {
  // const [loading, setLoading] = useState(true);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  console.log("doctors", doctors);

  useEffect(() => {
    const fetchDoctors = async () => {
      // setLoading(true);
      try {
        const resp = await GlobalApi.getDoctorList();
        setDoctors(resp.data.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        // setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  // if (loading) return <Spin />;

  return (
    <div className="mb-10 mx-auto max-w-screen-xl">
      <h2 className="font-bold text-xl py-4">Popular Doctors</h2>

      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-2 lg:gap-8 w-full">
          {doctors.length > 0
            ? doctors.map((doc, index) => (
                <div
                  key={index}
                  className="rounded-lg p-3 border-[1px] cursor-pointer hover:border-primary hover:shadow-sm transition-all ease-in-out"
                >
                  <div className="w-full">
                    <Image
                      src={
                        doc?.attributes?.Image?.data?.attributes?.url ||
                        "/doctors.jpeg"
                      }
                      alt="doctors"
                      width={500}
                      height={200}
                      layout="fixed"
                      className="h-[150px] lg:h-[200px] w-full  rounded-lg"
                    />
                  </div>
                  <div className="mt-3 items-baseline flex flex-col gap-1">
                    <h2 className="text-[10px] md:text-[12px] lg:text-[14px] bg-blue-100 p-1 rounded-full px-2 text-primary font-semibold ">
                      {doc?.attributes?.categories?.data[0]?.attributes.Name}
                    </h2>
                    <h2 className="font-bold text-[12px] md:text-[14px] lg:text-[16px]">
                      {doc?.attributes?.Name}
                    </h2>
                    <h2 className="text-[10px] font-semibold lg:text-sm text-primary">
                      {doc?.attributes?.Year_of_experience}
                    </h2>
                    <h2 className="text-[10px] font-semibold lg:text-sm text-gray-500">
                      {doc?.attributes?.Address}
                    </h2>
                    <button className="p-2 px-3 border-primary border-[1px] text-primary rounded-full w-full text-center text-[10px] lg:text-sm font-semibold mt-2 hover:bg-primary hover:text-white duration-500 transition">
                      Book Now
                    </button>
                  </div>
                </div>
              ))
            : // skeleton effect
              [1, 2, 3, 4, 5, 6].map((item, index) => (
                <div
                  key={index}
                  className="h-[220px] bg-slate-200 w-full rounded-lg animate-pulse"
                ></div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
