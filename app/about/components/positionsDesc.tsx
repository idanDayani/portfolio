import Image from "next/image";

export function PositionsDesc() {
  return (
    <div className="ml-10 space-y-4">
      <div>
        <h4 className="text-xl font-semibold text-blue-300">
          Full Stack Developer & Team Lead
        </h4>
        <p className="text-base text-indigo-200">
          Mar 2021 - Present · 3 yrs 6 mos
        </p>
      </div>
      <div>
        <h4 className="text-xl font-semibold text-blue-300">
          BackEnd Developer
        </h4>
        <p className="text-base text-indigo-200">
          Jan 2020 - Feb 2021 · 1 yr 2 mos
        </p>
      </div>
      <div>
        <h4 className="text-xl font-semibold text-blue-300">
          Manual QA & Technical Operations Specialist
        </h4>
        <p className="text-base text-indigo-200">May 2019 - Dec 2019 · 8 mos</p>
      </div>
    </div>
  );
}
