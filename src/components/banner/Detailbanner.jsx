import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Detailbanner = () => {
  return (
    <section>
      <div className=" bg-[url('/assets/images/mainbg/main-bg.png')] mb-4  bg-cover pb-9 rounded-2xl flex  flex-col justify-end h-[27rem]">
        <div className=" max-w-[94.5rem] px-4 w-full mx-auto ">
          <h3 className=" text-4xl sm:text-5xl  leading-[4.5rem] mb-1 text-regulartxt font-semibold">
            Web Development
          </h3>
          <span className=" px-6 py-3 max-w-[25rem] relative w-full block border-[#FEFEFF33] border font-normal text-center rounded-full text-sm sm:text-lg leading-7 text-regulartxt  bg-transparent/20">
            FH Kooperation | Digi Skills Scheck 2024
          </span>
          <button className=" max-sm:mx-auto mt-8 rounded-full py-3 px-6 border-regulartxt text-regulartxt border flex items-center gap-2.5">
            Jetzt bewerben
            <GoArrowUpRight />
          </button>
        </div>
      </div>
     
    </section>
  );
};

export default Detailbanner;
