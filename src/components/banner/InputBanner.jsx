import React from "react";
import { LuMail } from "react-icons/lu";
const InputBanner = () => {
  return (
    <section className=" bg-[#F4F4F4] rounded-2xl py-20">
      <div className="  max-w-[721px] px-4 mx-auto">
        <h6 className=" text-[48px] font-semibold leading-[72px] text-center">
          Infos zur Runtime
        </h6>
        <p className=" text-center text-xl leading-8 font-light">
          Immer als Erster über neue Kurse informiert werden.
        </p>
        <div className=" max-w-[521px] mx-auto border border-primary py-2 px-3 flex items-center gap-8 rounded-full mt-8">
          <LuMail />{" "}
          <input
            type="email"
            placeholder="Coding@success.at"
            className=" w-full bg-transparent outline-none"
          />
          <button className=" bg-primary max-w-[220px] p-3 text-white w-full rounded-full">Anmelden</button>
        </div>
      </div>
    </section>
  );
};

export default InputBanner;
