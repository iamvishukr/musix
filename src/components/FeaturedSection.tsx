'use client'
import React from "react";

import courseData from "../data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const FeaturedSection = () => {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-44 bg-gray-900 ">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Courses
          </h2>
          <p className="mt-2 font-extrabold leading-8 text-4xl tracking-tight">
            Learn With The Best
          </p>
        </div>
      </div>
      <div className="mt-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div className="flex justify-center" key={course.id}>
              <BackgroundGradient className="rounded-[24px] max-w-sm p-2 sm:p-10 bg-white dark:bg-zinc-900">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                    <p className="text-lg text-black mt-4 mb-2 dark:text-neutral-200 sm:text-xl font-bold ">{course.title}</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                    <Link className="mt-4" href={`/courses/${course.slug}`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-20">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded-md border-neutral-600 bg-white text-neutral-700 hover:bg-gray-300 transition duration-200"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedSection;
