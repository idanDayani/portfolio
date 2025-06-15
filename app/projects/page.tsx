"use client";
import React, { useState } from "react";
import { StockManagement } from "./stockManagement/stockManagement";
import { InventoryManagement } from "./inventoryManagement/inventoryManagement";
import { ExpoBoltAIApp } from "./expoBoltAIApp/expoBoltAIApp";
import { Tabs } from "./tabs/tabs";

export default function Projects() {
    const [activeTab, setActiveTab] = useState("stockManagement");

    return (
        <div className="flex flex-col my-10 mx-6 p-2 lg:mx-20 lg:py-4 lg:px-8">
            <h2 className="text-5xl font-bold tracking-tighter lg:text-6xl/none mb-10 text-yellow-1000">My Projects</h2>
            <Tabs setActiveTab={setActiveTab} activeTab={activeTab} />
            <div className="p-6 bg-gradient-to-r from-[#1c1c22] to-[#2c2c34] rounded-b-lg shadow-lg">
                {activeTab === "stockManagement" && <StockManagement />}
                {activeTab === "expoBoltAIApp" && <ExpoBoltAIApp />}
                {activeTab === "inventoryManagement" && <InventoryManagement />}
            </div>
        </div>
    );
}
300;
