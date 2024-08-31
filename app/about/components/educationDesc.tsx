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
        <h2 className="text-xl font-bold bg-gradient-to-r from-green-500 to-lime-500 bg-clip-text text-transparent sm:text-2xl">Holon Institute of Technology</h2>
        <p className="text-base text-indigo-200">Bachelor of science in Computer Science</p>
        <p className="text-base text-indigo-200">2017 - 2020</p>
      </div>
    </div>
  );
}
