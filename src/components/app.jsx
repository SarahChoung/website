import React from 'react';
import MoonLight from './moon-light';
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
        <About />
        <Applications />
        <Skills />
        <Tools />
        <Contact />
        {/* <MoonLight /> */}
      </div>
    )
  }
}
