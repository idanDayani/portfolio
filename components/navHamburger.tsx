import Link from "next/link";
import React, { useState } from "react";
import { Hamburger } from "./hamburger";

export function NavHamburger(props: {
  links: { name: string; href: string }[];
  pathName: string;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { links, pathName } = props;

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Hamburger isOpen={isOpen} onClick={handleClick} />
      {isOpen && (
        <div className="flex flex-col fixed inset-0 z-40 bg-[#1c1c22] bg-opacity-70 backdrop-blur-md items-center justify-center space-y-6">
          {links.map((link, index) => {
            const currentPath = pathName === link.href;
            return (
              <Link
                onClick={() => setIsOpen(false)}
                className={`${
                  currentPath &&
                  "text-xl text-yellow-1000 font-semibold border-b-2 border-yellow-1000"
                } text-xl`}
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
