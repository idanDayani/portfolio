import React from "react";
import { TechnologiesUsed } from "./technologiesUsed";
import { GitHubLinks } from "../common/components/gitHubLinks";
import { DescCards } from "./descCards";
import { MainDesc } from "../common/components/mainDesc";

export function StockManagement() {
    return (
        <div className="flex flex-col px-4 md:px-6 py-12 md:py-16 bg-gradient-to-r from-[#1c1c22] to-[#2c2c34]">
            <MainDesc title="Stock Management" description="Manage your investment portfolio with ease. Track your stocks, get real-time stocks data, and make informed decisions." />
            <DescCards />
            <TechnologiesUsed />
            <GitHubLinks serverLink="https://github.com/idanDayani/stock-management-server" clientLink="https://github.com/idanDayani/stock-management-client" />
        </div>
    );
}
