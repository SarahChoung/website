import React from 'react'

export default class NavBar extends React.Component {
  render() {
    return (
      <div id="#top">
        <div id="header-placeholder">&nbsp;</div>
        <div id="header-container" className="fixed-top">
          <header className="d-flex justify-content-between m-auto align-items-end p-2">
            <div>
              <h1 className="m-0">Placeholder</h1>
            </div>
            <ul id="nav-sections" className="d-flex w-50 justify-content-around">
              <li><a href="#top">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#applications">Applications</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#tools">Tools</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </header>
        </div>
      </div >
    )
  }
}
