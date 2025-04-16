import React from 'react';

function Team() {
  return (
    <div className="container my-5">
      {/* Section Title */}
      <div className="row text-center text-muted mb-5">
        <div className="col">
          <h1 className="fw-bold">People</h1>
        </div>
      </div>

      {/* Profile Row */}
      <div className="row align-items-center">
        {/* Left: Image + Name + Title */}
        <div className="col-lg-6 col-12 text-center mb-4">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="img-fluid rounded-circle"
            style={{ width: '250px' }}
          />
          <p className="fs-4 mt-3 mb-1">Nithin Kamath</p>
          <p className="text-muted">Founder, CEO</p>
        </div>

        {/* Right: Description */}
        <div className="col-lg-6 col-12 text-muted">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade-long stint as a trader.
            Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{' '}
            <a href="#" className="text-decoration-none">Homepage</a> /{' '}
            <a href="#" className="text-decoration-none">TradingQnA</a> /{' '}
            <a href="#" className="text-decoration-none">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
