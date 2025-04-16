import React from 'react';

function Hero() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center text-center">
        <div className="col-lg-10 col-12">
          <img
            src="media/images/homeHero.png"
            alt="Hero"
            className="img-fluid"
            style={{ width: '80%' }}
          />

          <h1 className="mt-5">Invest in everything</h1>

          <p className="fs-5">
            Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
          </p>

          <button
            className="btn btn-primary px-4 py-2 fs-5 mt-3"
            style={{ maxWidth: '250px', width: '100%' }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
