"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Mastering Melodies",
    description:
      "Explore our range of music classes designed for beginners to advanced students. Learn to play instruments, understand music theory, and develop your performance skills.",
  },
  {
    title: "Rhythm & Harmony",
    description:
      "Join our interactive group classes that foster teamwork and creativity. Perfect for those who want to learn with peers and enjoy the camaraderie of making music together.",
  },
  {
    title: "Private Lessons",
    description:
      "Experience one-on-one lessons with experienced instructors who focus on your unique musical journey. Ideal for students looking for personalized guidance and faster progress.",
  },
  {
    title: "From Bach to Rock",
    description:
      "Discover the world of music across genres, from classical to contemporary. Our courses cover a wide range of styles, allowing you to find your passion and hone your skills.",
  },
  {
    title: "Youth Music Programs",
    description:
      "Enroll your child in our youth-focused music programs that inspire creativity and discipline. Our curriculum is designed to nurture young talent and develop a lifelong love for music.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="">
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
};

export default WhyChooseUs;
