import React from 'react';

function Hero() {
  return (
    <div style={{ backgroundColor: 'rgb(56, 126, 209)' }}>
      <div className='container mb-5'>

        {/* 🔹 Top row: support + track in same div */}
        <div className='d-flex justify-content-between'>
          <a href='#' className='text-decoration-none text-white fs-5 mt-5 '>
            Support Portal
          </a>
          <a href='#' className='text-decoration-none border-bottom pb-1 text-white fs-5 mt-5'>
            Track tickets
          </a>
        </div>

        <div className='row'>
          <div className='col-lg-6 col-12 mt-4' style={{ marginBottom: '5%' }}>
            <h1 className='text-white fs-3'>
              Search for an answer or browse help topics to create a ticket
            </h1>
            <input
              className='form-control mt-3'
              placeholder='Eg. how do I activate F&O, why is my order getting rejected ...'
            />
            <div className='d-flex flex-wrap gap-3 mt-4 mb-5'>
              <a href="#" className='text-white text-decoration-none border-bottom fs-5'>Track account opening</a>
              <a href="#" className='text-white text-decoration-none border-bottom fs-5'>Track segment activation</a>
              <a href="#" className='text-white text-decoration-none border-bottom fs-5'>Intraday margins</a>
              <a href="#" className='text-white text-decoration-none border-bottom fs-5'>Kite user manual</a>
            </div>
          </div>

          <div className='col-lg-6 col-12 text-white p-4 mt-5'>
            <h1 className='fs-4'>Featured</h1>
            <ol>
              <li>
                <a href='#' className="text-white">
                  Exclusion of F&O contracts on 5 securities from May 27, 2025
                </a>
              </li>
              <li className='mt-4'>
                <a href='#' className="text-white">
                  Rights Entitlements listing in March 2025
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
