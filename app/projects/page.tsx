import React from "react";
import { StockManagement } from "./stockManagement/stockManagement";

export default function Projects() {
  return (
    <div className="flex flex-col my-10 mx-6 p-2 lg:mx-20 lg:py-4 lg:px-8">
      <h2 className="text-5xl font-bold tracking-tighter lg:text-6xl/none mb-8 text-yellow-1000">
        My Projects
      </h2>
      <StockManagement />
    </div>
  );
}
