import React from 'react';
import MoonLight from './moon-light';
import Home from './home';
import NavBar from './navbar';
import About from './about';
import Applications from './applications';
import Skills from './skills';
import Tools from './tools';
import Contact from './contact'

export default class App extends React.Component {

  render() {
    return (
      <div>
        <NavBar />
        <Home />
        <About />
        <Applications />
        {/* <MoonLight /> */}
        <Skills />
        <Tools />
        <Contact />
      </div>
    )
  }
}
