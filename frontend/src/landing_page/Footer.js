import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: 'rgb(240,240,240)' }} className="mt-5">
      <div className="container border-top py-5">
        <div className="row">
          {/* Logo + Social */}
          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <img src="media/images/logo.svg" alt="Zerodha Logo" style={{ width: '50%' }} />
            <p className="mt-3 text-muted">
              &copy; 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
            </p>

            <div className='icons1'>
                        <a href='#' aria-label="About Us Page"style={{color:'inherit'}}> <i class="fa fa-twitter" aria-hidden="true" style={{fontSize:'20px'}}></i></a>
                   <a href='#' aria-label="About Us Page"style={{color:'inherit'}}><i class="fa fa-facebook-square" aria-hidden="true" style={{fontSize:'20px'}}></i></a>
                   <a href='#' aria-label="About Us Page"style={{color:'inherit'}}> <i class="fa fa-instagram" aria-hidden="true" style={{fontSize:'20px'}}></i></a>
                   <a href='#' aria-label="About Us Page"style={{color:'inherit'}}><i class="fa fa-linkedin" aria-hidden="true" style={{fontSize:'20px'}}></i></a>
                    </div>
                    <div className='icons2'>
                    <a href='#' aria-label="About Us Page" style={{color:'inherit'}}><i class="fa fa-youtube-play" aria-hidden="true" style={{fontSize:'20px'}}></i> </a>
                    <a href='#' aria-label="About Us Page" style={{color:'inherit'}}><i class="fa fa-whatsapp" aria-hidden="true" style={{fontSize:'20px'}}></i></a>
                    <a href='#' aria-label="About Us Page" style={{color:'inherit'}}><i class="fa fa-telegram" aria-hidden="true" style={{fontSize:'20px'}}></i></a>
                    </div>
          </div>

          {/* Company Links */}
          <div className="col-lg-3 col-md-6 col-12 mb-4 text-muted">
            <p className="fw-bold fs-5">Company</p>
            {[
              "About", "Products", "Pricing", "Referral programme", "Careers",
              "Zerodha.tech", "Open source", "Press & media", "Zerodha Cares (CSR)"
            ].map((item, idx) => (
              <a key={idx} href="#" className="d-block text-decoration-none text-muted">{item}</a>
            ))}
          </div>

          {/* Support Links */}
          <div className="col-lg-3 col-md-6 col-12 mb-4 text-muted">
            <p className="fw-bold fs-5">Support</p>
            {[
              "Contact us", "Support portal", "Z-Connect blog", "List of charges",
              "Downloads & resources", "Videos", "Market overview",
              "How to file a complaint", "Status of your complaints"
            ].map((item, idx) => (
              <a key={idx} href="#" className="d-block text-decoration-none text-muted">{item}</a>
            ))}
          </div>

          {/* Account Links */}
          <div className="col-lg-3 col-md-6 col-12 mb-4 text-muted">
            <p className="fw-bold fs-5">Account</p>
            <a href="#" className="d-block text-decoration-none text-muted">Open an account</a>
            <a href="#" className="d-block text-decoration-none text-muted">Fund transfer</a>
          </div>
        </div>

        {/* Regulatory Text */}
        <div className='mt-5 text-muted' style={{fontSize:'11px'}}>
            <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href='#'className="text-decoration-none">complaints@zerodha.com</a>, for DP related to <a href='#'className="text-decoration-none">dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
            <p>
            Procedure to file a complaint on <a href='#'className="text-decoration-none">SEBI SCORES:</a> Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
            </p>
            <a href='#'className="text-decoration-none">Smart Online Dispute Resolution | <a href='#'className="text-decoration-none">Grievances Redressal Mechanism</a></a>
            <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
            <p>
            Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
            </p>
            <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href='#' className="text-decoration-none"> create a ticket here.</a></p>

        {/* Footer Links */}
        <div className="footer-link mt-3 d-flex flex-wrap gap-3 text-muted">
          {[
            "NSE", "BSE", "MCX", "Terms & conditions", "Policies & procedures",
            "Privacy policy", "Disclosure", "For investor's attention", "Investor charter"
          ].map((item, idx) => (
            <a key={idx} href="#" className="text-decoration-none text-muted">{item}</a>
          ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
