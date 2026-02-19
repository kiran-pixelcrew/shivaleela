import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer id="contact" className="bg-[#212122] py-16 text-white">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 px-6 md:px-12 gap-10">
        
        <div className="lg:col-span-1">
          <div className="text-2xl font-bold">Logo</div>
        </div>

        <div className="lg:col-span-2">
          <span className="text-yellow-400 font-semibold text-xl block mb-4">
            Gaana Nritya Academy
          </span>
          <ul className="space-y-1 text-gray-300">
            <li>Tharangini Raktheshwari,</li>
            <li>Nagar Kottara Chowki, Mangaluru,</li>
            <li>Karnataka - 575006</li>
            <li className="font-semibold pt-2 text-white">9986563999</li>
            <li>gaananritya@gmail.com</li>
          </ul>
        </div>

        <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <span className="text-yellow-400 font-semibold text-lg block mb-4">Classes</span>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Bhartanatyam</li>
              <li>Carnatic Music</li>
              <li>Workshops</li>
              <li>Registrations</li>
            </ul>
          </div>
          <div>
            <span className="text-yellow-400 font-semibold text-lg block mb-4">Media</span>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Gallery</li>
              <li>Videos</li>
              <li>Press</li>
              <li>Registrations</li>
            </ul>
          </div>
          <div>
            <span className="text-yellow-400 font-semibold text-lg block mb-4">Events</span>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Upcoming Events</li>
              <li>Productions</li>
              <li>Past Events</li>
              <li>Festivals</li>
            </ul>
          </div>
          <div>
            <span className="text-yellow-400 font-semibold text-lg block mb-4">Home</span>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Founder</li>
              <li>Achievements</li>
              <li>Contact Form</li>
              <li>Faq</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Gaana Nritya Academy. All rights reserved.
        </p>
        <div className="flex gap-6 text-yellow-400">
          <Instagram className="cursor-pointer hover:text-white transition-colors" />
          <Twitter className="cursor-pointer hover:text-white transition-colors" />
          <Linkedin className="cursor-pointer hover:text-white transition-colors" />
          <Facebook className="cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;