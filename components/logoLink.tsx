import { urls } from "@/app/common/urls";
import Link from "next/link";

export function LogoLink() {
  return (
    <Link className="flex items-center justify-center" href={urls.HOME}>
      <div className="text-lg sm:text-2xl font-bold text-yellow-1000">
        Dayani<span> .</span>
      </div>
    </Link>
  );
}
