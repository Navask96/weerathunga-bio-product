import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../images/Logo_3-removebg.png";
import { RouteNames } from "../constants/RouteNames";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
  return (
    <nav
      className={`bg-whiten rouded-bl rounded-br border-spacing-2 border-gray-200 dark:bg-gray-900 ${
        isScrolled
          ? "fixed top-0 left-0 right-0 shadow-lg z-50 bg-opacity-100"
          : "rounded-br rounded-bl"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <p className="flex items-center">
          <img src={logo} className="h-8 mr-3" alt="Weerathunga Logo" />
          <span className="self-center text-2xl font-semibold cursor-pointer whitespace-nowrap dark:text-white">
            Weerathunga Bio Products
          </span>
        </p>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-bl rounded-br md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
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
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to={RouteNames.Home}
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About Us
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink
                    href={`#${RouteNames.Products}`}
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Products
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink
                    href={`#${RouteNames.ContactUs}`}
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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
