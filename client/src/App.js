/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import projectList from './compoenets/List/projectList';
import './App.css';

// import compoenents
import Navbar from './compoenets/Navbar';
import Landing from './compoenets/Landing';
import About from './compoenets/About';
import Contact from './compoenets/Contact';
import Projects from './compoenets/Projects';
import Skill from './compoenets/Skill';

class App extends Component {
  handleConsole() {
    console.log(
      '%c Welcome to my console. \n This is a work in progress =] ',
      'background: #222; color: #bada55; font-size:20px; ',
    );
  }

  componentWillMount() {
    this.handleConsole();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="">
            <Navbar />
            <div className="contentBody">
              <Route exact path="/" component={Landing} />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/project"
                render={props => projectList.map(proj => <Projects {...props} item={proj} />)
                }
              />
              <Route exact path="/skill" component={Skill} />
              <Route exact path="/contact" component={Contact} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;