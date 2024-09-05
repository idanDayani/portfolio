"use client";
import { NavHamburger } from "./navHamburger";
import { usePathname } from "next/navigation";
import { LogoLink } from "./logoLink";
import { NavRegular } from "./navRegular";
import { urls } from "@/app/common/urls";

const links = [
  { name: "Home", href: urls.HOME },
  { name: "About", href: urls.ABOUT },
  { name: "Projects", href: urls.PROJECTS },
  { name: "Contact", href: urls.CONTACT },
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
