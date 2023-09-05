import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productDetails } from "../constants/productDetails";
import Header from "../component/Header";
import Footer from "../component/Footer";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    setProduct(productDetails[id - 1]);
  }, []);
  return (
    <div className="min-h-[65vh] bg-lime-200">
      <div className="container p-10 mx-auto ">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="md:order-2">
            <img
              src={product?.image}
              alt="Product"
              className="w-full h-auto mx-auto rounded-lg md:w-2/3 hover:scale-[1.05] duration-300 ease-in-out"
            />
          </div>
          <div className="md:order-1">
            <h2 className="mb-4 text-2xl font-bold">{product?.title}</h2>
            <p className="text-gray-600">{product?.detail_description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
