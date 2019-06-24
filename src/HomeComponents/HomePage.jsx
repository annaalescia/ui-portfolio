import React from 'react';

import MainPhoto from './MainPhoto';
import AboutComponent from './AboutComponent';
import ProjectsComponent from './ProjectsComponent';
import SkillsComponent from './SkillsComponent';

const HomePage = ({ theme }) => {
  return (
    <div className="home-page-wrapper">
      <MainPhoto theme={theme} />
      <AboutComponent theme={theme} />
      <ProjectsComponent theme={theme} />
      <SkillsComponent theme={theme} />
    </div>
  );
};

export default HomePage;
