import React from 'react';
import green from '../images/green_sceen.jpg'

const AboutUs = () => {
  return (
    <section className="py-16 rounded-md bg-lime-200">
      <div className="container mx-auto">
        <div className="flex flex-col items-center md:flex-row">
          <div className="text-white md:w-1/2 md:text-black">
            <h2 className="mb-6 text-4xl font-semibold">About Us</h2>
            <p className="text-lg leading-loose">
            WEERATHUNGA BIO PRODUCTS has been serving the Sri Lanka since 2022. Founded by Mr. Nalin Weerathunga, WEERATHUNGA BIO PRODUCTS provides best services to improve everyone's health and feel their Healthy Life. Our staff of nine employers is here to support your choice and unlock your thrue ambition. 
We've been featured in numerous buyers including England, USA, Australia and Looking for another contries also. Our employers have appeared on defferent areas. Our products have using medical purposes and for daily needs. 
Call or email us to book an appointment today
            </p>
            <p className="mt-4 text-lg leading-loose">
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
