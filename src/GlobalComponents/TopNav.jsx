import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import './TopNav.css';

const TopNav = ({ handleThemeChange, match, theme }) => {
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    const isHome = match.isExact;
    setIsHome(isHome);
  }, [match.isExact]);

  return (
    <nav className="top-nav-container">
      <ul className="nav-links">
        {isHome && (
          <React.Fragment>
            <li className="nav-links-container">
              <a className="nav-link" href="#about">
                About Me
              </a>
            </li>
            <li className="nav-links-container">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-links-container">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
          </React.Fragment>
        )}
        {!isHome && (
          <React.Fragment>
            <li className="nav-links-container" />
            <li className="nav-links-container" />
            <li className="nav-links-container">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
          </React.Fragment>
        )}
        <li className="nav-links-container">
          <button className="nav-button" onClick={handleThemeChange}>
            {theme === 'water' ? 'Forest Theme' : 'Water Theme'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(TopNav);
