import React from 'react';

function Pricing() {
  return (
    <div className="container mb-5">
      <div className="row align-items-center">
        {/* Left Text Section */}
        <div className="col-lg-4 col-12 mb-4 mb-lg-0">
          <h1>Unbeatable pricing</h1>
          <p className="mt-3">
            We pioneered the concept of discount broking and price transparency in India.
            Flat fees and no hidden charges.
          </p>
          <a href="#" style={{ textDecoration: 'none' }} className="d-inline-block mt-2">
            See pricing <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* Right Pricing Cards Section */}
        <div className="col-lg-8 col-12">
          <div className="row text-center">
            <div className="col-md-4 col-12 mb-4">
              <img src="media/images/pricingMF.svg" className="img-fluid" alt="Free account" />
              <p className="mt-2" style={{ fontSize: '15px' }}>Free account opening</p>
            </div>
            <div className="col-md-4 col-12 mb-4">
              <img src="media/images/pricingMF.svg" className="img-fluid" alt="Free equity" />
              <p className="mt-2" style={{ fontSize: '15px' }}>
                Free equity delivery<br />and direct mutual funds
              </p>
            </div>
            <div className="col-md-4 col-12 mb-4">
              <img src="media/images/20 rupees.svg" className="img-fluid" alt="Intraday F&O" />
              <p className="mt-2" style={{ fontSize: '15px' }}>
                Intraday and<br />F&O
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
