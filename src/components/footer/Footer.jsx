import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" pt-4  bg-primary  rounded-2xl ">
      <div className=" max-w-[1696px] mx-auto">
      <div className=" max-w-[1626px] px-4  py-10 mx-auto ">
        <div className=" flex justify-between gap-10  flex-wrap">
          <Image
            src={"/assets/images/footer/footer.png"}
            height={100}
            width={100}
            className=" max-h-[152px] w-11"
          />

          <div className=" flex gap-8 flex-wrap ">
            <ul className=" flex flex-col gap-3">
              <p className=" text-sm text-[#F3F3F5]  font-black leading-5">
                Unternehmen
              </p>
              {["Impressum", "Datenschutz", "AGB"].map((ele, ind) => (
                <li
                  key={ind}
                  className=" text-xl text-[#E6E0E8] leading-7 font-normal"
                >
                  <Link href={""}>{ele}</Link>
                </li>
              ))}
            </ul>
            <ul className=" flex flex-col gap-3">
              <p className=" text-sm text-[#F3F3F5]  font-black leading-5">
                Über Uns
              </p>
              {["Leitbild", "Umweltschutz", "Credits"].map((ele, ind) => (
                <li
                  key={ind}
                  className=" text-xl text-[#E6E0E8] leading-7 font-normal"
                >
                  <Link href={""}>{ele}</Link>
                </li>
              ))}
            </ul>
            <ul className=" flex flex-col gap-3">
              <p className=" text-sm text-[#F3F3F5]  font-black leading-5">
                Allgemein
              </p>
              {["FAQ", "Cookie Einstellungen"].map((ele, ind) => (
                <li
                  key={ind}
                  className=" text-xl text-[#E6E0E8] leading-7 font-normal"
                >
                  <Link href={""}>{ele}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className=" mt-8  border-t border-[#A6B4C1] flex-wrap gap-5 text-[#E6E0E7] pt-8 flex items-center justify-between">
            <p className=" text-xl leading-8 font-light">© Coding School Wörthersee 2024</p>
            <p className=" text-xl leading-8 font-light">Made with <span className=" text-red-600">♥</span> in Vienna & Carinthia</p>

            

        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
