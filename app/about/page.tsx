import { MyStack } from "./components/myStack";
import { Experience } from "./components/experience";
import { Education } from "./components/education";
import { AboutMeDesc } from "./components/aboutMeDesc";

export default function About() {
  return (
    <div className="flex flex-col my-10 mx-6 lg:m-20 p-2 lg:p-8">
      <div className="text-5xl font-bold tracking-tighter lg:text-6xl/none text-yellow-1000">
        About Me
      </div>
      <div className="px-4 md:px-6 py-12 md:py-16 bg-gradient-to-r from-[#1c1c22] to-[#2c2c34]">
        <AboutMeDesc />
        <MyStack />
        <Experience />
        <Education />
      </div>
    </div>
  );
}
