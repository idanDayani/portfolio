import { AntDesignLogo } from "@/public/assets/logos/antDesign";
import { JestLogo } from "@/public/assets/logos/jest";
import { MobxLogo } from "@/public/assets/logos/mobx";
import { MongoDBLogo } from "@/public/assets/logos/mongoDB";
import { NestJSLogo } from "@/public/assets/logos/nestJS";
import { ReactLogo } from "@/public/assets/logos/react";

export function TechnologiesMobileDevice() {
  return (
    <div className="flex flex-col mt-12 md:mt-10">
      <h2 className="text-3xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 md:text-4xl sm:text-left">
        Technologies used
      </h2>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-16">
          <NestJSLogo />
          <ReactLogo />
        </div>
        <div className="flex items-center">
          <MongoDBLogo />
        </div>
        <div className="flex items-center">
          <MobxLogo />
          <JestLogo />
          <AntDesignLogo />
        </div>
      </div>
    </div>
  );
}
