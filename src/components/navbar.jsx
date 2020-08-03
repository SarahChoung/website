import React from 'react'

export default class NavBar extends React.Component {
  render() {
    return (
      <div id="#top">
        <div id="header-placeholder">&nbsp;</div>
        <div id="header-container" className="fixed-top">
          <nav className="header navbar navbar-expand-lg navbar-light d-flex justify-content-between m-auto p-2">
            <div>
              <a class="navbar-brand" href="#">Placeholder</a>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" href="#">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse mr-auto" id="navbarNav">
              <ul className="navbar-nav" id="nav-sections">
                <li className="nav-item active" ><a className="nav-link" href="#top">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#applications">Applications</a></li>
                <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
                <li className="nav-item"><a className="nav-link" href="#tools">Tools</a></li>
                <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              </ul>
            </div>
          </nav>
        </div >
      </div >
    )
  }
}
