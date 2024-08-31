"use client";
import React from "react";
import Link from "next/link";
import { GithubIcon } from "@/public/assets/icons/github";
import { LinkedinIcon } from "@/public/assets/icons/linkedin";
import { MailIcon } from "@/public/assets/icons/mail";

export function Footer() {
  const onClickEmail = () => {
    window.open("mailto:idandayani@gmail.com", "_blank");
  };

  return (
    <footer className="p-6 sm:p-8">
      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
          <Link
            href="https://github.com/idanDayani"
            target="_blank"
            className="hover:text-yellow-1000 transition-colors"
            prefetch={false}
          >
            <GithubIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/in/idandayani/"
            target="_blank"
            className="hover:text-yellow-1000 transition-colors"
            prefetch={false}
          >
            <LinkedinIcon />
          </Link>
          <div
            onClick={onClickEmail}
            className="hover:text-yellow-1000 transition-colors cursor-pointer"
          >
            <MailIcon />
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; 2024 Idan Dayani.
        </p>
      </div>
    </footer>
  );
}
