import React, { useEffect, useState } from 'react';
import roLaptop from '../Assets/projects/ROLaptop.png';
import cleanslateLaptop from '../Assets/projects/cleanslateLaptop.png';
import ptcLaptop from '../Assets/projects/ptcLaptop.png';
import checkinLaptop from '../Assets/projects/checkinLaptop.png';
import { withRouter } from 'react-router-dom';
import { projectData } from '../data';
import './ProjectPage.css';
import LandingPhoto from './LandingPhoto';

const ProjectPage = ({ theme, match, history }) => {
  const [projectInformation, setProjectInformation] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    const projectName = match.params.id;
    const projectInformation = projectData.find(
      project => projectName === project.client
    );
    setProjectInformation(projectInformation);
  }, [match.params.id]);

  const switchPhoto = client => {
    switch (client) {
      case 'subway':
        return <img src={roLaptop} alt="subway-website" />;
      case 'cleanslate':
        return <img src={cleanslateLaptop} alt="cleanslate-website" />;
      case 'intellinet':
        return <img src={checkinLaptop} alt="intellinet-website" />;
      case 'ptc':
        return <img src={ptcLaptop} alt="ptc-website" />;
      default:
        break;
    }
  };

  const navigateNext = () => {
    const currentId = projectInformation.projectOrder;
    const nextProject = projectData.find(
      project => project.projectOrder === currentId + 1
    );
    history.push(`/${nextProject.client}`);
  };

  const navigatePrev = () => {
    const currentId = projectInformation.projectOrder;
    const prevProject = projectData.find(
      project => project.projectOrder === currentId - 1
    );
    history.push(`/${prevProject.client}`);
  };

  return (
    <div
      className={`landing-content-wrapper ${
        theme === 'water' ? 'landing-content-water' : ''
      }`}
    >
      <LandingPhoto projectInformation={projectInformation} theme={theme} />
      <article className="project-content-wrapper">
        <div className="project-image-container">
          {projectInformation && switchPhoto(projectInformation.client)}
          <div>
            <ul className="project-skills-list">
              {projectInformation.skills &&
                projectInformation.skills.map(skill => (
                  <li className="project-skill" key={skill}>
                    {skill}
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="project-information">
          <h2>Description</h2>
          <div className="header-underline" />
          <p>{projectInformation.description}</p>
          <h2>Technical Challenges</h2>
          <div className="header-underline" />
          <p>{projectInformation.challenges}</p>
          {projectInformation.projectOrder !== 1 && (
            <button className="primary-btn prev-btn" onClick={navigatePrev}>
              Previous
            </button>
          )}

          {projectInformation.projectOrder !== projectData.length && (
            <button className="primary-btn next-btn" onClick={navigateNext}>
              Next
            </button>
          )}
        </div>
      </article>
    </div>
  );
};

export default withRouter(ProjectPage);
