import React from "react";
import { MainDesc } from "../common/components/mainDesc";
import { GitHubLinks } from "../common/components/gitHubLinks";
import { TechnologiesUsed } from "./technologiesUsed";
import { VideoSection } from "./videoSection";

export function BitcoinWalletTracker() {
    return (
        <div className="flex flex-col px-4 md:px-6 py-12 md:py-16 bg-gradient-to-r from-[#1c1c22] to-[#2c2c34]">
            <MainDesc title="Bitcoin Wallet Tracker" description="A real-time Bitcoin wallet tracker that displays the balance of a wallet and BTC dollar value." />
            <TechnologiesUsed />
            <VideoSection />
            <GitHubLinks serverLink="https://github.com/idanDayani/realtime-bitcoin-wallet-tracker-server" clientLink="https://github.com/idanDayani/realtime-bitcoin-wallet-tracker-client" />
        </div>
    );
}
