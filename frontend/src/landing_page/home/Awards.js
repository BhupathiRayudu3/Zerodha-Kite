import React from 'react';

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left side image */}
        <div className="col-lg-6 col-12 mb-4 mb-lg-0 text-center">
          <img src="media/images/largestBroker.svg" className="img-fluid" alt="Largest Broker" />
        </div>

        {/* Right side text */}
        <div className="col-lg-6 col-12 mb-5">
          <h1>Largest stock broker in India</h1>
          <p>
            2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
          </p>

          <div className="row mt-3">
            <div className="col-6">
              <ul>
                <li>Futures & Options</li>
                <li>Commodity Derivatives</li>
                <li>Currency Derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct Mutual Funds</li>
                <li>Bonds & Govt. Securities</li>
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <img src="media/images/pressLogos.png" className="img-fluid" alt="Press Logos" style={{ width: '90%' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
