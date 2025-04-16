import React from 'react';

function RightSection({ imageURL, heading, paragraph, link1, link2, name1, name2 }) {
  return (
    <div className='container mt-5'>
      <div className='row align-items-center'>

        <div className='col-lg-6 col-12 order-2 order-lg-1 text-muted'>
          <h1>{heading}</h1>
          <p>{paragraph}</p>
          <div>
            {link1 && name1 && (
              <a href={link1} style={{ textDecoration: 'none', marginRight: '50px' }}>
                {name1} <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            )}
            {link2 && name2 && (
              <a href={link2} style={{ textDecoration: 'none' }}>
                {name2} <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            )}
          </div>
        </div>

        <div className='col-lg-6 col-12 order-1 order-lg-2 mb-4 mb-lg-0'>
          <img src={imageURL} className="img-fluid" alt={heading} />
        </div>

      </div>
    </div>
  );
}

export default RightSection;
