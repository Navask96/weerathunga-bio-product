import { Route, Routes } from "react-router-dom";
import Home from './routes/Home.js';
import 'tailwindcss/tailwind.css';
import { RouteNames } from "./constants/RouteNames.js";
import ProductDetails from "./routes/ProductDetails.js";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="bg-lime-200">
      
      <Header />
        <Routes>
          <Route
            path={RouteNames.Home}
            caseSensitive={false}
            element={<Home />}
          />

          <Route
            path={RouteNames.ProdutDetails}
            caseSensitive={false}
            element={<ProductDetails />}
          />

        </Routes> 
        <Footer />

      
    </div>
  );
}

export default App;
