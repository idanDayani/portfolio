import React from "react";
import { ExpressLogo } from "@/public/assets/logos/express";
import { MongoDBLogo } from "@/public/assets/logos/mongoDB";
import { NextJSLogo } from "@/public/assets/logos/nextJS";
import { NodeJSLogo } from "@/public/assets/logos/nodeJS";
import { PostgresqlLogo } from "@/public/assets/logos/postgresql";
import { ReactLogo } from "@/public/assets/logos/react";
import { RedisLogo } from "@/public/assets/logos/redis";
import { SnowFlakeLogo } from "@/public/assets/logos/snowFlake";
import { TailwindLogo } from "@/public/assets/logos/tailwind";
import { TypescriptLogo } from "@/public/assets/logos/typescript";
import { VercelLogo } from "@/public/assets/logos/vercel";
import { PlaywrightLogo } from "@/public/assets/logos/playwright";

export function MyStack() {
  return (
    <div className="flex flex-col text-3xl mt-20 items-center max-w-screen">
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
        The Stack Behind My Work
      </h2>
      <div className="flex flex-col items-center mt-10 mb-10 w-full">
        <div className="flex gap-44 mb-10">
          <ReactLogo />
          <NodeJSLogo />
          <PlaywrightLogo/>
        </div>

        <div className="flex gap-44 mb-10">
          <MongoDBLogo />
          <PostgresqlLogo />
          <RedisLogo />
          <SnowFlakeLogo />
        </div>

        <div className="flex gap-40 w-full">
          <NextJSLogo />
          <TailwindLogo />
          <VercelLogo />
          <ExpressLogo />
          <TypescriptLogo />
        </div>
      </div>
    </div>
  );
}
