"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { Boxes } from "./ui/background-boxes";

const musicSchoolTestimonials = [
  {
    quote:
      "Learning to play the guitar here has been a game-changer for me. The instructors are patient and really know how to make the lessons fun and engaging.",
    name: "Alex R.",
    title: "Guitar Course",
  },
  {
    quote:
      "I never thought I'd be able to read sheet music, but thanks to this school, I'm not only reading it but also playing piano pieces I never dreamed I could!",
    name: "Jessica M",
    title: "Piano Course",
  },
  {
    quote:
      "The drum lessons have been incredible. The teachers break everything down into easy-to-follow steps, and I'm finally able to keep up with my favorite songs.",
    name: "Sam K.",
    title: "Drum Course",
  },
  {
    quote:
      "I've been taking violin lessons for a few months now, and my progress has been amazing. The personalized approach really makes a difference.",
    name: "Anmol Gupta",
    title: "Harmonium Course",
  },
  {
    quote:
      "Singing was always a passion of mine, but I lacked confidence. The vocal coaching here has not only improved my technique but also boosted my self-esteem.",
    name: "Liam T.",
    title: "Vocal Training",
  },
  {
    quote:
      "The music theory class has opened up a whole new world for me. I now understand the structure behind the music I love, and it’s made me a better musician.",
    name: "Olivia C.",
    title: " Music Theory Course",
  },
];

const TestimonialCards = () => {
  return (
    <div className=" h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <Boxes />
        <h2 className="text-5xl font-bold text-center mb-8 z-10">
          Hear Our Harmony: Voices of Success
        </h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 ">
          <div className="w-full max-w-6xl ">
            <InfiniteMovingCards
              items={musicSchoolTestimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
  );
};

export default TestimonialCards;
