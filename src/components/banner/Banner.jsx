import React from "react";
import Button from "../button/Button";
import Image from "next/image";

const bannerdata = [
  {
    id: 1,
    banner_heading: "Zertifiziert und Strukturiert",
    banner_subheading: "Einhaltung von Standards in allen Kursen",
    desription:
      "Zertifizierungen und höchste Standards verleihen unseren Kursen besonderen Wert: Als Apple Authorized Training Center for Education und durch die anerkannte Ö-CERT Zertifizierung (Qualitätssicherung für Erwachsenenbildung gem. BMBWF) bieten wir qualitätsgesicherte Schulungen, die internationale Abschlüsse und Zertifikate umfassen. So erlangen Kollegen und Kolleginnen wertvolle Kompetenzen in allen erdenklichen Bereichen der digitalen Produktentwicklung.",
    button_name: "Zu den Zertifizierungen",
  },
];
const Banner = () => {
  return (
    <div className=" pt-4 bg-primary rounded-2xl">
      <div className=" max-w-[1696px] mx-auto py-[120px]  overflow-hidden relative">
        <div className=" max-w-[1602px] ml-auto pl-4 flex  justify-between max-lg:flex-col gap-10 items-center">
          <div className="flex-1">
            {bannerdata.length > 0 ? (
              bannerdata.map((ele) => (
                <div key={ele.id} className="text-[#E6F1FC] ">
                  <h1 className=" xl:text-[48px]  text-[40px]  xl:leading-[72px]  font-semibold">
                    {ele.banner_heading}
                  </h1>
                  <p className="  card_title  mt-3">{ele.banner_subheading}</p>
                  <p className=" mt-6 max-w-[628px] text-sm xl:text-xl  xl:leading-8 font-light">
                    {ele.desription}
                  </p>
                  <div className=" mt-6">
                    <Button text={ele.button_name} />
                  </div>
                </div>
              ))
            ) : (
              <p className=" text-center py-5 text-red-600">No data found </p>
            )}
          </div>
          <div className="flex-1">
           <div className="max-w-[773px] h-full">
           <Image
              src={"/assets/images/bnner/bannerimag.png"}
              width={100}
              height={100}
              className=" object-cover h-auto w-full "
            />
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
