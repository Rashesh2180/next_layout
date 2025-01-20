import DualSection from "@/components/angleDualsection/DualSection";
import Banner from "@/components/banner/Banner";
import InputBanner from "@/components/banner/InputBanner";
import Course from "@/components/course/Course";
import Features from "@/components/feature/Features";
import Hero from "@/components/hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
   <div className=" relative ">
    <Hero/>
    <Features/>
    <Course/>
    <Banner/>
    <DualSection/>
    <InputBanner/>

   </div>
  );
}
