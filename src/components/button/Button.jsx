import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Button = ({ text, bgColor = "bg-white", borderColor = "border-[#1B124C1A]" }) => {
  return (
    <button
      className={`py-3.5 px-7 flex rounded-[32px] gap-[10px] border shrink-0 items-center text-[#1B124C] ${bgColor} ${borderColor} hover:bg-primary hover:text-white hover:border-primary transition-all`}
    >
      <span>{text}</span>
      <GoArrowUpRight />
    </button>
  );
};

export default Button;
