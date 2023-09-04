// ProductDescription.js
import React from 'react';
import ProductCard from './ProductCard'; // Import the reusable component
import aloevera from '../images/aloevera.jpg';
import apple from '../images/apple.jpg';
import driedbanana from '../images/driedbanana.jpg';
import organic_tea from '../images/Organic_Tea.jpg';

const dummyData = [
    {
      image: aloevera,
      title: 'Pure Aloevera Gel',
      description: 'Experience the healing power of pure Aloevera gel, packed with natural nutrients for your skin and health.',
    },
    {
      image: apple,
      title: 'Sweet Wood Apple Delight',
      description: 'Savor the unique sweetness and tropical goodness of our wood apple, a delightful tropical fruit from nature’s bounty.',
    },
    {
      image: driedbanana,
      title: 'Sun-Dried Bananas',
      description: 'Enjoy the naturally sweet and chewy goodness of our sun-dried bananas, a healthy snack for all ages.',
    },
    {
      image: organic_tea,
      title: 'Organic Tea Collection',
      description: 'Explore our exquisite collection of organic teas, handpicked for their exceptional flavor and health benefits.',
    },
    // Add more dummy data objects here for additional cards


];

const ProductDescription = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap -mx-4">
        {dummyData.map((data, index) => (
          <div key={index} className="w-full p-4 sm:w-1/2 md:w-1/2 lg:w-1/4">
            <ProductCard {...data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDescription;
