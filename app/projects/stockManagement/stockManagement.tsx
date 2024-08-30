import React from "react";
import { TechnologiesUsed } from "./technologiesUsed";

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
            real-time quotes, and make informed decisions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-[#2c2c34] to-[#3c3c44] rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-semibold">Save and Edit Portfolio</h3>
            </div>
            <p className="text-muted-foreground">
              Users can easily save and edit their investment portfolio, keeping
              track of their stocks and holdings.
            </p>
          </div>
          <div className="bg-gradient-to-r from-[#2c2c34] to-[#3c3c44] rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-semibold">
                Navigate Between Portfolio and Stocks
              </h3>
            </div>
            <p className="text-muted-foreground">
              Users can seamlessly move between the portfolio page and
              individual stock pages, allowing for a smooth user experience.
            </p>
          </div>
          <div className="bg-gradient-to-r from-[#2c2c34] to-[#3c3c44] rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-semibold">
                View Latest Stock Quotes
              </h3>
            </div>
            <p className="text-muted-foreground">
              Users can see the latest stock quotes on each individual stock
              page, helping them make informed investment decisions.
            </p>
          </div>
        </div>
        <TechnologiesUsed />
      </div>
    </div>
  );
}
