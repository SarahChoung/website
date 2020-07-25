import React from 'react'

export default class NavBar extends React.Component {
  render() {
    return (
      <div id="header-container">
        <header className="d-flex justify-content-between m-auto align-items-end p-2">
          <div>
            <h1 className="m-0">Placeholder</h1>
          </div>
          <div id="nav-sections" className="d-flex w-50 justify-content-around">
            <h5>Home</h5>
            <h5>About</h5>
            <h5>Applications</h5>
            <h5>Skills</h5>
            <h5>Tools</h5>
            <h5>Contact</h5>
          </div>
        </header>
      </div>
    )
  }
}
