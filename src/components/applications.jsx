import React from 'react'

function AppCard(props) {
  const { image, rotateCard, name, description, madeWith } = props
  const insertIntoArray = (arr, value) => {
    return arr.reduce((result, element, index, array) => {
      result.push(element);
      if (index < array.length - 1) {
        result.push(value);
      }
      return result;
    }, []);
  };

  let result = insertIntoArray(madeWith, ' \u00B7 ')

  const madeItems = result.map((element, index) =>
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
            <AppCard
              image="art4bid-app.png"
              rotateCard={this.rotateCard}
              name="ART4BID"
              description="A full stack web application for artists who want to promote or sell their work through a social network bidding system"
              madeWith={[`JavaScript (ES5/ES6)`, 'React.js', 'Node.js', 'HTML5', 'CSS3', 'PostgreSQL', 'Express', 'Bootstrap 4']}
            />
            <AppCard
              image="light-box-app-3.png"
              rotateCard={this.rotateCard}
              name="Light Box"
              description="A full stack web application that allows users to shop, add desired products to a cart, and checkout items"
              madeWith={[`JavaScript (ES5/ES6)`, 'React.js', 'Node.js', 'HTML5', 'CSS3', 'PostgreSQL', 'Express', 'Bootstrap 4']}
            />
            <AppCard
              image="movies-to-see-app.png"
              rotateCard={this.rotateCard}
              name="Movies To See"
              description="A front end application where users can get New York Times review articles and YouTube video reviews for any movie"
              madeWith={[`JavaScript (ES5/ES6)`, 'HTML5', 'CSS3', 'jQuery', 'AJAX', 'REST API', 'Bootstrap 4']}
            />
          </div>
        </div>
      </div >
    )
  }

}
