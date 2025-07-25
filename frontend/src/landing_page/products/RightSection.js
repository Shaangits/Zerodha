import React from 'react';

function RightSection({ productName, productDescription, learnMore, imageUrl }) {
  return (
    <div className='container mt-5 p-5'>
      <div className='row align-items-center'>
        <div className='col-md-6 p-5'>
          <h1 className='mb-4 mt-5'>{productName}</h1>
          <p className=''>{productDescription}</p>
          <div>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More <i className="fa-solid fa-long-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className='col-md-6 text-center'>
          <img src={imageUrl} alt={productName} className='img-fluid'  />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
