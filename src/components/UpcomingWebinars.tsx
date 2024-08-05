"use client";

import Link from "next/link";
import React from "react";

import { HoverEffect } from "./ui/card-hover-effect";

const projects = [
  {
    title: "Mastering Guitar Techniques ",
    description:
      "This webinar is perfect for aspiring guitarists who are just starting out. Learn the foundational techniques, from basic chords to simple strumming patterns, and gain the confidence to start playing your favorite songs.",
    link: "",
  },
  {
    title: "Understanding Music Theory",
    description:"Dive into the basics of music theory with this introductory webinar. Learn about scales, chords, and how to read sheet music, essential knowledge for any musician looking to improve their skills.",
    link: "",
  },
  {
    title: "Vocal Techniques for Singers",
    description:
      "Join this webinar to learn essential vocal techniques that will help you improve your singing ability. From breath control to pitch accuracy, discover the secrets to a powerful and confident voice.",
    link: "",
  },
  {
    title: "Piano Playing 101",
    description:
      "This beginner-friendly webinar will take you through the fundamentals of piano playing, including hand positioning, basic scales, and how to play your first song. Perfect for those just starting out!",
    link: "",
  },
  {
    title: "Drum Beats and Rhythms",
    description:
      "Learn the basics of drumming in this exciting webinar designed for beginners. Explore different rhythms, techniques, and how to keep a steady beat, setting the foundation for your drumming journey.",
    link: "",
  },
  {
    title: "Introduction to Songwriting",
    description:
      "Have you ever wanted to write your own songs? This webinar will guide you through the process of songwriting, from coming up with ideas to creating melodies and writing lyrics.",
    link: "",
  },
];

const UpcomingWebinars = () => {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-bold tracking-wide uppercase">
            Featured Webinars
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <div>
            <HoverEffect items={projects} />
          </div>
          <div className="text-center mt-10">
            <Link
              href={"/"}
              className="px-4 py-2 rounded-md border-neutral-600 bg-white text-neutral-700 hover:bg-gray-300 transition duration-200"
            >
              View All Webinars
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinars;
