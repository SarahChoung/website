import React from 'react'

export default class Applications extends React.Component {
  constructor(props) {
    super(props);
    this.rotateCard = this.rotateCard.bind(this);
    this.rotateCardBack = this.rotateCardBack.bind(this);
  }

  rotateCard(event) {
    event.target.parentElement.parentElement.parentElement.classList.toggle('flip-card')
  }

  rotateCardBack(event) {
    event.target.parentElement.parentElement.classList.toggle('flip-card')
  }

  render() {
    return (
      <div id="applications" className="section text-center d-flex flex-column">
        <h1>Applications</h1>
        <div className="container p-3">
          <div className="row">
            <div className="col-12 col-md-4 app-container">
              <div className="app-card">
                <img className="app-image" src="/images/art4bid-app.png" alt="art4bid app"></img>
                <div className="w-100 d-flex flex-wrap p-1 justify-content-between">
                  <button
                    onClick={this.rotateCard}
                    className="more-info">More Info</button>
                  <button className="live-site"><i className="icon fas fa-external-link-alt mr-1"></i>Live Site</button>
                  <button className="github"><i className="icon fab fa-github mr-1"></i>GitHub</button>
                </div>
                {/* <div className="w-100 d-flex flex-wrap pt-1">
              <span className="badge-class badge badge-pill badge-dark">{`JavaScript (ES5/ES6)`}</span>
              <span className="badge-class badge badge-pill badge-dark">React.js</span>
              <span className="badge-class badge badge-pill badge-dark">Node.js</span>
              <span className="badge-class badge badge-pill badge-dark">HTML5</span>
              <span className="badge-class badge badge-pill badge-dark">CSS3</span>
              <span className="badge-class badge badge-pill badge-dark">PostgreSQL</span>
              <span className="badge-class badge badge-pill badge-dark">Express</span>
              <span className="badge-class badge badge-pill badge-dark">Bootstrap 4</span>
            </div> */}
              </div>
            </div>
            <div className="col-12 col-md-4 app-container">
              <div className="app-card">
                <div className="card-front">
                  <img className="app-image" src="/images/light-box-app-3.png" alt="dark-box app"></img>
                  <div className="buttons-container w-100 d-flex flex-wrap pt-1 pr-1 pl-1 justify-content-between">
                    <button
                      onClick={this.rotateCard}
                      className="more-info">More Info</button>
                    <button className="live-site"><i className="icon fas fa-external-link-alt mr-1"></i>Live Site</button>
                    <button className="github"><i className="icon fab fa-github mr-1"></i>GitHub</button>
                  </div>
                </div>
                <div className="card-back">
                  <div className="w-100 d-flex flex-wrap pt-1">
                    <span className="badge-class badge badge-pill badge-dark">{`JavaScript (ES5/ES6)`}</span>
                    <span className="badge-class badge badge-pill badge-dark">React.js</span>
                    <span className="badge-class badge badge-pill badge-dark">Node.js</span>
                    <span className="badge-class badge badge-pill badge-dark">HTML5</span>
                    <span className="badge-class badge badge-pill badge-dark">CSS3</span>
                    <span className="badge-class badge badge-pill badge-dark">Express</span>
                    <span className="badge-class badge badge-pill badge-dark">Bootstrap 4</span>
                  </div>
                  <button
                    onClick={this.rotateCardBack}
                  >Go Back</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 app-container">
              <div className="app-card">
                <img className="app-image" src="/images/movies-to-see-app.png" alt="movies-to-see app"></img>
                <div className="w-100 d-flex flex-wrap p-1 justify-content-between">
                  <button className="more-info">More Info</button>
                  <button className="live-site"><i className="icon fas fa-external-link-alt mr-1"></i>Live Site</button>
                  <button className="github"><i className="icon fab fa-github mr-1"></i>GitHub</button>
                </div>
                {/* <div className="w-100 d-flex flex-wrap pt-1">
              <span className="badge-class  badge badge-pill badge-dark">{`JavaScript (ES5/ES6)`}</span>
              <span className="badge-class badge badge-pill badge-dark">HTML5</span>
              <span className="badge-class badge badge-pill badge-dark">CSS3</span>
              <span className="badge-class badge badge-pill badge-dark">jQuery</span>
              <span className="badge-class badge badge-pill badge-dark">AJAX</span>
              <span className="badge-class badge badge-pill badge-dark">REST API</span>
              <span className="badge-class badge badge-pill badge-dark">Bootstrap 4</span>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }

}
