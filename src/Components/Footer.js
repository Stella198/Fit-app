import React from 'react';
import './Footer.css';
function Footer() {
    return (  
        <div className="footer">
            <span className='footer-copy'>
                <p className='copy'> &copy; FIT STUDIO {new Date().getFullYear()}</p>  
            </span>
            <span >
            <span className='footer-info'>
              <a className='link-info' href=" /home"> More Info</a> </span>
            <br />
            <span className='footer-about'>
              <a className='link-info' href="/home">About us </a>
              </span>
            <br />
            <span  className='footer-contact'>
                <a className='link-info' href="/home">Contact us</a> </span>
          </span>
        </div>
    );
}

export default Footer
