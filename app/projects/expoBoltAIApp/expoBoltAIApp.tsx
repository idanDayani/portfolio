import React from "react";
import { MainDesc } from "../common/components/mainDesc";
import { GitHubLinks } from "../common/components/gitHubLinks";
import { TechnologiesUsed } from "./technologiesUsed";

export function ExpoBoltAIApp() {
    return (
        <div className="flex flex-col px-4 md:px-6 py-12 md:py-16 bg-gradient-to-r from-[#1c1c22] to-[#2c2c34]">
            <MainDesc title="Expo Bolt AI App" description="A portfolio app, which dynamically pulls data from GitHub and showcases user projects, built and launched with Bolt.new, an AI-powered platform that can create an app across Web, Android, and iOS using Expo." />
            <TechnologiesUsed />
            <GitHubLinks clientLink="https://github.com/idanDayani/expo-bolt.new-ai-app" />
        </div>
    );
}
