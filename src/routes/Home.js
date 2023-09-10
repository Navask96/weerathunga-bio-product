
import Carousel from "../component/Carousel";
import ProductDescription from "../component/ProductDescription";
import AboutUs from "../component/AboutUs";
import ContactUs from "../component/ContactUs";
import { Route, Routes } from "react-router-dom";
import { RouteNames } from "../constants/RouteNames";


function Home() {
  return (
    <div className="min-h-screen bg-lime-200">
      
      <div className="relative w-full sm:h-100px h-80px md:h-120px lg:h-150px xl:h-200px" id={RouteNames.Home}>
        <Carousel />
        <div className="mt-2.5 mb-2.5">
          <ProductDescription />
        </div>
        <AboutUs />
        <div className="mb-5 shadow-lg">
          <ContactUs />
        </div>
      </div>

      
    </div>
  );
}

export default Home;
