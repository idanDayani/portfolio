import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function Photo() {
  return (
    <div>
      <div className="w-[198px] h-[198px] sm:w-[298px] sm:h-[298px] absolute">
        <Image
          src="/assets/idan.png"
          priority
          quality={100}
          fill
          alt={"Idan Dayani"}
          className="object-contain"
        />
      </div>
      <motion.svg
        className="w-[200px] sm:w-[300px]"
        fill="transparent"
        viewBox="0 0 506 506"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#CCFF00"
          strokeWidth="4"
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["25 10 0 0", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>
    </div>
  );
}
