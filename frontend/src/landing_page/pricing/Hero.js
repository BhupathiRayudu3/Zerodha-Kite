import React from 'react';

function Hero() {
    return (
        <div className='container'>
            <div className='row text-center mt-4 p-5 border-bottom'>
                <h1>Pricing</h1>
                <p className='mt-1'>Free equity investments and flat ₹20 traday and F&O trades</p>
                </div>
                <div className='row mt-2'>
                <div className='col-lg-4 col-12 text-muted mt-5 p-5'>
                    <img src="media/images/pricing0.svg"/>
                    <h1 className='fs-3'>Free equity delivery</h1>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-lg-4 col-12 text-muted mt-5 p-5'>
                <img src="media/images/20 rupees.svg"/>
                    <h1 className='fs-3'>Intraday and F&O trades</h1>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-lg-4 col-12 text-muted mt-5 p-5'>
                <img src="media/images/pricing0.svg"/>
                    <h1 className='fs-3'>Free direct MF</h1>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;