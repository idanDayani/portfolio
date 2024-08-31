import { getTotalExperience } from "@/app/common/getTotalExperience";

export function PositionsDesc() {

  const startDate = "2021-03-01";
  const totalExperience = getTotalExperience(startDate);

  return (
    <div className="ml-8 sm:ml-10 space-y-4">
      <div>
        <h4 className="text-lg font-semibold text-blue-300 sm:text-xl">
          Full Stack Developer & Team Lead
        </h4>
        <p className="text-base text-indigo-200">
          Mar 2021 - Present · {totalExperience}
        </p>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-blue-300 sm:text-xl">
          BackEnd Developer
        </h4>
        <p className="text-base text-indigo-200">
          Jan 2020 - Feb 2021 · 1 yr 2 mos
        </p>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-blue-300 sm:text-xl">
          Manual QA & Technical Operations Specialist
        </h4>
        <p className="text-base text-indigo-200">May 2019 - Dec 2019 · 8 mos</p>
      </div>
    </div>
  );
}
