import { BoltNewLogo } from "@/public/assets/logos/boltNew";
import { ExpoLogo } from "@/public/assets/logos/expo";
import { ReactNativeLogo } from "@/public/assets/logos/reactNative";

export function TechnologiesMobileDevice() {
    return (
        <div className="flex flex-col mt-12 md:mt-10">
            <h2 className="text-3xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 md:text-4xl sm:text-left">Technologies used</h2>
            <div className="flex flex-col items-center">
                <div className="flex items-center gap-16">
                    <ExpoLogo />
                    <ReactNativeLogo />
                </div>
                <div className="flex items-center">
                    <BoltNewLogo />
                </div>
            </div>
        </div>
    );
}
