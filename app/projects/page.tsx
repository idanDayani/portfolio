"use client";
import React, { useState } from "react";
import { StockManagement } from "./stockManagement/stockManagement";
import { InventoryManagement } from "./inventoryManagement/inventoryManagement";
import { ExpoBoltAIApp } from "./expoBoltAIApp/expoBoltAIApp";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("stock");

  return (
    <div className="flex flex-col my-10 mx-6 p-2 lg:mx-20 lg:py-4 lg:px-8">
      <h2 className="text-5xl font-bold tracking-tighter lg:text-6xl/none mb-10 text-yellow-1000">
        My Projects
      </h2>
      <div className="flex space-x-2">
        <button
          onClick={() => setActiveTab("stockManagement")}
          className={`px-4 py-2 rounded-t-lg font-semibold ${
            activeTab === "stockManagement"
              ? "bg-gray-800 text-yellow-1000"
              : "bg-gray-700 text-gray-300"
          } hover:bg-gray-600 transition-colors`}
        >
          Stock Management
        </button>
        <button
          onClick={() => setActiveTab("expoBoltAIApp")}
          className={`px-4 py-2 rounded-t-lg font-semibold ${
            activeTab === "expoBoltAIApp"
              ? "bg-gray-800 text-yellow-1000"
              : "bg-gray-700 text-gray-300"
          } hover:bg-gray-600 transition-colors`}
        >
          Expo Bolt AI App
        </button>
        <button
          onClick={() => setActiveTab("inventoryManagement")}
          className={`px-4 py-2 rounded-t-lg font-semibold ${
            activeTab === "inventoryManagement"
              ? "bg-gray-800 text-yellow-1000"
              : "bg-gray-700 text-gray-300"
          } hover:bg-gray-600 transition-colors`}
        >
          Inventory Managment
        </button>
      </div>
      <div className="p-6 bg-gradient-to-r from-[#1c1c22] to-[#2c2c34] rounded-b-lg shadow-lg">
        {activeTab === "stockManagement" && <StockManagement />}
        {activeTab === "expoBoltAIApp" && <ExpoBoltAIApp />}
        {activeTab === "inventoryManagement" && <InventoryManagement />}
      </div>
    </div>
  );
}
300;
