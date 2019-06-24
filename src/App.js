import React, { Component } from 'react';
import HomePage from './HomeComponents/HomePage';
import ProjectPage from './ProjectComponents/ProjectPage';
import TopNav from './GlobalComponents/TopNav';
import Footer from './GlobalComponents/Footer';
import { Switch, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  state = {
    theme: 'forest'
  };

  handleThemeChange = () => {
    const { theme } = this.state;
    if (theme === 'forest') {
      this.setState({ theme: 'water' });
    } else {
      this.setState({ theme: 'forest' });
    }
  };

  render() {
    const { theme } = this.state;
    return (
      <div className="App">
        <TopNav handleThemeChange={this.handleThemeChange} theme={theme} />

        <Switch>
          <Route exact path="/" render={_ => <HomePage theme={theme} />} />
          <Route path="/:id" render={_ => <ProjectPage theme={theme} />} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
