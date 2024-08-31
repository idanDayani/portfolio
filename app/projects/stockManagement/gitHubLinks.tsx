import React from "react";
import Link from "next/link";
import { GithubIcon } from "@/public/assets/icons/github";

export function GitHubLinks() {
  return (
    <div className="flex flex-col mt-10">
      <h2 className="text-3xl text-center font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 md:text-4xl sm:text-left">
        GitHub Links
      </h2>

      <div className="flex justify-center gap-4 mt-2 sm:mt-0">
        <Link
          href="https://github.com/idanDayani/stock-management-server"
          target="_blank"
          className="flex gap-2 text-white hover:text-[#CCFF00] transition-colors"
          prefetch={false}
        >
          <div className="text-lg">Server</div>
          <GithubIcon />
        </Link>

        <Link
          href="https://github.com/idanDayani/stock-management-client"
          target="_blank"
          className="flex gap-2 text-white hover:text-[#CCFF00] transition-colors"
          prefetch={false}
        >
          <div className="text-lg">Client</div>
          <GithubIcon />
        </Link>
      </div>
    </div>
  );
}
