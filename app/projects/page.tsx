import React from "react";
import { StockManagement } from "./stockManagement/stockManagement";

export default function Projects() {
  return (
    <div className="flex flex-col my-10 mx-6 lg:m-20 p-2 lg:p-8">
      <h2 className="text-5xl font-bold tracking-tighter lg:text-6xl/none mb-8 text-yellow-1000">
        My Projects
      </h2>
      <StockManagement />
    </div>
  );
}
