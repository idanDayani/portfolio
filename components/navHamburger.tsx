"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { LogoLink } from "./logoLink";

export function NavHamburger(props: {
  links: { name: string; href: string }[];
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathName = usePathname();

  const firstSpanStyle = isOpen
    ? "group-hover:translate-y-1.5 group-hover:rotate-45"
    : "";
  const secondSpanStyle = isOpen
    ? "group-hover:w-10 group-hover:-translate-y-1.5 group-hover:-rotate-45"
    : "";

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="group flex h-20 w-20 z-50 cursor-pointer items-center justify-center rounded-3xl p-2"
        onClick={handleClick}
      >
        <div className="space-y-2">
          <span
            className={`block h-1 w-10 origin-center rounded-full bg-white transition-transform ease-in-out ${firstSpanStyle}`}
          ></span>
          <span
            className={`block h-1 w-8 origin-center rounded-full bg-yellow-1000 transition-transform ease-in-out ${secondSpanStyle}`}
          ></span>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col fixed inset-0 z-40 bg-[#1c1c22] bg-opacity-90 items-center justify-center space-y-4">
          {props.links.map((link, index) => {
            const currentPath = pathName === link.href;
            return (
              <Link
                onClick={() => setIsOpen(false)}
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
        </div>
      )}
    </>
  );
}
