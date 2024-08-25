import React from "react";
import Link from "next/link";
import { Nav } from "./nav";

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
      <Link className="flex items-center justify-center" href="/">
        <div className="text-2xl font-bold text-yellow-1000">
          Dayani<span className="text-white"> .</span>
        </div>
      </Link>
      <Nav />
    </header>
  );
}
