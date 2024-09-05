"use client";
import { NavHamburger } from "./navHamburger";
import { usePathname } from "next/navigation";
import { LogoLink } from "./logoLink";
import { NavRegular } from "./navRegular";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const pathName = usePathname();

  return (
    <header className="pl-4 pt-2 sm:px-4 lg:px-6 h-14 flex items-center justify-between">
      <LogoLink />
      <NavHamburger links={links} pathName={pathName!} />
      <NavRegular links={links} pathName={pathName!} />
    </header>
  );
}
