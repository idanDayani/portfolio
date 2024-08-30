import { AntDesignLogo } from "@/public/assets/icons/antDesign";
import { JestLogo } from "@/public/assets/icons/jest";
import { MobxLogo } from "@/public/assets/icons/mobx";
import { MongoDBLogo } from "@/public/assets/icons/mongoDB";
import { NestJSLogo } from "@/public/assets/icons/nestJS";
import { ReactLogo } from "@/public/assets/icons/react";
import React from "react";

export function TechnologiesUsed() {
  return (
    <div className="flex flex-col mt-10">
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
        Technologies used:
      </h2>

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-40">
          <NestJSLogo />
          <MongoDBLogo />
          <ReactLogo />
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
