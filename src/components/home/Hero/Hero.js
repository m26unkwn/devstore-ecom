import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className='hero-section'>
      <div className='hero'></div>
      <div className='hero-text flex flex-col jc-center ai-center'>
        <h1>All dev product at one place.</h1>
        <h1>Buy Anything with ease.</h1>
        <Link to='/products' className='btn link-btn'>
          SHOP WITH US
        </Link>
      </div>
    </section>
  );
};

export default Hero;
