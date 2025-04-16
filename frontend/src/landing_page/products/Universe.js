import React from 'react';

function Universe() {
    return (
        <div classname='container text-center'>
            <div className='row text-center mt-5 p-5'>
                <h1>The Zerodha Universe
                </h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
            <div className='col-lg-4 col-12 p-5 '>
                <a href='#' className='text-decoration-none'>
                <img src="media/images/zerodhaFundhouse.png" style={{width:'40%'}}/>
                <p className='text-muted mt-2'>
Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.</p>
                </a>
                
            </div>
            <div className='col-lg-4 col-12 p-5 '>
            <img src="media/images/sensibullLogo.svg" style={{width:'40%'}}/>
            <p className='text-muted mt-2 '>
Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.</p>
            {/* <img src="media/images/streakLogo.png" className='w-10'/>
            <img src="media/images/smallcaseLogo.png" className='w-10'/>
           <img src="media/images/dittoLogo.png" className='w-10'/> */}
            </div>
            <div className='col-lg-4 col-12 p-5 '> 
            <img src="media/images/tijori.svg" style={{width:'40%'}}/>
            <p className='text-muted mt-2'>
Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.</p>
                </div>
        
        <div className='col-lg-4 col-12 p-5 '>
            <a href='#' className='text-decoration-none'>
            <img src="media/images/streakLogo.png" style={{width:'40%'}}/>
            <p className='text-muted mt-2'>Systematic trading platform
that allows you to create and backtest
strategies without coding.</p>
            </a>
        </div>
        <div className='col-lg-4 col-12 p-5 '>
        <img src="media/images/smallcaseLogo.png" style={{width:'40%'}}/>
        <p className='text-muted mt-2'>

        Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.</p>
        {/* <img src="media/images/.png" className='w-10'/>
        <img src="" className='w-10'/>
       <img src="media/images/.png" className='w-10'/> */}
        </div>
        <div className='col-lg-4 col-12 p-5 '> 
        <img src="media/images/dittoLogo.png" style={{width:'40%'}}/>
        <p className='text-muted mt-2'>

        Personalized advice on life
and health insurance. No spam
and no mis-selling.</p>
            </div>
            </div>

            </div>
            
    


    );
}

export default Universe;