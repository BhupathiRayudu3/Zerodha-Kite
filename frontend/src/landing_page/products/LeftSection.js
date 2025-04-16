import React from 'react';

function LeftSection({ imageURL, heading, paragraph, link1, link2, name1, name2, Googleplay, Appstore }) {
  return (
    <div className='container mt-5'>
      <div className='row align-items-center'>
        <div className='col-lg-6 col-12 mb-4 mb-lg-0'>
          <img src={imageURL} className="img-fluid" alt={heading} />
        </div>

        <div className='col-lg-6 col-12 text-muted'>
          <h1>{heading}</h1>
          <p className='mt-4'>{paragraph}</p>

          <div className="mt-4">
  {/* Render first link if name1 is provided */}
  {name1 && link1 && (
    <a href={link1} style={{ textDecoration: 'none', marginRight: '50px' }}>
      {name1} <i className="fa fa-arrow-right" aria-hidden="true"></i>
    </a>
  )}

  {/* Render second link ONLY if name2 is NOT an empty string */}
  {name2 && link2 && (
    <a href={link2} style={{ textDecoration: 'none' }}>
      {name2} <i className="fa fa-arrow-right" aria-hidden="true"></i>
    </a>
  )}
</div>


          <div className="mt-4">
            {Googleplay && (
              <a href="#">
                <img src={Googleplay} alt="Google Play" className="img-fluid" style={{ width: '160px' }} />
              </a>
            )}
            {Appstore && (
              <a href="#" style={{ marginLeft: "20px" }}>
                <img src={Appstore} alt="App Store" className="img-fluid" style={{ width: '150px' }} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
