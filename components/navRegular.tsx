import Link from "next/link";

export function NavRegular(props: {
  links: { name: string; href: string }[];
  pathName: string;
}) {
  const { links, pathName } = props;

  return (
    <nav className="hidden sm:flex gap-2 sm:gap-8">
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
