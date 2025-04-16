import React from 'react';
import Navbar from '../Navbar';

import Footer from '../Footer';
import Hero from '../products/Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function Productpage() {
    return (
        <div>
            <>
           
            <Hero />
            <LeftSection 
            imageURL="media/images/kite.png" heading="Kite" paragraph="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." link1="http://localhost:3001/redirect-to-my-react-app" link2="#" name1="Try demo" name2="Learn More" Googleplay="media/images/googlePlayBadge.svg" Appstore="media/images/appstoreBadge.svg" / >
            <RightSection
            imageURL="media/images/console.png" heading="Console" paragraph="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." link1="#" link2="#" name1="" name2="Learn More" />
            <LeftSection 
            imageURL="media/images/coin.png" heading="Coin" paragraph="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." link1="#" link2="#" name1="Coin" name2="" Googleplay="media/images/googlePlayBadge.svg" Appstore="media/images/appstoreBadge.svg" / >
                <RightSection imageURL="media/images/kiteconnect.png" heading="Kite Connect API
" paragraph="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." link1="#" link2="#" name1="Kite Connect" name2=""/>
                <LeftSection 
            imageURL="media/images/varsity.png" heading="Varsity mobile" paragraph="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." link1="#" link2="#" name1="" name2="" Googleplay="media/images/googlePlayBadge.svg" Appstore="media/images/appstoreBadge.svg" / >

                <div className='row mt-5'>
                <p className="text-center fs-3">Want to know more about our technology stack? Check out the <a href='#' className="text-decoration-none">Zerodha.tech</a> blog.</p>
                </div>
            <Universe />
            <div className='row'>
            <div className="col text-center">
                <button className='btn btn-primary' style={{width:'15%'}}>Sign up for free</button>
            </div>
            </div>
            
            </>
        </div>
    );
}

export default Productpage;