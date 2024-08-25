import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Nav() {
  const pathName = usePathname();
  return (
    <nav className="flex gap-8">
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
  );
}
