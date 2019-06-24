import React from 'react';

import subwayLogo from '../Assets/general/subway-icon.png';
import cleanslateLogo from '../Assets/general/cleanslate-logo.png';
import intellinetLogo from '../Assets/general/intellinet-logo.png';
import ptcLogo from '../Assets/general/ptc-logo.png';

import { Link } from 'react-router-dom';

import './ProjectsComponent.css';

const ProjectsComponent = ({ theme }) => {
  return (
    <div
      id="projects"
      className={`projects-image-container ${
        theme === 'water' ? 'projects-image-water' : ''
      }`}
    >
      <div className="projects-image-overlay" />
      <div className="section-wrapper projects-section">
        <div className="project-container">
          <Link to="/subway">
            <img src={subwayLogo} alt="subway" />
          </Link>
        </div>
        <div className="project-container">
          <Link to="/cleanslate">
            <img src={cleanslateLogo} alt="cleanslate" />
          </Link>
        </div>
        <div className="project-container">
          <Link to="/intellinet">
            <img src={intellinetLogo} alt="intellinet" />
          </Link>
        </div>
        <div className="project-container">
          <Link to="/ptc">
            <img src={ptcLogo} alt="ptc" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponent;
