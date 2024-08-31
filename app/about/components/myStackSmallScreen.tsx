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

export function MyStackSmallScreen() {
  return (
    <div className="flex flex-col mt-14 items-center max-w-screen">
      <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 sm:text-4xl text-center">
        The Stack Behind My Work
      </h2>
      <div className="flex flex-col items-center mt-10 mb-10 w-full gap-y-4">
        <div className="flex gap-20 sm:gap-44">
          <ReactLogo />
          <NodeJSLogo />
        </div>
        <div className="flex gap-6">
          <MongoDBLogo />
          <PostgresqlLogo />
        </div>
        <div className="flex gap-14 sm:gap-44">
          <RedisLogo />
          <SnowFlakeLogo />
        </div>
        <div className="flex">
          <NextJSLogo />
          <TailwindLogo />
        </div>
        <div className="flex gap-20 sm:gap-44">
          <ExpressLogo />
          <VercelLogo />
        </div>
        <div className="flex gap-4 sm:gap-8">
          <PlaywrightLogo />
          <TypescriptLogo />
        </div>
      </div>
    </div>
  );
}
