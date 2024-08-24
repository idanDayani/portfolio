import React from "react";
import Link from "next/link";

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <span className="sr-only">Idan Dayani</span>
        <span className="h-6 w-6 text-2xl font-bold">Idan Dayani</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#about"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#projects"
        >
          Projects
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
