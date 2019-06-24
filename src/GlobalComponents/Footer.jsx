import React from 'react';
import './Footer.css';

const Footer = ({ theme }) => {
  return (
    <footer
      className={`footer-wrapper ${theme === 'water' ? 'footer-water' : ''}`}
    >
      IDK WHAT TO PUT HERE GAHHHH
    </footer>
  );
};

export default Footer;
