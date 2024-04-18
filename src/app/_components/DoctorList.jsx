"use client";

import React, { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import Image from "next/image";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  console.log("doctors", doctors);

  const DoctorsList = () => {
    GlobalApi.getDoctorList().then((resp) => {
      setDoctors(resp.data.data);
    });
  };

  useEffect(() => {
    DoctorsList();
  }, []);

  return (
    <div className="mb-10 mx-auto max-w-screen-xl">
      <h2 className="font-bold text-xl py-4">Popular Doctors</h2>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-8 w-full">
          {doctors &&
            doctors.map((doc, index) => (
              <Image
                key={index}
                // src="/doctors.jpeg"
                src={doc?.attributes?.Image?.data?.attributes?.url}
                alt="doctors"
                width={400}
                height={200}
                layout="fixed"
                className="w-[400px] h-[200px] object-cover rounded-lg"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
