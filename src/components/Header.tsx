'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleMouseEnter = (link: string) => setHoveredLink(link);
  const handleMouseLeave = () => setHoveredLink(null);

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-[11vh] bg-white shadow-md z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
          <div className="flex items-center">
            <Link href="/" className="hover:opacity-80 transition flex items-center">
              <Image
                src="/images/datehome.png"
                alt="QuickNet Logo"
                width={80}
                height={80}
                className="rounded-full"
              />
            </Link>
          </div>
          {/* Desktop Navigation Centered */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/shop"
              className="text-gray-800 hover:text-black transition duration-300 text-xl"
            >
              The Shop
            </Link>

            <div
              className="relative"
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <button
                className="text-gray-800 hover:text-black transition duration-300 text-xl flex items-center"
              >
                The App
              </button>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 shadow-md rounded-md"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href="/app/date"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Bumble Date
                    </Link>
                    <Link
                      href="/app/bff"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Bumble BFF
                    </Link>
                    <Link
                      href="/app/bizz"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Bumble Bizz
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/ambassadors"
              className="text-gray-800 hover:text-black transition duration-300 text-xl"
            >
              Ambassadors
            </Link>
            <Link
              href="/events"
              className="text-gray-800 hover:text-black transition duration-300 text-xl"
            >
              Events
            </Link>
            <Link
              href="/buzz"
              className="text-gray-800 hover:text-black transition duration-300 text-xl"
            >
              The Buzz
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:text-black transition duration-300 text-xl"
            >
              About
            </Link>
            <Link
              href="/signin"
              className="text-gray-800 hover:text-black transition duration-300 text-xl"
            >
              Sign In
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-gray-500 focus:outline-none transition"
            >
              {isOpen ? (
                <span className="text-lg">✖</span>
              ) : (
                <span className="text-lg">☰</span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col items-center justify-center space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/shop"
              className="text-gray-800 text-xl font-semibold tracking-wider transition-transform transform hover:scale-105"
              onClick={toggleMenu}
            >
              The Shop
            </Link>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-gray-800 text-xl font-semibold tracking-wider transition-transform transform hover:scale-105"
              >
                The App
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 shadow-md rounded-md">
                  <Link
                    href="/app/date"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Bumble Date
                  </Link>
                  <Link
                    href="/app/bff"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Bumble BFF
                  </Link>
                  <Link
                    href="/app/bizz"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Bumble Bizz
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/ambassadors"
              className="text-gray-800 text-xl font-semibold tracking-wider transition-transform transform hover:scale-105"
              onClick={toggleMenu}
            >
              Ambassadors
            </Link>
            <Link
              href="/events"
              className="text-gray-800 text-xl font-semibold tracking-wider transition-transform transform hover:scale-105"
              onClick={toggleMenu}
            >
              Events
            </Link>
            <Link
              href="/buzz"
              className="text-gray-800 text-xl font-semibold tracking-wider transition-transform transform hover:scale-105"
              onClick={toggleMenu}
            >
              The Buzz
            </Link>
            <Link
              href="/about"
              className="text-gray-800 text-xl font-semibold tracking-wider transition-transform transform hover:scale-105"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/signin"
              className="text-gray-800 text-xl font-semibold tracking-wider transition-transform transform hover:scale-105"
              onClick={toggleMenu}
            >
              Sign In
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
