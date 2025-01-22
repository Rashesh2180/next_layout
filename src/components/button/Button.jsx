import Image from "next/image";
import React from "react";

const Button = ({
  text,
  bgColor = "bg-white",
  borderColor = "#161616",
}) => {
  return (
    <button
      className={`py-3.5 px-7 flex rounded-[2rem] gap-2.5 border shrink-0 items-center text-[#161616] ${bgColor} ${borderColor}  transition-all`}
    >
      <span>{text}</span>
      <Image
        src={"/assets/svg/buttonarrow.svg"}
        width={8}
        height={10}
        className=""
        alt=""
      />
    </button>
  );
};

export default Button;
