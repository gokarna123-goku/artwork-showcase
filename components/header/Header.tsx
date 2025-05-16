"use client";

import Link from "next/link";
import { useState } from "react";
import MobileNav from "./MobileNav";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center lg:px-12 md:px-8 sm:px-6 px-4 py-4 bg-black/50 backdrop-blur-md">
        {/* logo */}
        <Link
          href="/"
          className="text-white font-bold text-2xl md:text-3xl tracking-wider uppercase"
        >
          <span className="text-purple-500">a</span>
          <span className="text-amber-500">r</span>
          <span className="text-indigo-500">t</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-6 text-base text-white">
            <li>
              <Link
                href={"/"}
                className="hover:text-purple-400 ease-in-out duration-300"
              >
                Explore
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="hover:text-amber-400 ease-in-out duration-300"
              >
                Artists
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="hover:text-indigo-400 ease-in-out duration-300"
              >
                Collections
              </Link>
            </li>
          </ul>
          <button className="text-base hover:text-neutral-200 hover:bg-neutral-800 bg-cyan-400 text-neutral-800 px-4 py-2 rounded-md cursor-pointer ease-in-out duration-300">
            Join Now
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            className="text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <FaBars className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && <MobileNav onClose={() => setMobileMenuOpen(false)} />}
    </>
  );
};

export default Header;
