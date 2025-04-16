import React from 'react';

function Brokerage() {
    return (
        <div className='container'>
            <div className='row border-top p-5'>
                <div className='col-lg-8 col-12 mt-4 p-5 '>
                    <a href='#' className='text-decoration-none text-center'>
                 <h1 className='fs-4'>Brokerage Caluculator</h1></a> 
                 <ul className='mt-5 text-muted'>
                    <li className='mt-2'>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</li>
                    <li className='mt-2'>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</li>
                    <li className='mt-2'>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</li>
                    <li className='mt-2'>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</li>
                    <li className='mt-2'>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    <li className='mt-2'>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                 </ul>
                </div>
                <div className='col-lg-4 col-12 mt-4 p-5'>
                <a href='#' className='text-decoration-none text-center'>
                <h1 className='fs-4'>List of Charges</h1></a>
                </div>
                </div>
                </div>
               
                
           
       

    );
}

export default Brokerage;