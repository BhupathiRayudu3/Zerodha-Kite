import React from 'react';

function Hero() {
    return (
        <div className="container border-bottom mb-5">
            <div className='row text-center mt-5 text-muted p-3'>
                <h1>Zerodha Products</h1>
                <h3 className='mt-3 fs-4 text-muted'>Sleek, modern, and intuitive trading platforms</h3>
                <p className='mt-3 mb-5'>Check out our <a href='#' style={{textDecoration:'None'}}>investment offerings <i class="fa fa-arrow-right" aria-hidden="true"></i></a></p>

            </div>
        </div>

    );
}

export default Hero;