"use client";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    { Icon: Instagram, label: "Instagram" },
    { Icon: Twitter, label: "Twitter" },
    { Icon: Linkedin, label: "LinkedIn" },
    { Icon: Facebook, label: "Facebook" },
  ];

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="bg-[#212122] py-12 sm:py-14 md:py-16 text-white"
    >
      <div
        className={`w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 px-4 sm:px-6 md:px-8 lg:px-12 gap-8 sm:gap-10 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        <div className="lg:col-span-1">
          <div className="text-2xl sm:text-3xl font-bold">Logo</div>
        </div>

        <div className="lg:col-span-2">
          <span className="text-yellow-400 font-semibold text-xl sm:text-2xl block mb-3 sm:mb-4">
            Gaana Nritya Academy
          </span>
          <ul className="space-y-1 text-sm sm:text-base text-gray-300">
            <li>Tharangini Raktheshwari,</li>
            <li>Nagar Kottara Chowki, Mangaluru,</li>
            <li>Karnataka - 575006</li>
            <li className="font-semibold pt-2 text-white hover:text-yellow-400 transition-colors cursor-pointer">
              9986563999
            </li>
            <li className="hover:text-yellow-400 transition-colors cursor-pointer">
              gaananritya@gmail.com
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <span className="text-yellow-400 font-semibold text-lg sm:text-xl block mb-3 sm:mb-4">
              Classes
            </span>
            <ul className="space-y-2 text-gray-300 text-xs sm:text-sm">
              {["Bhartanatyam", "Carnatic Music", "Workshops", "Registrations"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <span className="text-yellow-400 font-semibold text-lg sm:text-xl block mb-3 sm:mb-4">
              Media
            </span>
            <ul className="space-y-2 text-gray-300 text-xs sm:text-sm">
              {["Gallery", "Videos", "Press", "Registrations"].map((item, index) => (
                <li
                  key={index}
                  className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-yellow-400 font-semibold text-lg sm:text-xl block mb-3 sm:mb-4">
              Events
            </span>
            <ul className="space-y-2 text-gray-300 text-xs sm:text-sm">
              {["Upcoming Events", "Productions", "Past Events", "Festivals"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <span className="text-yellow-400 font-semibold text-lg sm:text-xl block mb-3 sm:mb-4">
              Home
            </span>
            <ul className="space-y-2 text-gray-300 text-xs sm:text-sm">
              {["Founder", "Achievements", "Contact Form", "Faq"].map((item, index) => (
                <li
                  key={index}
                  className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        className={`w-full max-w-7xl mx-auto mt-10 sm:mt-12 pt-6 sm:pt-8 px-4 sm:px-6 md:px-8 lg:px-12 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 transition-all duration-700 ease-out delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        <p className="text-gray-500 text-xs sm:text-sm text-center md:text-left">
          © {new Date().getFullYear()} Gaana Nritya Academy. All rights reserved.
        </p>
        <div className="flex gap-4 sm:gap-6 text-yellow-400">
          {socialLinks.map(({ Icon, label }, index) => (
            <Icon
              key={label}
              className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-white hover:scale-110 transition-all duration-300"
              aria-label={label}
              style={{
                transitionDelay: isVisible ? `${(index + 4) * 100}ms` : "0ms",
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;