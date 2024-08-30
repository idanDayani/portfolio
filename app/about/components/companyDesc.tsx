import Image from "next/image";

export function CompanyDesc() {
  return (
    <div className="flex -ml-12 mb-5">
      <Image
        height={50}
        width={50}
        src="/assets/yuvital.jpeg"
        priority
        quality={100}
        alt={"Idan Dayani"}
        className="object-contain"
      />
      <div className="flex flex-col ml-4">
        <h3 className="text-2xl font-bold text-yellow-300">YuviTal</h3>
        <p className="text-base text-indigo-200">Full-time · 5 yrs 4 mos</p>
      </div>
    </div>
  );
}
