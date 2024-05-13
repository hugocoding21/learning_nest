import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className='bg-blue-400 flex justify-center gap-56 h-full items-center font-medium'>
      <Link
        href={"/"}
        className={`link ${pathname === "/" ? "text-white" : "off"}`}>
        home
      </Link>
      <Link
        href={"/calculette"}
        className={`link ${pathname === "/calculette" ? "text-white" : ""}`}>
        calculette
      </Link>
    </nav>
  );
}
