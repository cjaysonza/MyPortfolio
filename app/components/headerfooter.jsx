"use client";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFolder, faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* This is our new header  */}
      <div className="sticky top-0 bg-[#1d212c] tron-border-bottom z-50">
        {" "}
        {/* positioning */}
        <div className="flex flex-row justify-between items-center h-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40">
          <div>
            {/* This is the Header */}
            <Link
              href="https://github.com/cjaysonza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl font-bold hover:text-5xl transition-all duration-200"
              title="To my Github page"
            >
              @cjaysonza
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                ></path>
              </svg>
            </button>
          </div>
          <nav
            className={`${
              isOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row absolute md:relative top-24 left-0 md:top-0 md:left-0 w-full md:w-auto bg-[#1d212c] md:bg-transparent p-4 md:p-0 gap-7 mr-8`}
          >
            <Link
              className="text-lg p-1 hover:bg-blue-500 hover:text-grey-100 rounded flex items-center"
              href="/"
            >
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </Link>
            <Link
              className="text-lg p-1 hover:bg-blue-500 hover:text-grey-100 rounded flex items-center"
              href="/projects"
            >
              <FontAwesomeIcon icon={faFolder} className="mr-2" />
              Projects
            </Link>
            <Link
              className="text-lg p-1 hover:bg-blue-500 hover:text-grey-100 rounded flex items-center"
              href="/contact"
            >
              <FontAwesomeIcon icon={faGlobe} className="mr-2" />
              Contact
            </Link>
          </nav>
        </div>
      </div>
      {/* End of Header and start of the main div */}
    </>
  );
}

export function Footer() {
  return (
    <>
      {/* This is our new Footer  */}
      <div className="bg-[#1d212c] h-16 text-center pt-4 tron-border-top">
        <span className="text-base text-white font-light">&copy; 2026 cjaysonza</span>
      </div>
      {/* End of Footer and start of the main div */}
    </>
  );
}
