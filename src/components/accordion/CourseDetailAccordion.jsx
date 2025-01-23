
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";

const CourseDetailAccordion = () => (
  <div className=" flex  overflow-hidden flex-col gap-4">
      <Accordion.Root
        className=""
        type="single"
        defaultValue="item-1"
        collapsible
      >
        <Accordion.Item
          value="item-1"
          className="py-6 px-5 bg-skylight border border-accordionborder rounded-2xl  sm:px-10 xl:px-14  mb-4"
        >
        <Accordion.Trigger className="py-2.5 flex justify-between items-center w-full group" >
  <p className="leading-[2.15rem] text-2xl font-medium">Inhalt</p>
  
  <span className="text-violet-10 bg-white h-14 w-14 border border-accordionborder rounded-full items-center justify-center transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] hidden group-data-[state=closed]:flex">
    <Image src={"/assets/svg/accordionopen.svg"} height={21} width={21} alt="accordion_open" />
  </span>

  <span className="text-violet-10 bg-white h-14 w-14 border border-accordionborder rounded-full items-center justify-center transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] hidden group-data-[state=open]:flex">
    <Image src={"/assets/svg/accordionclose.svg"} height={21} width={21} alt="accordion_close" />
  </span>
</Accordion.Trigger>

          <Accordion.Content className=" mt-2.5">
            <div className=" max-w-[40rem]">
              <p className=" text-xl leading-6 font-normal mb-8">
                Nach erfolgreicher Absolvierung bist du ready, deine
                Webanwendungen anhand der innovativsten und meist eingesetzten
                Web Frameworks zu entwickeln.
              </p>
              <p className=" text-xl leading-6 font-normal mb-2">
                Nach erfolgreicher Absolvierung bist du ready, deine
                Webanwendungen anhand der innovativsten und meist eingesetzten
                Web Frameworks zu entwickeln.
              </p>
              <div className=" mb-5">
                <p className=" text-xl leading-6 font-normal mb-1">
                  Grundlagen der Webentwicklung
                </p>
                <ul className=" list-disc text-xl leading-6 font-normal flex flex-col gap-1">
                  <li className=" ml-9">
                    Grundlagen der Programmierung & Java Script
                  </li>
                  <li className=" ml-9">
                    Einführung in HTML, CSS & Java Script
                  </li>
                </ul>
              </div>
              <div className=" mb-5">
                <p className=" text-xl leading-6 font-normal mb-1">
                  Webentwicklung Advanced
                </p>
                <ul className=" list-disc text-xl leading-6 font-normal flex flex-col gap-1 mb-4 ">
                  <li className=" ml-9">Datenmanagement</li>
                  <li className=" ml-9">Networking</li>
                  <li className=" ml-9">Websockets & Polling</li>
                  <li className=" ml-9">Modulprojekt</li>
                </ul>
              </div>
              <div className=" mb-5">
                <p className=" text-xl leading-6 font-normal mb-1">
                  Software Development
                </p>
                <ul className=" list-disc text-xl leading-6 font-normal flex flex-col gap-1 mb-4 ">
                  <li className=" ml-9">Sourcecodeversionierung</li>
                  <li className=" ml-9">Softwarearchitekturen</li>
                  <li className=" ml-9">Testing</li>
                  <li className=" ml-9">User Centered Design</li>
                  <li className=" ml-9">Projektmanagement</li>
                  <li className=" ml-9">Modulprojekt</li>
                </ul>
              </div>
              <div className=" mb-5">
                <p className=" text-xl leading-6 font-normal mb-1">
                  Special Web Topics
                </p>
                <ul className=" list-disc text-xl leading-6 font-normal flex flex-col gap-1 mb-4 ">
                  <li className=" ml-9">Web Frameworks</li>
                  <li className=" ml-9">
                    Projektmanagement und Abschlussarbeit
                  </li>
                </ul>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item
          value="item-2"
          className=" py-6 px-5 bg-skylight border border-accordionborder rounded-2xl  sm:px-10 xl:px-14 mb-4"
        >
          <Accordion.Trigger className="py-2.5 flex justify-between items-center w-full group" >
  <p className="leading-[2.15rem] text-2xl font-medium">Zielgruppe & Vorkenntnisse</p>
  
  <span className="text-violet-10 bg-white h-14 w-14 border border-accordionborder rounded-full items-center justify-center transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] hidden group-data-[state=closed]:flex">
    <Image src={"/assets/svg/accordionopen.svg"} height={21} width={21} alt="accordion_open" />
  </span>

  <span className="text-violet-10 bg-white h-14 w-14 border border-accordionborder rounded-full items-center justify-center transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] hidden group-data-[state=open]:flex">
    <Image src={"/assets/svg/accordionclose.svg"} height={21} width={21} alt="accordion_close" />
  </span>
</Accordion.Trigger>
          <Accordion.Content className=" mt-2.5">
            <div className=" max-w-[40rem]">
              <p className=" text-xl leading-6 font-normal mb-8">
                Nach erfolgreicher Absolvierung bist du ready, deine
                Webanwendungen anhand der innovativsten und meist eingesetzten
                Web Frameworks zu entwickeln.
              </p>
              <p className=" text-xl leading-6 font-normal mb-2">
                Nach erfolgreicher Absolvierung bist du ready, deine
                Webanwendungen anhand der innovativsten und meist eingesetzten
                Web Frameworks zu entwickeln.
              </p>
              <div className=" mb-5">
                <p className=" text-xl leading-6 font-normal mb-1">
                  Grundlagen der Webentwicklung
                </p>
                <ul className=" list-disc text-xl leading-6 font-normal flex flex-col gap-1">
                  <li className=" ml-9">
                    Grundlagen der Programmierung & Java Script
                  </li>
                  <li className=" ml-9">
                    Einführung in HTML, CSS & Java Script
                  </li>
                </ul>
              </div>
              <div className=" mb-5">
                <p className=" text-xl leading-6 font-normal mb-1">
                  Webentwicklung Advanced
                </p>
                <ul className=" list-disc text-xl leading-6 font-normal flex flex-col gap-1 mb-4 ">
                  <li className=" ml-9">Datenmanagement</li>
                  <li className=" ml-9">Networking</li>
                  <li className=" ml-9">Websockets & Polling</li>
                  <li className=" ml-9">Modulprojekt</li>
                </ul>
              </div>
              <div className=" mb-5">
                <p className=" text-xl leading-6 font-normal mb-1">
                  Software Development
                </p>
                <ul className=" list-disc text-xl leading-6 font-normal flex flex-col gap-1 mb-4 ">
                  <li className=" ml-9">Sourcecodeversionierung</li>
                  <li className=" ml-9">Softwarearchitekturen</li>
                  <li className=" ml-9">Testing</li>
                  <li className=" ml-9">User Centered Design</li>
                  <li className=" ml-9">Projektmanagement</li>
                  <li className=" ml-9">Modulprojekt</li>
                </ul>
              </div>
              <div className=" mb-5">
                <p className=" text-xl leading-6 font-normal mb-1">
                  Special Web Topics
                </p>
                <ul className=" list-disc text-xl leading-6 font-normal flex flex-col gap-1 mb-4 ">
                  <li className=" ml-9">Web Frameworks</li>
                  <li className=" ml-9">
                    Projektmanagement und Abschlussarbeit
                  </li>
                </ul>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
  </div>
);

export default CourseDetailAccordion;
