import React from "react";
import { ExpressLogo } from "@/public/assets/icons/express";
import { MongoDBLogo } from "@/public/assets/icons/mongoDB";
import { NextJSLogo } from "@/public/assets/icons/nextJS";
import { NodeJSLogo } from "@/public/assets/icons/nodeJS";
import { PostgresqlLogo } from "@/public/assets/icons/postgresql";
import { ReactLogo } from "@/public/assets/icons/react";
import { RedisLogo } from "@/public/assets/icons/redis";
import { SnowFlakeLogo } from "@/public/assets/icons/snowFlake";
import { TailwindLogo } from "@/public/assets/icons/tailwind";
import { TypescriptLogo } from "@/public/assets/icons/typescript";
import { VercelLogo } from "@/public/assets/icons/vercel";

export function Technologies() {
  return (
    <div className="flex flex-col text-3xl mt-10">
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
        Technologies
      </h2>

      <div className="flex flex-col items-center mt-20 mb-10">
        <div className="flex gap-44 mb-10">
          <ReactLogo />
          <NodeJSLogo />
          <MongoDBLogo />
          <PostgresqlLogo />
          <TypescriptLogo />
        </div>
        <div className="flex gap-40">
          <NextJSLogo />
          <TailwindLogo />
          <VercelLogo />
          <RedisLogo />
          <SnowFlakeLogo />
          <ExpressLogo />
        </div>
      </div>
    </div>
  );
}
