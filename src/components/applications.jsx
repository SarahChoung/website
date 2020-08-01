import React from 'react'

export default function Applications(props) {
  return (
    <div id="applications" className="section text-center d-flex flex-column justify-content-center">
      <h1>Applications</h1>
      <div className="container p-3">
        <div className="row">
          <div className="col-4 app-card">
            <img className="app-image" src="/images/art4bid.png" alt="art4bid app"></img>
            <div className="w-100 d-flex flex-wrap pt-1">
              <span className="badge badge-pill badge-secondary">{`JavaScript (ES5/ES6)`}</span>
              <span className="badge badge-pill badge-secondary">React.js</span>
              <span className="badge badge-pill badge-secondary">Node.js</span>
              <span className="badge badge-pill badge-secondary">HTML5</span>
              <span className="badge badge-pill badge-secondary">CSS3</span>
              <span className="badge badge-pill badge-secondary">PostgreSQL</span>
              <span className="badge badge-pill badge-secondary">Express</span>
              <span className="badge badge-pill badge-secondary">Bootstrap 4</span>
            </div>
          </div>
          <div className="col-4 app-card">
            <img className="app-image" src="/images/light-box.png" alt="light-box app"></img>
            <div className="w-100 d-flex flex-wrap pt-1">
              <span className="badge badge-pill badge-secondary">{`JavaScript (ES5/ES6)`}</span>
              <span className="badge badge-pill badge-secondary">React.js</span>
              <span className="badge badge-pill badge-secondary">Node.js</span>
              <span className="badge badge-pill badge-secondary">HTML5</span>
              <span className="badge badge-pill badge-secondary">CSS3</span>
              <span className="badge badge-pill badge-secondary">Express</span>
              <span className="badge badge-pill badge-secondary">Bootstrap 4</span>
            </div>
          </div>
          <div className="col-4 app-card">
            <img className="app-image" src="/images/movies-to-see.png" alt="movies-to-see app"></img>
            <div className="w-100 d-flex flex-wrap pt-1">
              <span className="badge badge-pill badge-secondary">{`JavaScript (ES5/ES6)`}</span>
              <span className="badge badge-pill badge-secondary">HTML5</span>
              <span className="badge badge-pill badge-secondary">CSS3</span>
              <span className="badge badge-pill badge-secondary">jQuery</span>
              <span className="badge badge-pill badge-secondary">AJAX</span>
              <span className="badge badge-pill badge-secondary">REST API</span>
              <span className="badge badge-pill badge-secondary">Bootstrap 4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
