import React from "react";
import { TechnologiesUsed } from "./technologiesUsed";
import { GitHubLinks } from "./gitHubLinks";

export function StockManagement() {
  return (
    <div className="flex px-4 md:px-6 py-12 md:py-16 bg-gradient-to-r from-[#1c1c22] to-[#2c2c34] text-white">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Stock Management
          </h1>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
            Manage your investment portfolio with ease. Track your stocks, get
            real-time stocks data, and make informed decisions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-[#2c2c34] to-[#3c3c44] rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-semibold">Save and Edit Portfolio</h3>
            </div>
            <p className="text-muted-foreground">
              Easily search for any stock, save and edit investment
              portfolio, keeping track stocks and holdings.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#2c2c34] to-[#3c3c44] rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-semibold">
                View Latest Stock Quotes
              </h3>
            </div>
            <p className="text-muted-foreground">
              Watch the latest stock quotes on each individual stock
              page, helping make informed investment decisions.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#2c2c34] to-[#3c3c44] rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-semibold">
                Monitor Stock Changes Over Time
              </h3>
            </div>
            <p className="text-muted-foreground">
              Track the performance of stocks with live. Analyze historical trends and market movements
              to gain insights into your investments, making data-driven
              decisions with confidence.
            </p>
          </div>
        </div>
        <TechnologiesUsed />
        <GitHubLinks />
      </div>
    </div>
  );
}
