import React from "react";
import Image from "next/image";
import Button from "@/components/button/Button";
import CourseBanner from "@/components/banner/CourseBanner";
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
  },
  {
    id: 2,
    status: "online",
    tab_2: "8.125,-€",
    cousre_logo: "/assets/svg/course/seo.svg",
    course_name: "SEO Skill Upgrade",
    start_date: "01.06.2024 ",
    end_date: "31.12.2024",
    students: "50",
    bg_color: "#ECF2F9CC",
  },
  {
    id: 3,
    status: "online",
    tab_2: "8.125,-€",
    cousre_logo: "/assets/svg/course/seo.svg",
    course_name: "Android Skill Upgrade",
    start_date: "01.06.2024 ",
    end_date: "31.12.2024",
    students: "50",
    bg_color: "#F0EEFACC",
  },
  {
    id: 4,
    status: "online",
    tab_2: "8.125,-€",
    cousre_logo: "/assets/svg/course/seo.svg",
    course_name: "Web Skill Upgrade",
    start_date: "01.06.2024 ",
    end_date: "31.12.2024",
    students: "50",
    bg_color: "#F0EEFACC",
  },
  {
    id: 5,
    status: "online",
    tab_2: "8.125,-€",
    cousre_logo: "/assets/svg/course/seo.svg",
    course_name: "SEO Skill Upgrade",
    start_date: "01.06.2024 ",
    end_date: "31.12.2024",
    students: "50",
    bg_color: "#F0EEFACC",
  },
  {
    id: 6,
    status: "online",
    tab_2: "8.125,-€",
    cousre_logo: "/assets/svg/course/seo.svg",
    course_name: "UI/UX Basics",
    start_date: "01.06.2024 ",
    end_date: "31.12.2024",
    students: "50",
    bg_color: "#ECF2F9CC",
  },
  {
    id: 7,
    status: "online",
    tab_2: "8.125,-€",
    cousre_logo: "/assets/svg/course/seo.svg",
    course_name: "Web Development",
    start_date: "01.06.2024 ",
    end_date: "31.12.2024",
    students: "50",
    bg_color: "#ECF2F9CC",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim.",
  },
  {
    id: 8,
    status: "online",
    tab_2: "8.125,-€",
    cousre_logo: "/assets/svg/course/seo.svg",
    course_name: "Salesforce Skill Upgrade",
    start_date: "01.06.2024 ",
    end_date: "31.12.2024",
    students: "50",
    bg_color: "#F0EEFACC",
    desc: "",
  },
  {
    id: 9,
    status: "online",
    tab_2: "8.125,-€",
    cousre_logo: "/assets/svg/course/seo.svg",
    course_name: "Salesforce Skill Upgrade",
    start_date: "01.06.2024 ",
    end_date: "31.12.2024",
    students: "50",
    bg_color: "#ECF2F9CC",
    desc: "",
  },
];
function Course() {
  return (
    <div className=" w-full mx-auto">
      <CourseBanner/>
      <div className=" max-w-[1632px] mx-auto pb-8 py-4">
      {
        courseData.length > 0 ? (
         <div className=" grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  md:grid-rows-3">
          {courseData.map(ele=>(
              <div
              key={ele.id}
              className={`${ele.desc  ? " md:col-span-2 md:row-span-2" : "lg:max-w-sm w-full "} px-6 py-8 rounded-2xl border border-[#19315D1A] !bg-[${ele.bg_color}] opacity-80`}
            >
              <div className={`flex justify-between   flex-wrap gap-5 items-center ${ele.desc ? " mb-20" : "mb-9"}`}>
                <div className=" flex gap-3">
                  <span className={`leading-7 shrink-0 text-lg font-normal px-3 py-1 mb-1  text-black bg-[${ele.bg_color}] rounded-full border border-[#BDD1EB80]`}>
                    {ele.status}
                  </span>
                  <span className={`leading-7 shrink-0 text-lg font-normal px-3 py-1 mb-1  text-black bg-[${ele.bg_color}] rounded-full border border-[#BDD1EB80]`}>
                    {ele.tab_2}
                  </span>
                </div>
                <span className=" min-h-11 ml-auto"><Image
                  src={ele.cousre_logo}
                  alt={ele.course_name}
                  height={48}
                  width={24}
                  className=""
                /></span>
              </div>
              <div className={`${ele.desc ? "gap-4" : ''} flex flex-col`}>
              <h3 className="card_title text-[#161616] ">
                {ele.course_name}
              </h3>
              <p className=" card_subtitle ">
                <span className=" pr-3 border-r border-[#000000]">
                  {ele.start_date}-{ele.end_date}
                </span>
                <span className=" ml-3">{ele.students} Stunden</span>
              </p>
              <p className=" text-lg leading-7 font-normal ">{ele.desc}</p>
              <div className={`mt-8`}>
              <Button text={"Zum Kurs"}/>
              </div>
              </div>
              
            </div>
          ))}
          
         </div>
        ) : <p className=" text-center text-red-600 font-semibold py-5 px-4">No data found</p>
      }
      </div>


    </div>
  )
}

export default Course;
