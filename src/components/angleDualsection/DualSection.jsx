import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
const carddata = [
  {
    id: 1,
    cardTitle: "Neues Kurs-System",
    cardDescription:
      " Nütze die Vorteile unserer praxisnahen Firmenschulungen.",
    card_img: "/assets/images/card_img.png",
    btn_name: "Mehr erfahren",
  },
];

const textData = [
  {
    id: 1,
    title:
      "Mit der Coding School & Academy zur digitalen Spitzenkompetenz",
    sub_titlre: "Gezielte IT-Weiterbildung für Unternehmen",
    descripton:
      "Die Coding School & Academy bietet maßgeschneiderte IT-Schulungen, die optimal auf die Anforderungen deiner Branche und die individuellen Weiterbildungsziele deiner Mitarbeiterinnen und Mitarbeiter abgestimmt sind. Unsere praxisnahen Schulungen werden von erfahrenen ExpertInnen aus der Privatwirtschaft geleitet, die ihre Expertise aus der Praxis einbringen und aktuelle Best Practices vermitteln. Unsere praxisorientierten Kurse decken alle wichtigen Bereiche der modernen Softwareentwicklung ab, von App-Programmierung und Softwareentwicklung bis hin zu IT-Projektmanagement und digitalen Kompetenzen für Fachabteilungen. Unser Fokus liegt auf praktische Inhalte, garantiert nachhaltige Lernerfolge und maximalen Nutzen für dein Unternehmen.                                           ",
  },
];

const DualSection = () => {
  return (
    <div className="py-[136px]">
      <div className="flex 2xl:gap-[70px] gap-10 justify-center  max-w-[1498px] mx-auto px-4 max-tab:flex-col items-center sm:items-start">
        <div className="relative shrink-0  max-tab:mx-auto max-sm:max-w-full max-w-[624px] tab:max-w-[550px] xl:max-w-[624px] w-full 2xl:pr-7">
          {carddata.length > 0 &&
            carddata.map((ele) => (
              <div
                key={ele.id}
                className=" h-auto shadow-xl max-sm:w-full w-[450px] tab:w-[400px] xl:w-[441px] max-tab:mx-auto ml-auto bg-[#20212D] pt-11  rounded-xl flex flex-col justify-center items-center"
              >
                <img
                  src={ele.card_img}
                  alt=""
                  height={100}
                  width={100}
                  className="h-[349px] max-w-[300px] mx-auto w-full object-cover object-left-top"
                />
                <div className=" p-[30px] pt-0 flex flex-col justify-center items-center">
                  <h5 className="text-[#FFFFFF] capitalize text-[28px] leading-[38px] opacity-80">
                    {ele.cardTitle}
                  </h5>
                  <p className="text-center text-white text-xl leading-8 opacity-70 mt-3 max-w-[380px]  mx-auto">
                    {ele.cardDescription}
                  </p>
                  <button className="bg-white text-[#20212D]  font-normal text-lg leading-7 py-3 px-7 mt-[10px] flex items-center gap-1 rounded-full">
                    <span>{ele.btn_name}</span> <GoArrowUpRight />
                  </button>
                </div>
              </div>
            ))}
          {/* Absolute card */}

          {carddata.length > 0 &&
            carddata.map((ele) => (
              <div
                key={ele.id}
                className="md:max-w-[356px] max-md:hidden  w-full md:absolute bottom-[26px] opacity-90 max-md:mx-auto max-tab:right-[280px] right-[150px] xl:right-[200px] 2xl:right-[241px] max-md:mt-5 md:-rotate-[15deg] -z-10 h-auto shadow-xl bg-[#1C1D42]   rounded-xl flex flex-col justify-center items-center"
              >
                <img
                  src={ele.card_img}
                  alt=""
                  height={100}
                  width={100}
                  className="h-[280px] max-md:max-w-[300px]  mx-auto w-full object-cover object-left-top"
                />
               <div className="p-[30px] flex flex-col justify-center items-center">
               <h5 className="text-white capitalize  text-[22px] leading-[31px] font-medium opacity-80">
                  {ele.cardTitle}
                </h5>
                <p className="text-center text-white opacity-70 mt-3 max-w-[306px] text-base leading-6   mx-auto">
                  {ele.cardDescription}
                </p>
                <button className="bg-white text-gray-700 text-base py-2 px-5 mt-3 flex items-center gap-1 rounded-full">
                  <span>{ele.btn_name}</span> <GoArrowUpRight />
                </button>
               </div>
              </div>
            ))}
        </div>

        {/* Right Section - Text Data */}
        <div className=" tab:max-w-[749px]">
          {textData.length > 0 &&
            textData.map((ele) => {
              return (
                <div key={ele.id}>
                  <h5 className="xl:text-[48px] relative bottom-[10px] text-[36px] leading-[55px] xl:leading-[72px] font-semibold ">
                    {ele.title}
                  </h5>
                  <h3 className="text-[27px]  font-medium leading-[38px] text-[#000000]">
                    {ele.sub_titlre}
                  </h3>
                  <p className="text-xl text-[#4b5563] leading-8 ">
                    {ele.descripton}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  )
}

export default DualSection
