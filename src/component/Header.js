import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../images/Logo_3-removebg.png";
import { RouteNames } from "../constants/RouteNames";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control the mobile menu

  const location = useLocation();

  // Add a scroll event listener to toggle the "isScrolled" state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`bg-gray-900 rounded-bl rounded-br border-spacing-2 border-gray-700 fixed top-0 left-0 right-0 shadow-lg z-50`}
    >
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <p className="flex items-center">
          <img src={logo} className="h-8 mr-3" alt="Weerathunga Logo" />
          <span className="self-center text-2xl font-semibold text-white cursor-pointer whitespace-nowrap">
            Weerathunga Bio Products
          </span>
        </p>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-bl rounded-br md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto mt-2 md:mt-0`} // Adjust the top margin for mobile menu
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 font-medium md:p-0 md:flex-row md:space-x-8">
            <li>
              <Link
                to={RouteNames.Home}
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            {location.pathname === RouteNames.Home ? (
              <>
                <li>
                  <AnchorLink
                    href={`#${RouteNames.AboutUs}`}
                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700"
                  >
                    About Us
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink
                    href={`#${RouteNames.Products}`}
                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700"
                  >
                    Products
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink
                    href={`#${RouteNames.ContactUs}`}
                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700"
                  >
                    Contact
                  </AnchorLink>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
