import React from 'react'

export default function Applications(props) {
  return (
    <div id="applications" className="section text-center d-flex flex-column justify-content-center">
      <h1>Applications</h1>
      <div className="container p-3">
        <div className="row">
          <div className="col-12 col-md-4 app-card">
            <img className="app-image" src="/images/art4bid.png" alt="art4bid app"></img>
            <div className="w-100 d-flex flex-wrap pt-1">
              <span className="badge-class badge badge-pill badge-dark">{`JavaScript (ES5/ES6)`}</span>
              <span className="badge-class badge badge-pill badge-dark">React.js</span>
              <span className="badge-class badge badge-pill badge-dark">Node.js</span>
              <span className="badge-class badge badge-pill badge-dark">HTML5</span>
              <span className="badge-class badge badge-pill badge-dark">CSS3</span>
              <span className="badge-class badge badge-pill badge-dark">PostgreSQL</span>
              <span className="badge-class badge badge-pill badge-dark">Express</span>
              <span className="badge-class badge badge-pill badge-dark">Bootstrap 4</span>
            </div>
          </div>
          <div className="col-12 col-md-4 app-card">
            <img className="app-image" src="/images/light-box.png" alt="dark-box app"></img>
            <div className="w-100 d-flex flex-wrap pt-1">
              <span className="badge-class badge badge-pill badge-dark">{`JavaScript (ES5/ES6)`}</span>
              <span className="badge-class badge badge-pill badge-dark">React.js</span>
              <span className="badge-class badge badge-pill badge-dark">Node.js</span>
              <span className="badge-class badge badge-pill badge-dark">HTML5</span>
              <span className="badge-class badge badge-pill badge-dark">CSS3</span>
              <span className="badge-class badge badge-pill badge-dark">Express</span>
              <span className="badge-class badge badge-pill badge-dark">Bootstrap 4</span>
            </div>
          </div>
          <div className="col-12 col-md-4 app-card">
            <img className="app-image" src="/images/movies-to-see.png" alt="movies-to-see app"></img>
            <div className="w-100 d-flex flex-wrap pt-1">
              <span className="badge-class  badge badge-pill badge-dark">{`JavaScript (ES5/ES6)`}</span>
              <span className="badge-class badge badge-pill badge-dark">HTML5</span>
              <span className="badge-class badge badge-pill badge-dark">CSS3</span>
              <span className="badge-class badge badge-pill badge-dark">jQuery</span>
              <span className="badge-class badge badge-pill badge-dark">AJAX</span>
              <span className="badge-class badge badge-pill badge-dark">REST API</span>
              <span className="badge-class badge badge-pill badge-dark">Bootstrap 4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
