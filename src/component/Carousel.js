import React, { useState, useEffect } from 'react';
import paddy from '../images/paddy.jpg';
import apple from '../images/apple.jpg';
import aloevera from '../images/aloevera.jpg';
import Organic_Tea from '../images/Organic_Tea.jpg';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [paddy, apple, aloevera, Organic_Tea];
  const imageTexts = [
    'Welcome to Weerathunga Bio Products Enterprises, your source for natural goodness.',
    "Indulge in the exquisite flavor of Wood Apple, nature's sweetest gift.",
    'Discover the magic of Dried Banana and the soothing touch of Aloevera, all in one place.',
    'Experience the finest Organic Tea, handpicked for your well-being.',
  ];
  const numImages = images.length;
  const autoChangeInterval = 5000; // Change image every 5 seconds

  const marginTopSmMd = 'mt-4 sm:mt-8 md:mt-8';

  const isSmallScreen = window.innerWidth <= 640; // Adjust the breakpoint as needed
  const marginTop = isSmallScreen ? '10px' : '0';

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numImages);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + numImages) % numImages);
  };

  useEffect(() => {
    // Auto-change images
    const intervalId = setInterval(nextImage, autoChangeInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      id="controls-carousel"
      className={`relative w-full sm:h-100px ${marginTopSmMd}`}
      data-carousel="static"
      style={{ marginTop }}
    >
      {/* Carousel wrapper */}
      <div className="relative h-100hv overflow-hidden rounded-lg min-h-[420px] sm:h-[520px]">
        {images.map((src, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? 'duration-700 ease-in-out opacity-100' : 'opacity-0'
            } transition-opacity`}
            data-carousel-item={index === currentIndex ? 'active' : ''}
          >
            <img
              src={src}
              className="absolute top-0 left-0 block object-cover w-full h-full blur-sm"
              alt={`Image ${index + 1}`}
            />
            <div className="absolute inset-0 flex items-center justify-center w-full mx-auto backdrop-blur-sm">
              <div className={`w-10/12 p-4 mx-auto bg-transparent rounded-lg ${isSmallScreen ? 'text-3xl' : 'text-5xl'}`}>
                <h2 className="w-full font-serif text-center text-black">
                  {imageTexts[index]}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevImage}
      >
        {/* Previous button contents */}
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-green-800/30 group-hover:bg-white/50 dark:group-hover:bg-green-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-green-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextImage}
      >
        {/* Next button contents */}
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-green-800/30 group-hover:bg-white/50 dark:group-hover:bg-green-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-green-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
