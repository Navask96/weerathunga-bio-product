// ProductDescription.js
import React from 'react';
import ProductCard from './ProductCard'; // Import the reusable component
import {productDetails} from '../constants/productDetails'
import { RouteNames } from '../constants/RouteNames';

const ProductDescription = () => {
  return (
    <div className="flex justify-center w-full my-10" id={RouteNames.Products}>
      <div className="grid grid-cols-3 gap-y-[40px] gap-x-[100px]">
        {productDetails?.map((data, index) => (
            <ProductCard {...data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductDescription;
