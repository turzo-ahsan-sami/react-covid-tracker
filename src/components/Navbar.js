import React from 'react';
import logo from '../images/deaths-large.png';
const Navbar = () => {
  return (
    <div className='navbar sticky-top bg-white border-bottom'>
      <div className='container'>
        <div className='d-flex align-items-center'>
          <img className='logo' src={logo} style={{ width: '55px' }} alt='logo' />
          <h5 className='mb-0 font-weight-bold'>
            SARS-CoV-2 <br />
            <small className='text-muted font-weight-light'>Corona Virus</small>
          </h5>
        </div>        
      </div>
    </div>
  );
};

export default Navbar;
