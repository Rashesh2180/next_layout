import React from "react";
import Button from "../button/Button";
import Image from "next/image";

const courseData = [
  {
    id: 1,
    status: "online",
    tab_2: "8.125,-€",
    cousre_logo: "/assets/svg/course/web_development.svg",
    course_name: "Web Development",
    start_date: "01.06.2024 ",
    end_date: "31.12.2024",
    students: "50",
  },
  {
    id: 2,
    status: "online",
    tab_2: "8.125,-€",
    cousre_logo: "/assets/svg/course/ui-ux.svg",
    course_name: "UI/UX Basics",
    start_date: "01.06.2024 ",
    end_date: "31.12.2024",
    students: "50",
  },
];
const Course = () => {
  return (
    <section className=" mt-4 bg-[#E9E9EA80] ">
     <div className=" max-w-[1696px] mx-auto">
     <div className=" max-w-[1614px] py-20 pl-4 max-md:pr-4 flex justify-between gap-10 max-lg:flex-col items-start ml-auto">
        <div className=" max-w-2xl">
          <h3 className=" text-[48px] font-semibold leading-[58px] mb-3">
            Alle aktuellen Kurse auf einen Blick
          </h3>
          <p className="  text-[27px] max-w-[38rem]  leading-[38px] font-normal mb-3">
            Egal ob Einsteiger oder Profi, unsere Kurse bieten dir Potential zum
            Wachstum.
          </p>
          <Button
              text={"Zu den Kursen"}
              bgColor="bg-transparent"
              borderColor="border-[#261C37]"
            />
        </div>

        <div className=" flex gap-10 max-lg:mx-auto ml-auto max-w-[850px] w-full  max-sm:flex-col ">
          {courseData &&
            courseData.map((ele) => (
              <div
                key={ele.id}
                className=" max-w-[50.31rem] w-full bg-white  px-6 py-8 rounded-2xl border border-[#19315D1A]"
              >
                <div className=" flex justify-between mb-4  flex-wrap gap-5 items-center">
                  <div className=" flex gap-3">
                    <span className=" leading-7 shrink-0 text-lg font-normal px-3 py-1 mb-1  text-black bg-[#E3ECF6] rounded-full border border-[#BDD1EB80]">
                      {ele.status}
                    </span>
                    <span className=" leading-7 shrink-0 text-lg font-normal px-3 py-1  text-black bg-[#E3ECF6] rounded-full border border-[#BDD1EB80]">
                      {ele.tab_2}
                    </span>
                  </div>
                  <span><Image
                    src={ele.cousre_logo}
                    alt={ele.course_name}
                    height={48}
                    width={27}
                  /></span>
                </div>
                <h3 className="  text-[27px] font-normal leading-9 text-[#161616]">
                  {ele.course_name}
                </h3>
                <p className=" card_subtitle mb-5">
                  <span className=" pr-3 border-r border-[#000000]">
                    {ele.start_date}-{ele.end_date}
                  </span>
                  <span className=" ml-3">{ele.students} Stunden</span>
                </p>
                <div className="">
                <Button text={"Zum Kurs"}/>
                </div>
                
              </div>
            ))}
        </div>
      </div>
     </div>
    </section>
  );
};

export default Course;
