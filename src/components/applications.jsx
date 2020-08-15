import React from 'react'

function AppCard(props) {
  const { image, rotateCard, name, description, madeWith } = props
  const madeItems = madeWith.map((element, index) =>
    (<span key={index} className="pill">{element}</span>)
  )

  return (
    <div className="col app-container d-flex justify-content-center">
      <div className="app-card">
        <div className="card-front">
          <img className="app-image" src={`/images/${image}`} alt="art4bid app"></img>
          <div className="buttons-container w-100 d-flex flex-wrap justify-content-between">
            <button
              onClick={props.rotateCard}
              className="more-info">More Info</button>
            <button className="live-site"><i className="icon fas fa-external-link-alt mr-1"></i>Live Site</button>
            <button className="github"><i className="icon fab fa-github mr-1"></i>GitHub</button>
          </div>
        </div>
        <div className="card-back">
          <div className="app-description">
            <h2 className="app-name">{name}</h2>
            <p className="app-blurb text-left">{description}</p>
          </div>
          <h6 className="text-light">Made With</h6>
          <div className="w-100 d-flex flex-wrap pt-1">
            {madeItems}
          </div>
          <div className="buttons-container">
            <button
              onClick={rotateCard}
              className="go-back">Go Back</button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default class Applications extends React.Component {
  constructor(props) {
    super(props);
    this.rotateCard = this.rotateCard.bind(this);
    this.appCard;
  }

  appCard(props) {

  }

  rotateCard(event) {
    event.target.parentElement.parentElement.parentElement.classList.toggle('flip-card')
  }

  render() {
    return (
      <div id="applications" className="section text-center d-flex flex-column">
        <h1>Applications</h1>
        <div className="container-fluid p-5">
          <div className="row">
            <div className="col app-container d-flex justify-content-center">
              <div className="app-card">
                <div className="card-front">
                  <img className="app-image" src="/images/art4bid-app.png" alt="art4bid app"></img>
                  <div className="buttons-container w-100 d-flex flex-wrap justify-content-between">
                    <button
                      onClick={this.rotateCard}
                      className="more-info">More Info</button>
                    <button className="live-site"><i className="icon fas fa-external-link-alt mr-1"></i>Live Site</button>
                    <button className="github"><i className="icon fab fa-github mr-1"></i>GitHub</button>
                  </div>
                </div>
                <div className="card-back">
                  <div className="app-description">
                    <h2 className="app-name">ART4BID</h2>
                    <p className="app-blurb text-left">A full stack web application for artists who want to promote or sell their work through a social network bidding system</p>
                  </div>
                  <h6 className="text-light">Made With</h6>
                  <div className="w-100 d-flex flex-wrap pt-1">
                    <span className="pill">{`JavaScript (ES5/ES6)`}</span>
                    <span className="pill">React.js</span>
                    <span className="pill">Node.js</span>
                    <span className="pill">HTML5</span>
                    <span className="pill">CSS3</span>
                    <span className="pill">PostgreSQL</span>
                    <span className="pill">Express</span>
                    <span className="pill">Bootstrap 4</span>
                  </div>
                  <div className="buttons-container">
                    <button
                      onClick={this.rotateCard}
                      className="go-back">Go Back</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col app-container d-flex justify-content-center">
              <div className="app-card">
                <div className="card-front">
                  <img className="app-image" src="/images/light-box-app-3.png" alt="dark-box app"></img>
                  <div className="buttons-container w-100 d-flex flex-wrap justify-content-between">
                    <button
                      onClick={this.rotateCard}
                      className="more-info">More Info</button>
                    <button className="live-site"><i className="icon fas fa-external-link-alt mr-1"></i>Live Site</button>
                    <button className="github"><i className="icon fab fa-github mr-1"></i>GitHub</button>
                  </div>
                </div>
                <div className="card-back">
                  <div className="app-description">
                    <h2 className="app-name">Light Box</h2>
                    <p className="app-blurb text-left">A full stack web application that allows users to shop, add desired products to a cart, and checkout items</p>
                  </div>
                  <h6 className="text-light">Made With</h6>
                  <div className="w-100 d-flex flex-wrap pt-1">
                    <span className="pill">{`JavaScript (ES5/ES6)`}</span>
                    <span className="pill">React.js</span>
                    <span className="pill">Node.js</span>
                    <span className="pill">HTML5</span>
                    <span className="pill">CSS3</span>
                    <span className="pill">Express</span>
                    <span className="pill">Bootstrap 4</span>
                  </div>
                  <div className="buttons-container">
                    <button
                      onClick={this.rotateCard}
                      className="go-back">Go Back</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col app-container d-flex justify-content-center">
              <div className="app-card">
                <div className="card-front">
                  <img className="app-image" src="/images/movies-to-see-app.png" alt="movies-to-see app"></img>
                  <div className="buttons-container w-100 d-flex flex-wrap justify-content-between">
                    <button
                      onClick={this.rotateCard}
                      className="more-info">More Info</button>
                    <button className="live-site"><i className="icon fas fa-external-link-alt mr-1"></i>Live Site</button>
                    <button className="github"><i className="icon fab fa-github mr-1"></i>GitHub</button>
                  </div>
                </div>
                <div className="card-back">
                  <div className="app-description">
                    <h2 className="app-name">Movies To See</h2>
                    <p className="app-blurb text-left"> A front end application where users can get New York Times review articles and YouTube video reviews for any movie</p>
                  </div>
                  <h6 className="text-light">Made With</h6>
                  <div className="w-100 d-flex flex-wrap pt-1">
                    <span className="pill">{`JavaScript (ES5/ES6)`}</span>
                    <span className="pill">HTML5</span>
                    <span className="pill">CSS3</span>
                    <span className="pill">jQuery</span>
                    <span className="pill">AJAX</span>
                    <span className="pill">REST API</span>
                    <span className="pill">Bootstrap 4</span>
                  </div>
                  <div className="buttons-container">
                    <button
                      onClick={this.rotateCard}
                      className="go-back">Go Back</button>
                  </div>
                </div>
              </div>
            </div>
            <AppCard
              image="art4bid-app.png"
              rotateCard={this.rotateCard}
              name="ART4BID"
              description="A full stack web application for artists who want to promote or sell their work through a social network bidding system"
              madeWith={[`JavaScript (ES5/ES6)`, 'React.js', 'Node.js', 'HTML5', 'CSS3', 'PostgreSQL', 'Express', 'Bootstrap 4']}
            />
          </div>
        </div>
      </div >
    )
  }

}
