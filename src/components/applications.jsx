import React from 'react'
import { Fade } from "react-awesome-reveal";

function AppCard(props) {
  const { category, image, rotateCard, liveSite, gitHub, name, description, madeWith } = props
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

  let hidden = null
  if (category === 'All') {
    hidden = null
  } else if (!madeWith.includes(category)) {
    hidden = "d-none"
  }

  return (
    <Fade triggerOnce='true' direction='up'>
      <div className={`app-container m-2 ${hidden}`}>
        <div className="app-card">
          <div className="card-front">
            <img className="app-image mb-2" src={`/images/${image}`} alt="art4bid app"></img>
            <div className="buttons-container w-100 d-flex flex-wrap justify-content-between">
              <button
                onClick={props.rotateCard}
                className="more-info">More Info</button>
              <a href={liveSite} className="live-site"><i className="fas fa-external-link-alt mr-1"></i>Live Site</a>
              <a href={gitHub} className="github"><i className="fab fa-github mr-1"></i>GitHub</a>
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
            <div className="buttons-container d-flex justify-content-around">
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
    this.state = {
      category: 'All'
    }
    this.rotateCard = this.rotateCard.bind(this);
    this.filterCards = this.filterCards.bind(this)

  }

  rotateCard(event) {
    event.target.parentElement.parentElement.parentElement.classList.toggle('flip-card')
  }

  filterCards(event) {
    this.setState({
      category: event.target.innerText
    })
  }

  render() {
    const { category } = this.state

    return (
      <div className="section text-center d-flex flex-column">
        <h1>Applications</h1>
        <div className="filter-container mt-4">
          <button onClick={this.filterCards} className={`btn ${category === 'All' ? 'button-active' : 'null'}`}>All</button>
          <button onClick={this.filterCards} className={`btn ${category === 'React.js' ? 'button-active' : 'null'}`}>React.js</button>
          <button onClick={this.filterCards} className={`btn ${category === 'Node.js' ? 'button-active' : 'null'}`}>Node.js</button>
          <button onClick={this.filterCards} className={`btn ${category === 'PostgreSQL' ? 'button-active' : 'null'}`}>PostgreSQL</button>
        </div>

        <div className="container-fluid pt-2 pb-5">
          <div className="d-flex flex-wrap justify-content-center">
            <AppCard
              category={category}
              image="art4bid-app.png"
              rotateCard={this.rotateCard}
              liveSite="https://art4bid.sarahchoung.com/"
              gitHub="https://github.com/seongkevinlee/art4bid"
              name="ART4BID"
              description="A full stack web application for artists who want to promote or sell their work through a social network bidding system"
              madeWith={[`JavaScript (ES5/ES6)`, 'React.js', 'Node.js', 'HTML5', 'CSS3', 'PostgreSQL', 'Express', 'Bootstrap 4']}
            />
            <AppCard
              category={category}
              image="light-box-app-3.png"
              rotateCard={this.rotateCard}
              liveSite="https://light-box.sarahchoung.com/"
              gitHub="https://github.com/SarahChoung/light-box"
              name="Light Box"
              description="A full stack web application that allows users to shop, add desired products to a cart, and checkout items"
              madeWith={[`JavaScript (ES5/ES6)`, 'React.js', 'Node.js', 'HTML5', 'CSS3', 'PostgreSQL', 'Express', 'Bootstrap 4']}
            />
            <AppCard
              category={category}
              image="movies-to-see-app.png"
              rotateCard={this.rotateCard}
              liveSite="https://movies-to-see.sarahchoung.com/"
              gitHub="https://github.com/SarahChoung/movies-to-see"
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
