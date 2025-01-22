import Detailbanner from "@/components/banner/Detailbanner";
import Button from "@/components/button/Button";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import CourseDetailAccordion from "@/components/accordion/CourseDetailAccordion";

const courseData = [
  {
    id: 1,
    status: "online",
    tab_2: "8.125,-€",
    cousre_logo: "/assets/svg/course/ios.svg",
    course_name: "IOS Skill Upgrade",
    start_date: "01.06.2024 ",
    end_date: "31.12.2024",
    students: "50",
    bg_color: "#F0EEFACC",
    level: "Anfänger & Fortgeschrittene",
  },
];
const page = () => {
  return (
    <section>
      <Detailbanner />

      <div className=" py-10 max-w-[97rem] px-4 flex gap-8 items-start mx-auto max-lg:flex-col">
        <div className=" lg:max-w-md lg:flex-col  max-md:flex-col  max-lg:w-full flex gap-4 ">
          <div className=" p-5 sm:p-8 xl:p-14 w-full bg-gradient-to-b flex-1  from-[#333455] to-[#7072BB] rounded-2xl">
            <div className="max-w-xs max-h-80 mb-2.5  mx-auto">
              <Image
                src={"/assets/images/accordion/accordion_card.png"}
                alt="card_img"
                width={100}
                height={100}
                className=" h-full w-full"
              />
            </div>
            {courseData.length > 0 ? (
              <ul className=" text-white ">
                {courseData.map((ele) => (
                  <li key={ele.id} className=" mb-3">
                    <h5 className=" font-bold text-xl leading-8 uppercase">
                      level
                    </h5>

                    <p className=" text-xl leading-8 font-normal">
                      {ele.level}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className=" text-center text-red-600 py-3">No data found</p>
            )}
          </div>
          <div className=" p-5 sm:p-8 xl:p-14 bg-secodaryS1  flex-1  rounded-2xl">
            <h1 className=" text-xl leading-8 font-semibold  text-white mb-4">
              Ähnliche Kurse
            </h1>
            <div className=" flex flex-col gap-4">
              {[
                "Web Development",
                "Android Skill Upgrade",
                "IOS Skill Upgrade",
              ].map((ele) => (
                <Link
                  href="course"
                  className=" border border-white py-3  text-white border-opacity-50 text-lg leading-7 font-normal  bg-transparent flex gap-2 items-center justify-between px-6 rounded-full"
                >
                  <span className=" opacity-90">{ele}</span>{" "}
                  <span>
                    {" "}
                    <GoArrowUpRight />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className=" lg:max-w-5xl max-lg:w-full grow bg-skylight ">
            <CourseDetailAccordion/>
        </div>
      </div>
    </section>
  );
};

export default page;
