import React from 'react';

function Stats() {
  return (
    <div className="container py-5">
      <div className="row align-items-center py-5">
        {/* Left Column: Text Content */}
        <div className="col-lg-6 col-12 mb-5 mb-lg-0 px-lg-5">
          <h1 className="fs-1">Trust with confidence</h1>

          <h2 className="fs-4 mt-5">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
          </p>

          <h2 className="fs-4 mt-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="fs-4 mt-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-4 mt-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like <a href="#" style={{ textDecoration: 'none' }}>Nudge</a> and <a href="#" style={{ textDecoration: 'none' }}>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.
          </p>
        </div>

        {/* Right Column: Image & Links */}
        <div className="col-lg-6 col-12 px-lg-5">
          <img
            src="media/images/ecosystem.png"
            alt="Zerodha Ecosystem"
            className="img-fluid mb-4"
          />

          <div className="text-center">
            <a href="#" className="d-inline-block mx-3" style={{ textDecoration: 'none' }}>
              Explore our products <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="#" className="d-inline-block mx-3" style={{ textDecoration: 'none' }}>
              Try Kite demo <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
