import React from "react";
import * as Accordion from "@radix-ui/react-accordion";

const CourseDetailAccordion = () => (
  <div  className=" py-10  px-5 sm:px-10 xl::px-14  border border-[#DDE4ED] rounded-2xl flex  flex-col gap-4">
    {/* <Accordion.Root type="single" defaultValue="item-1" collapsible>
      <Accordion.Item>
        <Accordion.Header>
          <AccordionTrigger></AccordionTrigger>
        </Accordion.Header>
        <Accordion.Content />
      </Accordion.Item>
    </Accordion.Root> */}

    {/* this is accordion start */}
  <div className=" ">
  <div className=" flex justify-between items-center py-2.5 mb-5">
      <h2 className="  leading-8 text-2xl font-medium ">Inhalt</h2>
    </div>
    <div className=" max-w-[40rem]">
    <p className=" text-xl leading-6 font-normal mb-5">
      Nach erfolgreicher Absolvierung bist du ready, deine Webanwendungen anhand
      der innovativsten und meist eingesetzten Web Frameworks zu entwickeln.
    </p>
    <p className=" text-xl leading-6 font-normal mb-5">
      Nach erfolgreicher Absolvierung bist du ready, deine Webanwendungen anhand
      der innovativsten und meist eingesetzten Web Frameworks zu entwickeln.
    </p>
    <div className=" mb-5">
      <p className=" text-xl leading-6 font-normal mb-1">
        Grundlagen der Webentwicklung
      </p>
      <ul className=" list-disc text-xl leading-6 font-normal flex flex-col gap-1">
        <li className=" ml-9">Grundlagen der Programmierung & Java Script</li>
        <li className=" ml-9">Einführung in HTML, CSS & Java Script</li>
       
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
        <li className=" ml-9">Projektmanagement und Abschlussarbeit</li>
       

      </ul>
    </div>
    </div>
  </div>
  </div>
);

export default CourseDetailAccordion;
