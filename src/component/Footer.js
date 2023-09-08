import React, {useEffect, useState}from 'react';
import logo from '../images/Logo_3-removebg.png';
import { RouteNames } from '../constants/RouteNames';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link, useLocation } from "react-router-dom";


const Footer = () => {
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
    <footer className="bg-white rounded dark:bg-gray-900">
      <div className="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href=" " className="flex items-center">
              <img
                src={logo}
                className="h-8 mr-3"
                alt="Weerathunga Bio Products"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Weerathunga Bio Products
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/* Resources */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Services
              </h2>
              {location.pathname === RouteNames.Home ? (<>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <AnchorLink href={`#${RouteNames.Products}`} className="hover:underline">
                    Products
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink
                    href={`#${RouteNames.AboutUs}`}
                    className="hover:underline"
                  >
                    About Us
                  </AnchorLink>
                </li>
              </ul>
              </>): (
              <></>
            )}
            </div>
            {/* Follow us */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://www.facebook.com"
                    className="hover:underline "
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com"
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            {/* Legal */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 <a href="#" className="hover:underline">
              Weerathunga Bio Products Enterprises™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            {/* Social Icons */}
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                {/* Facebook Icon Path */}
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
           
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
