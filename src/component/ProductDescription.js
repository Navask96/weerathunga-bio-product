import React from 'react';
import ProductCard from './ProductCard';
import { productDetails } from '../constants/productDetails';
import { RouteNames } from '../constants/RouteNames';

const ProductDescription = () => {
  return (
    <div className="flex justify-center w-full my-10" id={RouteNames.Products}>
      <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-4">
        {productDetails?.map((data, index) => (
          <ProductCard {...data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductDescription;

