import React from 'react';
import header from '../../assets/svgs/home/bg-pattern-header.svg';
import logo from '../../assets/svgs/shared/logo.svg';
import charts from '../../assets/svgs/home/illustration-charts.svg';
import { home } from '../../assets/styles';

const Landing = () => {
  return (
    <>
    <div className={home.box}>

      <div className={home.circles}>
        <img 
          src={header} 
          alt="circles" 
        />
      </div>

      <div className={home.logo}>
        <img 
          src={logo} 
          alt="Officelite Logo" 
        />
      </div>
    </div>

    <div className={home.chart}>
        <img src={charts} alt="Illustration of Charts" />
      </div>
    </>
  )
};

export default Landing;