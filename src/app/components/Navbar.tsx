"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import PNG from "../../../public/banner.png";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

function Navbar() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setActiveHash(window.location.hash);
    const handleHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navLinks = [
    { link: "/", name: "Home" },
    { link: "/#about-us", name: "About Us" },
    { link: "/#events", name: "Events" },
    { link: "/#media", name: "Media" },
    { link: "/#contact", name: "Contact" },
  ];

  return (
    <nav className="sticky z-50 top-0 bg-white w-full border-b">
      <div className="max-w-full mx-auto flex items-center justify-between px-4 md:px-10 h-20 md:h-26">
        <div className="flex items-center space-x-3">
          <Image src={PNG} width={40} height={40} alt="Logo" className="w-8 h-8 md:w-10 md:h-10" />
          <span className="text-lg md:text-2xl font-bold leading-tight">
            Shivaleela Cultural Trust <sup className="text-[10px] md:text-sm">Ⓡ</sup>
          </span>
        </div>

        <div className="hidden lg:flex space-x-8 xl:space-x-14 items-center font-semibold text-lg">
          {navLinks.map((val) => {
            const isActive = activeHash === val.link.replace("/", "");
            return (
              <Link
                key={val.name}
                className={`${isActive ? "text-[#a93328]" : "text-black"} hover:text-[#a93328] transition-colors`}
                href={val.link}
              >
                {val.name}
              </Link>
            );
          })}
        </div>

        <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} lg:hidden bg-white border-t absolute w-full left-0 shadow-lg`}>
        <div className="flex flex-col p-6 space-y-4 font-semibold text-xl">
          {navLinks.map((val) => (
            <Link
              key={val.name}
              href={val.link}
              onClick={() => setIsOpen(false)}
              className={activeHash === val.link.replace("/", "") ? "text-[#a93328]" : "text-black"}
            >
              {val.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;