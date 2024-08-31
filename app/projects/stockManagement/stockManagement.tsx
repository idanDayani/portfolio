import React from "react";
import { TechnologiesUsed } from "./technologiesUsed";
import { GitHubLinks } from "./gitHubLinks";
import { DescCards } from "./descCards";
import { MainDesc } from "./mainDesc";

export function StockManagement() {
  return (
    <div className="flex flex-col px-4 md:px-6 py-12 md:py-16 bg-gradient-to-r from-[#1c1c22] to-[#2c2c34]">
        <MainDesc/>
        <DescCards/>
        <TechnologiesUsed />
        <GitHubLinks />
    </div>
  );
}
