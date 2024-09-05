"use client";
import Link from "next/link";
import { useWindowSize } from "usehooks-ts";
import { screenSizes } from "@/app/common/screenSizes";
import { NavHamburger } from "./navHamburger";
import { usePathname } from "next/navigation";
import { LogoLink } from "./logoLink";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const pathName = usePathname();
  const { width } = useWindowSize();

  const isMobileDevice = width < screenSizes.bigDevice;

  if (isMobileDevice) {
    return <NavHamburger links={links} />;
  }

  return (
    <header className="pl-4 pt-2 sm:px-4 lg:px-6 h-14 flex items-center justify-between">
      <LogoLink />
      {isMobileDevice ? (
        <NavHamburger links={links} />
      ) : (
        <nav className="flex gap-2 sm:gap-8">
          {links.map((link, index) => {
            const currentPath = pathName === link.href;
            return (
              <Link
                className={`${
                  currentPath &&
                  "text-yellow-1000 font-semibold border-b-2 border-yellow-1000"
                } hover:text-yellow-1000 hover:border-b-2 hover:border-yellow-1000 transition-all`}
                key={index}
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
