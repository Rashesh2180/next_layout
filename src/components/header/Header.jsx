"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
const navlist = [
  { list_name: "Coding School", href: "/" },
  { list_name: "Coding Academy", href: "/" },
  { list_name: "Kurse", href: "/" },
  { list_name: "AATC", href: "/" },
  { list_name: "course", href: "/course" },

];

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const handleScroll = () => {
    const dualPart = document.querySelector(".dual-part");
    const rect = dualPart.getBoundingClientRect();
    if (rect.top <= 0 && rect.bottom >= 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };


  useEffect(()=>{
    if(navOpen){
      document.body.style.overflow = "hidden"
    }
    else{
      document.body.style.overflow = "auto"


    }
    return ()=>{
      document.body.style.overflow = "auto"

    }

  },[navOpen])

  const toggleOpen = () => {
    setNavOpen(true);
  };

  const toggleClose =()=>{
    setNavOpen(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isSticky
          ? "bg-white  sticky top-0 rounded-full w-full  !text-black"
          : "bg-transparent text-white top-5 absolute sm:top-12 left-1/2 transform -translate-x-1/2"
      } z-10 max-w-[1514px] mx-auto w-full px-8 py-4   flex justify-between items-center transition-all duration-300`}
    >
      <Link href="#">
        <Image
          src={
            !isSticky
              ? "/assets/svg/logo/logo.svg"
              : "/assets/svg/search/search_logo.svg"
          }
          width={36}
          height={20}
          alt="header_logo"
          className="w-8 h-5"
        />
      </Link>
      <ul className="lg:flex hidden gap-5 items-center ">
        {navlist.map((ele, ind) => (
          <li key={ind} className={`${isSticky ? "text-black" : "text-white"}`}>
            <Link
              href={ele.href}
              className="text-xl leading-8 font-light hover:text-secodaryS1"
            >
              {ele.list_name}
            </Link>
          </li>
        ))}
      </ul>

      <div
        className={`${
          isSticky ? " text-black" : "text-white"
        } flex items-center `}
      >
        <button className="h-11 w-11 flex justify-center items-center text-[29px]">
          <FiSearch />
        </button>
        <button
          className="h-11 w-11 flex justify-center max-lg:hidden items-center text-[29px]"
        >
          <FaBars />
        </button>
        <button
          onClick={toggleOpen}
          className="h-11 w-11 flex lg:hidden  justify-center items-center text-[29px]"
        >
          <FaBars />
        </button>
        {navOpen && (
          <ul className=" flex flex-col absolute left-0 h-screen justify-center   w-full bg-[rgba(0,0,0,0.9)] text-center -top-5 sm:-top-14 lg:hidden gap-5 items-center ">
            <button onClick={toggleClose} className=" text-3xl absolute right-5 top-10 text-red-600 font-black">
            <IoMdClose />
            </button>
            {navlist.map((ele, ind) => (
              <li key={ind} className="text-white">
                <Link
                  href={ele.href}
                  className="text-2xl font-bold leading-8  hover:text-secodaryS1"
                >
                  {ele.list_name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
