"use client";
import { useWindowSize } from "usehooks-ts";
import { screenSizes } from "@/app/common/screenSizes";
import { KafkaLogo } from "@/public/assets/logos/kafka";
import { NextJSLogo } from "@/public/assets/logos/nextJS";
import { WebsocketLogo } from "@/public/assets/logos/websocket";
// import { TechnologiesMobileDevice } from "./technologiesMobileDevice";

export function TechnologiesUsed() {
    const { width } = useWindowSize();
    const isMobileDevice = width < screenSizes.bigDevice;

    // if (isMobileDevice) {
    //     return <TechnologiesMobileDevice />;
    // }

    return (
        <div className="flex flex-col mt-12 md:mt-10">
            <h2 className="text-3xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 md:text-4xl sm:text-left">Technologies used</h2>
            <div className="flex flex-col items-center">
                <div className="flex items-center gap-6 sm:gap-20 md:gap-40">
                    <KafkaLogo />
                    <NextJSLogo />
                    <WebsocketLogo />
                </div>
            </div>
        </div>
    );
}
