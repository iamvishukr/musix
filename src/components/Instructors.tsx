import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from './ui/animated-tooltip';

const instructors = [
  {
    id: 1,
    name: "Vishal Kumar",
    designation: "Guitar Tutor",
    image:
      "https://avatars.githubusercontent.com/u/140156661?s=400&u=7e9767c76661f60394910af692b50e110d15502f&v=4",
  },
  {
    id: 2,
    name: "Anmol Gupta",
    designation: "Harmonium Tutor",
    image:
      "https://media.licdn.com/dms/image/D5603AQHhD6dRsUCTXw/profile-displayphoto-shrink_800_800/0/1698677908840?e=1728518400&v=beta&t=O5MkwN8Yihh1dc8wrT4UXVm8k7WMal7L-Gp_eq8crL0",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Piano Tutor",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "Flute Tutor",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Vocal Tutor",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "Drum Tutor",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

const Instructors = () => {
  return (
    <div className='relative h-[40rem] overflow-hidden flex items-center justify-center'>
      <WavyBackground className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full'>
        <h2 className='text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8'>Meet Our Instructors</h2>
        <p className='text-base md:text-lg text-white text-center mb-4'>Discover the talented professionals who will guide your musical journey</p>
        <div className='flex flex-row items-center justify-center mb-10 w-full'>
        <AnimatedTooltip items={instructors} />

        </div>
      </WavyBackground>
    </div>
  )
}

export default Instructors