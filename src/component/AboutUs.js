import React from 'react';
import green from '../images/green_sceen.jpg';
import { RouteNames } from '../constants/RouteNames';

const AboutUs = () => {
  return (
    <section className="py-16 rounded-md bg-lime-200" id={RouteNames.AboutUs} >
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center md:flex-row">
          <div className="text-black md:w-1/2 md:text-black">
            <h2 className="mb-6 text-4xl font-semibold text-center md:text-left">About Us</h2>
            <p className="text-lg leading-loose text-justify">
              WEERATHUNGA BIO PRODUCTS has been serving Sri Lanka since 2022. Founded by Mr. Nalin Weerathunga, WEERATHUNGA BIO PRODUCTS provides the best services to improve everyone's health and feel their Healthy Life. Our staff of nine employers is here to support your choice and unlock your true ambition.
              We've been featured in numerous buyers including England, USA, Australia, and looking for other countries also. Our employers have appeared in different areas. Our products are used for medical purposes and daily needs.
              Call or email us to book an appointment today.
            </p>
            <p className="mt-4 text-lg leading-loose text-justify">
              We take pride in our diverse range of farm-fresh products, from succulent fruits and vegetables to wholesome grains and dairy. Our team of dedicated farmers and experts work tirelessly to ensure that every product that leaves our farm is of the highest quality, nurtured with care, and cultivated with love.
            </p>
          </div>
          <div className="mt-6 text-center md:w-1/2 md:mt-0">
            <img src={green} alt="Farm Image" className="mx-auto border-4 border-white rounded-full w-80 h-80" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
