"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function CourseDetail() {
  const [isMounted, setIsMounted] = useState(false);
  const [course, setCourse] = useState(null);
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const courseData = [
    {
      id: 1,
      status: "online",
      tab_2: "8.125,-€",
      cousre_logo: "/assets/svg/course/ios.svg",
      course_name: "IOS Skill Upgrade",
      start_date: "01.06.2024 ",
      end_date: "31.12.2024",
      students: "50",
      bg_color: "#F0EEFACC",
    },
    {
      id: 2,
      status: "online",
      tab_2: "8.125,-€",
      cousre_logo: "/assets/svg/course/seo.svg",
      course_name: "SEO Skill Upgrade",
      start_date: "01.06.2024 ",
      end_date: "31.12.2024",
      students: "50",
      bg_color: "#ECF2F9CC",
    },
    {
      id: 7,
      status: "online",
      tab_2: "8.125,-€",
      cousre_logo: "/assets/svg/course/seo.svg",
      course_name: "Web Development",
      start_date: "01.06.2024 ",
      end_date: "31.12.2024",
      students: "50",
      bg_color: "#ECF2F9CC",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit...",
    },
  ];

  useEffect(() => {
    if (id) {
      const foundCourse = courseData.find((course) => course.id.toString() === id);
      setCourse(foundCourse || null); 
    }
  }, [id]);


  if (!isMounted || !id) {
    return <p>Loading...</p>;
  }

  if (!course) {
    return <p>Course not found.</p>;
  }

  return (
    <div>
      <h1>{course.course_name}</h1>
      <Image src={course.cousre_logo} alt="Course Logo" width={100} height={100} />
      <p>Status: {course.status}</p>
      <p>Start Date: {course.start_date}</p>
      <p>End Date: {course.end_date}</p>
      <p>Students: {course.students}</p>
      <p>Description: {course.desc || "No description available."}</p>
    </div>
  );
}

export default CourseDetail;
