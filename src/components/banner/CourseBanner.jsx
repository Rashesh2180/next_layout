import Image from "next/image";
import React from "react";

const CourseBanner = () => {
  return (
    <div className="course-banner pb-6 flex flex-col mb-11  justify-end items-center max-sm:pt-28 sm:h-[546px] h-full">
      <div className=" max-w-[52.25rem] px-4 mx-auto w-full">
        <h3 className=" text-4xl sm:text-5xl leading-[72px] tracking-[1px]  font-semibold text-center text-[#FEFEFF]">
          Kurs Übersicht
        </h3>
        <p className="sm:text-[27px] text-xl leading-8 font-normal sm:leading-9 text-center text-[#FEFEFF] mb-7 max-w-[40rem] mx-auto tracking-[-0.2px]">
          Egal ob Einsteiger oder Profi, unsere Kurse bieten dir Potential zum
          Wachstum.
        </p>
        <div className=" py-4 w-full">
          <div className=" bg-[#3A3A4466] rounded-2xl px-8 py-[22.5px] border border-[#3A3A44] flex gap-5 max-sm:flex-col">
            <button className=" bg-white rounded-full px-6 py-2.5 flex items-center w-full justify-between ">
              <Image
                src={"/assets/svg/coursebanner/clock-svgrepo-com 1.svg"}
                alt=""  
                height={24}
                width={24}
                className=" h-6 w-6"
              />
              <span className=" text-justify leading-8 text-lg font-semibold">
                Alle
              </span>
              <Image
                src={"/assets/svg/coursebanner/down_arrow.svg"}
                alt=""
                height={10}
                width={8}
                className=" w-2 h-2.5"
              />
            </button>
            <button className=" bg-white rounded-full px-6 py-2.5 flex items-center w-full justify-between ">
              <Image
                src={"/assets/svg/coursebanner/degree.svg"}
                alt=""
                height={24}
                width={28}
                className=" h-6 w-7"
              />
              <span className=" text-justify leading-8 text-lg font-semibold">
                Alle
              </span>
              <Image
                src={"/assets/svg/coursebanner/down_arrow.svg"}
                alt=""
                height={10}
                width={8}
                className=" w-2 h-2.5"
              />
            </button>
            <button  className=" bg-white rounded-full px-6 py-2.5 flex items-center w-full justify-between ">
              <Image
                src={"/assets/svg/coursebanner/pc.svg"}
                alt=""
                height={18}
                width={18}
                className=" h-4 w-4"
              />
              <span className=" text-justify leading-8 text-lg font-semibold">
                Alle
              </span>
              <Image
                src={"/assets/svg/coursebanner/down_arrow.svg"}
                alt=""
                height={10}
                width={8}
                className=" w-2 h-2.5"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseBanner;
