import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import '../../index.css';



function Signup() {
    return (
        <div className="container">
            <div className="row text-center mt-5 p-5">
                <h1>Open a free demat & trading account online</h1>
                <p className="text-muted">Start investing brokerage free and join a community of 1.5+ crore investors and traders</p>

            </div>
            <div className='row'>
                <div className='col-6 mt-2 p-5'>
                    <img src="media/images/signup.png" style={{width:"600px"}}/>
                </div>
                <div className='col-6 mt-4 p-5'>
                    <h3>Sign up Now</h3>
                    <p className="text-muted">Or track our existing application</p>
                    <div class="phone-input">
                    <span>+91</span>
                    <input type="tel" placeholder="Enter mobile number" maxlength="10" pattern="[0-9]{10}" required/>
                    </div>
  
                    <p className="text-muted mt-3" style={{fontSize:'12px'}}>You will receive an OTP on your number</p>
                    <button className="btn btn-primary mt-3">Continue</button>
                    <a href='#' className="text-decoration-none">
                        <p className="mt-3">Want to open an NRI account</p>
                    </a>
                </div>
            </div>

        <div className='row text-center p-2 mt-3 text-muted'>
            <p>By submitting your contact details, you authonze Zerodha to contact you even if you are registered on DND & conduct online KYC for trading & demat account r and PMLA guidelines. To learn about the detalls we collect when you sign up with Zerodha, visit our support article</p>
            <p>if you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the offline forms. For help, click here</p>
        </div>
            
        </div>
    );
}

export default Signup;
