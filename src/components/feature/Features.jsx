import Image from "next/image";
import React from "react";
import Button from "../button/Button";

const cardData = [
  {
    id: 1,
    card_title: "Neues Kursangebot mit Dezember",
    date: "22.12.24",
    card_img: "/assets/images/cards/card1.png",
  },
  {
    id: 2,
    card_title: "Neues Kursangebot mit Dezember",
    date: "22.12.24",
    card_img: "/assets/images/cards/card2.png",
  },
  {
    id: 3,
    card_title: "Neues Kursangebot mit Dezember",
    date: "22.12.24",
    card_img: "/assets/images/cards/card3.png",
  },
  {
    id: 4,
    card_title: "Neues Kursangebot mit Dezember",
    date: "22.12.24",
    card_img: "/assets/images/cards/card4.png",
  },
];

const featureData = [
  {
    id: 1,
    feature_title: "Geförderte Umschulung",
    desc: "Übersichts-Text, welcher diese Überschrift beschreibt.",
  },
  {
    id: 2,
    feature_title: "Zertifiziert",
    desc: "Übersichts-Text, welcher diese Überschrift beschreibt.",
  },
  {
    id: 3,
    feature_title: "Mentorship",
    desc: "Übersichts-Text, welcher diese Überschrift beschreibt.",
  },
  {
    id: 4,
    feature_title: "Neueste Technologien",
    desc: "Übersichts-Text, welcher diese Überschrift beschreibt.",
  },
];

const Features = () => {
  return (
    <div className=" pt-4">
      <div className="line_frame_bg h-[575px] pt-[120px]  pb-[182px] max-w-[1242px]  mx-auto">
        <div className=" max-w-[678px] mx-auto bg-white">
          <h3 className=" text-[45px] sm:text-[72px]  font-semibold sm:leading-[86.2px] tracking-[1.5px]">
            Mit den richtigen
          </h3>
          <div className="text-[45px] sm:text-[72px] sm:mt-3  font-semibold sm:leading-[86.2px] tracking-[1.5px] flex-wrap flex gap-3 items-center">
            Mentoren{" "}
            <span className=" flex items-center">
              <Image
                src={"/assets/images/avtar/avatar1.png"}
                width={68}
                height={70}
                alt=""
                className=" rounded-full w-[68px] h-[70px] z-10 object-cover  object-top "
              />
              <Image
                src={"/assets/images/avtar/avatar2.png"}
                width={68}
                height={70}
                alt=""
                className=" rounded-full w-[68px] h-[70px] -ml-2  object-cover  object-top"
              />
              <Image
                src={"/assets/images/avtar/avatar3.png"}
                width={68}
                height={70}
                alt=""
                className=" rounded-full w-[68px] h-[70px]  object-cover  -ml-2  object-top"
              />
              <button className=" shrink-0 rounded-full h-[70px] w-[70px] bg-[#8E8DD2] -ml-2 flex items-center justify-center text-white text-2xl font-normal">
                +
              </button>
            </span>
          </div>
          <div className="text-[45px] sm:text-[72px] font-semibold sm:leading-[86.2px] tracking-[1.5px] sm:mt-3">
            zum 🎯 Ziel
          </div>
        </div>
      </div>

      <div className=" max-w-[1664px] mx-auto mt-8 sm:px-4 flex gap-[25px] overflow-x-auto  pb-[90px]">
        {cardData.length > 0 ? (
          cardData.map((ele) => (
            <div
              key={ele.id}
              className=" min-w-[300px] overflow-hidden sm:min-w-[390px] max-w-[390px]   rounded-lg border border-[#2F267A33]"
            >
              <div className=" w-full h-[234px] rounded-lg">
                <Image
                  src={ele.card_img}
                  height={100}
                  width={100}
                  className=" object-cover object-top h-full w-full"
                />
              </div>
              <div className=" p-5">
                <h3 className=" max-w-[340px] font-medium text-xl leading-6 tracking-[2%]">
                  {ele.card_title}
                </h3>
                <div className="flex justify-between items-center">
                  <p className=" text-lg leading-7 font-light">{ele.date}</p>
                  <Button text={"Zum Inhalt"} />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className=" py-3 text-center text-red-600">data not available</p>
        )}
      </div>
      <div className=" max-w-[1584px] mx-auto mt-4 sm:px-4 flex py-20 max-lg:flex-col">
        <div className=" h-auto rounded-2xl overflow-hidden max-w-[612px] mx-auto w-full relative  ">
          <Image
            src={"/assets/images/feature/feature-img.png"}
            alt=""
            height={100}
            width={100}
            className=" w-full h-full object-cover object-top"
          />
        </div>
        <div className=" max-w-[940px] xl:px-10 lg:px-5 w-full">
          <ul className=" w-full flex flex-col">
            {featureData.length > 0 &&
              featureData.map((ele) => (
                <li
                  key={ele.id}
                  className=" border-b border-[#36363980]  pb-4"
                >
                  <div className="flex items-center flex-wrap  justify-between gap-5 py-[23px] ">
                  <div className="flex items-center gap-5">
                    <span className=" shrink-0 border border-[#0000004D] flex items-center justify-center  h-[50px] w-[50px] rounded-full text-[22px] text-[#444261] leading-[30px] text-center  font-normal">
                      0{ele.id}
                    </span>
                    <p className=" text-[27px]  font-medium leading-[37.8px] tracking-[2%]">
                      {ele.feature_title}
                    </p>
                  </div>
                  <p className=" max-w-[287px] text-xl  leading-6 font-normal">
                    {ele.desc}
                  </p>
                  </div>
                </li>
              ))}
          </ul>
          <div className=" mt-8 flex justify-between gap-10  max-md:flex-col">
            <div className=" mt-auto md:max-w-[321px] text-xl leading-6 font-normal">
              Entdecke alle Vorteile eines maßgeschneiderten Kurses für den
              perfekten Berufseinstieg.
            </div>
            <div className=" bg-primary p-9 rounded-2xl max-w-[297px] w-full max-md:mx-auto">
              <span className=" text-white text-[60px] font-bold  leading-[84px]">
                40%
              </span>
              <p className=" mt-[73px] text-xl font-normal leading-7 tracking-[-2%] text-white">
                Schnellerer Einstieg
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
