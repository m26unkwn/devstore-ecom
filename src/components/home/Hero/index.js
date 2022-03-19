import React from "react";

const Hero = () => {
  return (
    <section className='hero-section'>
      <div className='hero'></div>
      <div className='hero-text flex flex-col jc-center ai-center'>
        <h1>All dev product at one place.</h1>
        <h1>Buy Anything with ease.</h1>
        <a href='./screens/product.html' className='btn link-btn'>
          SHOP NOW
        </a>
      </div>
    </section>
  );
};

export default Hero;
