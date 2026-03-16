import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa6";

interface SocialLink {
  id: string;
  icon: React.ComponentType<{ size: number }>;
  link: string;
  label: string;
}

interface FooterLinkSection {
  title: string;
  links: { name: string; href: string }[];
}

const socialLinks: SocialLink[] = [
  {
    id: "instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/shivaleelanatyalaya/",
    label: "Instagram",
  },
  {
    id: "facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/shivaleelanatyalaya",
    label: "Facebook",
  },
];

const footerSections: FooterLinkSection[] = [
  {
    title: "Classes",
    links: [
      { name: "Bharatanatyam", href: "/#classes" },
      { name: "Carnatic Music", href: "/#classes" },
      { name: "Workshops", href: "/#classes" },
      { name: "Registrations", href: "/#contact" },
    ],
  },
  {
    title: "Media",
    links: [
      { name: "Gallery", href: "/#gallery" },
      { name: "Videos", href: "/#media" },
      { name: "Press", href: "/#media" },
    ],
  },
  // {
  //   title: "Events",
  //   links: [
  //     { name: "Upcoming Events", href: "/#productions" },
  //     { name: "Productions", href: "/#productions" },
  //     { name: "Past Events", href: "/#gallery" },
  //     { name: "Festivals", href: "/#media" },
  //   ],
  // },
  {
    title: "Home",
    links: [
      { name: "Founder", href: "/#about-us" },
      { name: "Achievements", href: "/#case-studies" },
      { name: "Contact Form", href: "/#contact" },
      { name: "FAQ", href: "/#faq" },
    ],
  },
];

const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-full bg-secondary px-2 py-8 text-white md:px-20 md:py-10"
    >
      <div className="mx-auto flex flex-col gap-8 md:flex-row md:justify-between">
        {/* Logo and Address Section */}
        <div className="flex flex-col items-center text-center md:flex-row md:items-start md:gap-5 md:text-left">
          <div className="shrink-0">
            <Image src="/logo.png" alt="Gaana Nritya Academy" width={96} height={96} />
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-[#FFD45C]">
              Shivaleela Natyalaya
            </h3>
            <address className="not-italic">
              <p className="text-sm md:text-base"><span className="font-semibold">Ashirwad</span>&nbsp;
                <br />
                # 814, 100 feet Outer ring road,<br /> Kalidasa nagar, Hosakerehalli, <br />Bsk 3rd stage, Bangalore : 560085.</p>
            </address>
          </div>
        </div>

        <div className="flex justify-center gap-6 md:items-end">
          {/* Social Links Section */}
          <div className="mr-5 flex h-full flex-row items-center justify-center space-x-5 md:flex-col md:space-x-0 md:space-y-5">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-[#FFD45C] transition-all hover:scale-110 hover:opacity-80"
                >
                  {IconComponent && <IconComponent size={24} />}
                </a>
              );
            })}
          </div>
          <nav className="hidden md:grid md:grid-cols-4 md:gap-x-12">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="mb-3 text-base font-semibold text-[#FFD45C]">
                  {section.title}
                </h4>
                <ul className="list-none space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm transition-colors hover:text-[#FFD45C]"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs text-gray-400 md:mt-10 md:flex md:flex-row md:justify-between">
        <div>
          © {new Date().getFullYear()} Gaana Nritya Academy. All rights
          reserved.
        </div>
        <div className="mt-1 md:mt-0">
          Designed & Developed by{" "}
          <a
            href="https://pixelcrew.in"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#FFD45C]"
          >
            PIXELCREW
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
