'use client';
import { useState } from 'react';
import { FaBars, FaFacebookF, FaXTwitter, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa6';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['Home', 'Services', 'Projects', 'Blogs', 'About Us', 'Pricing'];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center px-4 py-4 md:px-10">
        
        {/* Logo */}
        <div className="text-lg md:text-xl font-semibold tracking-tight text-gray-800 dark:text-white">
          Digital Marketing<span className="text-[#a0e527]">.</span>
        </div>

        {/* Hamburger (Mobile Only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-gray-800 dark:text-white"
          aria-label="Toggle Menu"
        >
          <FaBars className="text-xl" />
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-sm md:text-base font-medium text-gray-800 dark:text-gray-200">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-[#1e3a1f] transition duration-300"
            >
              {link}
            </a>
          ))}

          </nav>
          {/* CTA Button */}
          <a
            href="#"
            className="hidden font-normal md:flex ml-6 hover:bg-transparent hover:border-[#163316] hover:text-[#163316] border border-[#163316] text-white bg-[#163316] px-4 py-1 rounded-full shadow-md transition"
          >
            Get A Quote
          </a>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute left-0 top-full w-full bg-white dark:bg-gray-900 shadow transition-all duration-300">
          <nav className="flex flex-col text-sm text-gray-700 dark:text-gray-200">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="py-2 px-4 hover:bg-green-50 dark:hover:bg-[#1e3a1f]/20 rounded transition"
              >
                {link}
              </a>
            ))}

            {/* CTA Button for mobile */}
            <a
              href="#"
              className="mx-4 my-2 font-normal text-center px-4 py-1 rounded-full hover:bg-transparent hover:border-[#163316] hover:text-[#163316] border border-[#163316] text-white bg-[#163316] transition"
            >
              Get A Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
