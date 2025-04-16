import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import AboutPage from './landing_page/about/AboutPage';
import Productpage from './landing_page/products/Productpage';
import Pricingpage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/products" element={<Productpage/>} />
        <Route path="/pricing" element={<Pricingpage/>} />
        <Route path="/support" element={<SupportPage/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
    
  </React.StrictMode>
);

/* <Route path='*' element={<filename/>}/> here * is used for all remaing all remaining improper routes
ex:localhost:3000/dbssdcadjs  ex:localhost:3000/dedjn like these  */
// BrowserRouter is useful for wrapping all the routes in our web application
// we can write all our routes under Routes tag
// Route is a self closing tag
// import {Link} from 'react-router-dom' used for making links instead of using anchor tags
// syntax <Link className="some class name" to='/namewhich need to redirect'></Link>