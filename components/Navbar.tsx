'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MainLogo from "./MainLogo";
import { NAV_LINKS } from "@/constants";
import Buttons from "./Buttons";
import ThemeSwitch from "./ThemeSwitch"; 
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <div className="flexStart">
        <Link href="/">
          <MainLogo />
        </Link>
        <ul className={`hidden h-full gap-12 lg:flex pl-6 ${isMenuOpen ? "block" : "hidden"} lg:block`}>
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="font-custom font-bold transition-all hover:text-customOrange-light"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>

      <div className="lg:flexEnd hidden lg:flex gap-4">
        <ThemeSwitch />
        <Buttons
          type="button"
          title="Download"
          icon={false}
          variant="btn-normal"
        ></Buttons>
      </div>

      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isMenuOpen ? (
            <FiX size={24} className="text-customOrange" />
          ) : (
            <FiMenu size={24} className="text-customOrange" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-black lg:hidden flex flex-col items-start p-6 shadow-md z-20">
          <ul className="flex flex-col w-full gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="font-custom font-bold transition-all hover:text-customOrange-light"
              >
                {link.label}
              </Link>
            ))}
          </ul>
          <div className="flex flex-col items-start mt-4 gap-4 w-full">
            <ThemeSwitch />
            <Buttons
              type="button"
              title="Download"
              icon={false}
              variant="btn-normal"
            ></Buttons>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
