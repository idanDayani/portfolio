import React from "react";
import Link from "next/link";
import { GithubIcon } from "@/public/assets/icons/github";
import { LinkedinIcon } from "@/public/assets/icons/linkedin";
import { MailIcon } from "@/public/assets/icons/mail";
import { Button } from "./ui/button";

export function Footer() {
  const onClickEmail = () => {
    window.open("mailto:idandayani@gmail.com", "_blank");
  };

  return (
    <footer className="bg-[#1c1c22] text-white py-8 px-4 md:px-6">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row md:items-start">
        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com/idanDayani"
            target="_blank"
            className="text-white hover:text-[#CCFF00] transition-colors"
            prefetch={false}
          >
            <GithubIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/in/idandayani/"
            target="_blank"
            className="text-white hover:text-[#CCFF00] transition-colors"
            prefetch={false}
          >
            <LinkedinIcon />
          </Link>
          <div
            onClick={onClickEmail}
            className="text-white hover:text-[#CCFF00] transition-colors cursor-pointer"
          >
            <MailIcon />
          </div>
        </div>
        <p className="mt-4 md:mt-0 text-sm text-muted-foreground">
          &copy; 2024 Idan Dayani.
        </p>
      </div>
    </footer>
  );
}
