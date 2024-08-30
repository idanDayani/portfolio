import { MyStack } from "./components/myStack";
import { Experience } from "./components/experience";
import { Education } from "./components/education";
import { AboutMeDesc } from "./components/aboutMeDesc";

export default function About() {
  return (
    <div className="flex flex-col m-20 p-8 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-xl shadow-2xl">
      <AboutMeDesc />
      <MyStack />
      <Experience />
      <Education />
    </div>
  );
}
