"use client";
import { useWindowSize } from "usehooks-ts";
import { screenSizes } from "@/app/common/screenSizes";
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
import { MyStackSmallScreen } from "./myStackSmallScreen";

export function MyStack() {
  const { width } = useWindowSize();
  const isSmallScreen = width < screenSizes.md;

  if (isSmallScreen) {
    return <MyStackSmallScreen />;
  }

  return (
    <div className="flex flex-col mt-20 items-center max-w-screen">
      <h2 className="text-3xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 sm:text-4xl">
        The Stack Behind My Work
      </h2>
      <div className="flex flex-col items-center mt-10 mb-10 w-full">
        <div className="flex gap-32 lg:gap-36 mb-10">
          <ReactLogo />
          <NodeJSLogo />
          <PlaywrightLogo />
        </div>
        <div className="flex gap-24 lg:gap-24 xl:gap-44 mb-10">
          <MongoDBLogo />
          <PostgresqlLogo />
          <RedisLogo />
          <SnowFlakeLogo />
        </div>
        <div className="flex gap-16 lg:gap-16 xl:gap-40">
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
