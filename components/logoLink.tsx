import Link from "next/link";

export function LogoLink() {
  return (
    <Link className="flex items-center justify-center" href="/">
      <div className="text-lg sm:text-2xl font-bold text-yellow-1000">
        Dayani<span> .</span>
      </div>
    </Link>
  );
}
