'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa6';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      link: "Home",
      href: "/"
    },
    {
      link: "Guidelines",
      href: "/guidelines"
    },
    {
      link: "Plans",
      href: "/plans"
    },
    {
      link: "Resellers Plan",
      href: "/resellers-plan"
    },
    {
      link: "News Room",
      href: "/news-room"
    }
  ];


  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center px-4 py-4 lg:px-10">

        {/* Logo */}
        <Link href={"/"} className="text-lg md:text-xl font-semibold tracking-tight text-gray-800 dark:text-white">
          FG Newswire<span className="text-[#a0e527]">.</span>
        </Link>

        {/* Hamburger (Mobile Only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-gray-800 dark:text-white"
          aria-label="Toggle Menu"
        >
          <FaBars className="text-xl" />
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-3 lg:space-x-6 text-sm lg:text-base font-medium text-gray-800 dark:text-gray-200">
          {navLinks.map((link,key) => (
            <Link
              key={key}
              href={`${link.href.toLocaleLowerCase()}`}
              className="hover:text-[#1e3a1f] transition duration-300"
            >
              {link.link}
            </Link>
          ))}

        </nav>
        {/* CTA Button */}
        <Link
          href="#"
          className="hidden font-normal text-sm md:flex ml-6 hover:bg-transparent hover:border-[#163316] hover:text-[#163316] border border-[#163316] text-white bg-[#163316] px-4 py-1.5 rounded-full shadow-md transition"
        >
          Sign In / UP
        </Link>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute left-0 top-full w-full bg-white dark:bg-gray-900 shadow transition-all duration-300">
          <nav className="flex flex-col text-sm text-gray-700 dark:text-gray-200">
            {navLinks.map((link,key) => (
              <Link
                key={key}
                href={link.href.toLocaleLowerCase()}
                className="py-2 px-4 hover:bg-green-50 dark:hover:bg-[#1e3a1f]/20 rounded transition"
              >
                {link.name}
              </Link>
            ))}

            {/* CTA Button for mobile */}
            <Link
              href="/"
              className="mx-4 my-2 font-normal text-center px-4 py-1.5 text-sm rounded-full hover:bg-transparent hover:border-[#163316] hover:text-[#163316] border border-[#163316] text-white bg-[#163316] transition"
            >
              Sign In / UP
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
