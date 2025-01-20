import React from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const Hero = () => {
  return (
   <div className=" hero-bg relative flex flex-col  justify-center  ">
     <div className="   main-container  w-full">
      <div className="inside-container w-full">
        <div className=" max-w-[993px]  ">
         <h3 className="hollow-text tracking-widest text-5xl md:text-9xl font-bold">CSAW</h3>
        </div>
        <p className="  mt-8 max-w-[507px] text-[27px] leading-[38px] font-normal text-[#DFE5EB]">
          Coding School & Academy Wörthersee
        </p>
        <div className=" absolute  flex w-full left-0 rounded-bl-2xl rounded-br-2xl   bottom-0 border border-[#FEFEFF1A] backdrop-blur-md">
          <div className=" inside-container w-full flex max-lg:flex-col dual-part">
          <div className="flex-1 border-r border-[#FEFEFF1A] pt-6 pb-[34px]">
            <div className=" max-w-[594px] px-2 max-lg:mx-auto">
              <div className=" flex justify-between items-center">
                <p className=" text-[40px] leading-[56px] text-white font-bold tracking-[1px]">Coding School</p>
                <button className=" h-[70px] w-[70] flex items-center justify-center ">
                    <Image src={"/assets/svg/acedemy_symbol/school_degree.svg"} alt="coding_school" height={82} width={96} />
                </button>
              </div>
              <div className=" mt-11 flex justify-between items-center">
                <p className=" text-xl leading-7 text-white  font-normal">Vollwertige Kurse</p>
                <button className=" border  border-white rounded-full h-[70px] w-[70px] flex  items-center justify-center">
                    <GoArrowUpRight  className=" text-white text-4xl"/>
                </button>

              </div>
            </div>
          </div>
          <div className="flex-1 pt-6 pb-[34px]">
            <div className=" max-w-[594px]  lg:ml-auto mx-auto px-2">
              <div className=" flex justify-between items-center">
                <p className=" text-[40px] leading-[56px] text-white tracking-[1px] font-bold">Coding Academy</p>
                <button className=" h-[70px] w-[70px] flex items-center justify-center ">
                    <Image src={"/assets/svg/acedemy_symbol/coding_academy.svg"} alt="coding_school" height={82} width={96} />
                </button>
              </div>
              <div className=" mt-11 flex justify-between items-center">
                <p className=" text-xl leading-7 text-white  font-normal">Thematische Weiterbildungen</p>
                <button className=" border  border-white rounded-full h-[70px] w-[70px] flex  items-center justify-center">
                    <GoArrowUpRight  className=" text-white text-4xl"/>
                </button>

              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Hero;
