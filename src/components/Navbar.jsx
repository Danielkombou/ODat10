import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/image1.svg";
import { navbarRoutes } from "../constants";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? " backdrop-blur-md bg-white/80" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 sm:py-5 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div>
            <Link to="/">
              <img src={logo} alt="Logo" className="w-20 h-auto" />
            </Link>
          </div>
          <div className="hidden md:flex items-center justify-between md:space-x-4">
            {navbarRoutes.map((route) => {
              const isActive = pathname === route.path;

              return (
                <Link
                  key={route.name}
                  to={route.path}
                  className={`rounded p-2 relative ${
                    isActive &&
                    "before:absolute font-semibold before:left-0 before:bg-orange-500 before:bottom-0 before:h-1 before:w-full"
                  }`}
                >
                  {route.name}
                </Link>
              );
            })}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobile((prev) => !prev)}
              className="focus:outline-none p-2 z-[10000]"
            >
              {isMobile ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6 transition-all duration-300"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6 transition-all duration-300"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}

      <div
        className={`lg:hidden fixed h-screen bg-white w-[70%] -top-5 py-20 transition-all duration-300 ease-in flex flex-col mt-5 items-center ${
          isMobile ? "right-0" : "-right-[70%]"
        }`}
      >
        <div className="flex flex-col gap-10 w-full">
          {navbarRoutes.map((route) => {
            const isActive = pathname === route.path;

            return (
              <Link
                key={route.name}
                to={route.path}
                onClick={() => setIsMobile(false)}
                className={`rounded p-2 relative pl-4 ${
                  isActive &&
                  "before:absolute font-semibold before:top-0 before:bg-orange-500 before:left-0 before:h-full before:w-1 before:rounded-r"
                }`}
              >
                {route.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
