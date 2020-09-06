import React from 'react'
import { Fade } from "react-awesome-reveal";

function AppCard(props) {
  const { image, rotateCard, liveSite, gitHub, name, description, madeWith, altText } = props
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
    <Fade triggerOnce='true' direction='up'>
      <div className="app-container">
        <div className="app-card">
          <div className="card-front">
            <img className="app-image mb-2" src={`/images/${image}`} alt={altText}></img>
            <div className="buttons-container w-100 d-flex flex-wrap justify-content-between">
              <button
                onClick={props.rotateCard}
                className="more-info">More Info</button>
              <a href={liveSite} className="live-site" rel="noreferrer" target="_blank"><i className="fas fa-external-link-alt mr-1"></i>Live Site</a>
              <a href={gitHub} className="github" rel="noreferrer" target="_blank"><i className="fab fa-github mr-1"></i>GitHub</a>
            </div>
          </div>
          <div className="card-back">
            <div className="app-description">
              <h2 className="app-name">{name}</h2>
              <p className="app-blurb text-left">{description}</p>
            </div>
            <div className="made-container">
              <h6 className="text-light">Made With</h6>
              <div className="w-100 d-flex flex-wrap pt-1">
                {madeItems}
              </div>
            </div>
            <div className="buttons-container d-flex justify-content-center">
              <button
                onClick={rotateCard}
                className="go-back">Go Back</button>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )

}

export default class Applications extends React.Component {
  constructor(props) {
    super(props);
    this.rotateCard = this.rotateCard.bind(this);
  }

  rotateCard(event) {
    event.target.parentElement.parentElement.parentElement.classList.toggle('flip-card')
  }

  render() {
    return (
      <div className="section text-center d-flex flex-column">
        <h1>Applications</h1>
        <div className="container-fluid py-5">
          <div className="d-flex flex-wrap justify-content-center">
            <AppCard
              image="art4bid-app.png"
              altText="Art4Bid Logo"
              rotateCard={this.rotateCard}
              liveSite="https://art4bid.sarahchoung.com/"
              gitHub="https://github.com/seongkevinlee/art4bid"
              name="ART4BID"
              description="A full stack web application for artists who want to promote or sell their work through a social network bidding system"
              madeWith={[`JavaScript (ES5/ES6)`, 'React.js', 'Node.js', 'HTML5', 'CSS3', 'PostgreSQL', 'Express', 'Bootstrap 4']}
            />
            <AppCard
              image="light-box-app.png"
              altText="Light Box Logo"
              rotateCard={this.rotateCard}
              liveSite="https://light-box.sarahchoung.com/"
              gitHub="https://github.com/SarahChoung/light-box"
              name="Light Box"
              description="A full stack web application that allows users to shop, add desired products to a cart, and checkout items"
              madeWith={[`JavaScript (ES5/ES6)`, 'React.js', 'Node.js', 'HTML5', 'CSS3', 'PostgreSQL', 'Express', 'Bootstrap 4']}
            />
            <AppCard
              image="movies-to-see-app.png"
              altText="Movies To See Logo"
              rotateCard={this.rotateCard}
              liveSite="https://movies-to-see.sarahchoung.com/"
              gitHub="https://github.com/SarahChoung/movies-to-see"
              name="Movies To See"
              description="A front end application where users can get New York Times review articles and YouTube video reviews for any movie"
              madeWith={[`JavaScript (ES5/ES6)`, 'HTML5', 'CSS3', 'jQuery', 'AJAX', 'REST API', 'Bootstrap 4']}
            />
            <AppCard
              image="badass-kanban.png"
              altText="BadASS Kanban Logo"
              rotateCard={this.rotateCard}
              liveSite="https://badass-kanban.adambotma.com/"
              gitHub="https://github.com/adam-botma/hackathon-badass"
              name="BadASS Kanban"
              description="A front end web application for users to track their progress on tasks for a project (and enjoy the completion of each task)."
              madeWith={[`JavaScript (ES5/ES6)`, 'React.js', 'HTML5', 'CSS3', 'Material-UI']}
            />
          </div>
        </div>

      </div >
    )
  }

}
