import Image from "next/image";

export function EducationDesc() {
  return (
    <div className="flex -ml-12">
      <Image
        height={50}
        width={50}
        src="/assets/hit.jpeg"
        priority
        quality={100}
        alt={"Idan Dayani"}
        className="object-contain -mt-5"
      />
      <div className="flex flex-col ml-4">
        <h3 className="text-2xl font-bold text-green-600">Holon Institute of Technology</h3>
        <p className="text-base text-indigo-200">Bachelor of science in Computer Science</p>
        <p className="text-base text-indigo-200">2017 - 2020</p>
      </div>
    </div>
  );
}
