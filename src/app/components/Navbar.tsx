"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PNG from "../../../public/banner.png";
import IG from "../../../public/image.png";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  const navLinks = [
    { link: "/", name: "Home" },
    { link: "/#about-us", name: "About Us" },
    { link: "/#events", name: "Events" },
    { link: "/#media", name: "Media" },
    { link: "/#contact", name: "Contact" },
  ];
  return (
    <nav className=" h-26 w-full flex items-center justify-between px-10 font-semibold text-xl">
      <div className="flex space-x-3">
        <Image src={PNG} width={"10"} height={"10"} alt="test" />
        <span className="text-2xl">
          Shivaleela Cultural Trust <sup className="text-sm">Ⓡ</sup>
        </span>
      </div>
      <div className="space-x-14 flex items-center mr-6">
        {navLinks.map((val) => (
          <Link
            key={val.name}
            className={pathname === val.link ? "text-[#a93328]" : ""}
            href={val.link}
          >
            {val.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
