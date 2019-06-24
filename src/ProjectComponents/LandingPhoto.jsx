import React from 'react';
import './LandingPhoto.css';

const LandingPhoto = ({ theme, projectInformation }) => {
  return (
    <div
      className={`landing-image-container ${
        theme === 'water' ? 'landing-image-water' : ''
      }`}
    >
      <div className="landing-image-overlay" />
      <div className="landing-image-text">
        <h1>
          {projectInformation.client && projectInformation.client.toUpperCase()}
        </h1>
        <h3 className="landing-image-subtext">
          {projectInformation && projectInformation.project}
        </h3>
      </div>
    </div>
  );
};

export default LandingPhoto;
