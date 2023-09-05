// ProductCard.js
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { RouteNames } from '../constants/RouteNames';

const ProductCard = ({ id, image, title, description }) => {
  const[hover, setHover]=useState(false)
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg shadow-xl dark:bg-lime-400 dark:border-lime-400"
    onMouseEnter={()=>{setHover(true)}}
    onMouseLeave={()=>{setHover(false)}}
    >
      <div>
        <div className="relative overflow-hidden rounded-t-lg" style={{ height: '200px' }}>
          <img
            className={`absolute top-0 left-0 object-cover w-full h-full ${hover && `scale-[1.05] overflow-hidden duration-300 ease-in-out`}`}
            src={image}
            alt=""
          />
        </div>
      </div>
      <div className="p-5">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-grey-900">
            {title}
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">
          {description}
        </p>
        <Link
         to={RouteNames.ProdutDetails.replace(":id",id)}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none hover:scale-[1.05] duration-300 ease-in-out focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-600"
        >
          Read more
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
