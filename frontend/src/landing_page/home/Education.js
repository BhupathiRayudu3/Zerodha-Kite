import React from 'react';

function Education() {
  return (
    <div className="container mt-5 p-5">
      <div className="row align-items-center">
        {/* Left side: Image */}
        <div className="col-lg-6 col-12 mb-4 mb-lg-0 text-center">
          <img src="media/images/education.svg" alt="Education" className="img-fluid" style={{ width: '70%' }} />
        </div>

        {/* Right side: Text content */}
        <div className="col-lg-6 col-12">
          <h1>Free and open market education</h1>

          <p className="mt-4">
            Varsity, the largest online stock market education book in the world, covers everything from the basics to advanced trading.
          </p>
          <a href="#" style={{ textDecoration: 'none' }}>
            Varsity <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </a>

          <p className="mt-4">
            TradingQ&A, the most active trading and investment community in India, is the go-to place for all your market-related queries.
          </p>
          <a href="#" style={{ textDecoration: 'none' }}>
            TradingQ&A <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
