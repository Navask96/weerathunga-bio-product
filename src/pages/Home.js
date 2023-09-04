import Header from '../component/Header';
import Carousel from '../component/Carousel';
import ProductDescription from '../component/ProductDescription';
import AboutUs from '../component/AboutUs';
import ContactUs from '../component/ContactUs';
import Footer from '../component/Footer';

function Home() {
  return (
    <div className='bg-lime-200'>
    <Header />
    <div className="px-10 bg-lime-200">
     
      <Carousel />
      <div className='mt-2.5 mb-2.5'> 
        <ProductDescription/> 
        </div>
      <AboutUs />
      <div className='mb-5 shadow-lg'>
      <ContactUs />
      </div>
     </div>
     
      <Footer />
     
    
    </div>
  );
}

export default Home;
