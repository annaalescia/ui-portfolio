import React from 'react';
import TypingComponent from './TypingComponent';
import './MainPhoto.css';

const MainPhoto = ({ theme }) => {
  return (
    <div
      className={`main-image-container ${
        theme === 'water' ? 'main-image-water' : ''
      }`}
    >
      <div className="main-image-overlay" />
      <div className="main-image-text">
        <TypingComponent />
        <h1>ANNA MCBEATH</h1>
      </div>
    </div>
  );
};

export default MainPhoto;
