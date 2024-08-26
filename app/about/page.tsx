import React from "react";
import { Technologies } from "./components/technologies";
import { Experience } from "./components/experience";
import { Education } from "./components/education";

export default function About() {
  return (
    <div className="flex flex-col item m-20 p-8 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white rounded-xl shadow-2xl mt-20">
      <div className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        About Me
      </div>
      <div className="text-lg">
        I have been passionate about technology since my high school days, where
        I specialized in computer science. This early passion has driven my
        career in software development. I am currently lead a team of full-stack
        developers, focusing on building high-scale native applications and SaaS
        products serving over 2 million users.
      </div>
      <Technologies />
      <Experience />
      <Education />
    </div>
  );
}
