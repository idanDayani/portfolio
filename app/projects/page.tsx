import React from "react";
import { StockManagement } from "./stockManagement/stockManagement";

export default function Projects() {
  return (
    <div className="flex flex-col item m-20 p-8">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
        My Projects
      </h2>
        <StockManagement />
    </div>
  );
}
