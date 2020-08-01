import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

export default class MoonLight extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollY: 0,
      offset: null
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    const offset = this.myRef.current.getBoundingClientRect().top + window.scrollY
    this.setState({ offset })
  }


  handleScroll(event) {
    this.setState({ scrollY: window.scrollY })
  }

  render() {
    let { scrollY, offset } = this.state
    scrollY = scrollY - offset - 700
    return (
      <div id="moonlight-div" ref={this.myRef}>
        <section id="moonlight">
          <img src="images/bg.jpg" id="bg" style={{ top: `${scrollY * 0.5}px` }} />
          <img src="images/moon.png" id="moon" style={{ left: `-${scrollY * 1}px` }} />
          <img src="images/mountain.png" id="mountain" style={{ top: `-${scrollY * 0.15}px` }} />
          <img src="images/road.png" id="road" style={{ top: `${scrollY * 0.15}px` }} />
          {/*  <h2 id="text" style={{ top: `${scrollY * 1}px` }}>Rick and Morty Memory Match</h2> */}
          <h2 id="text">Rick and Morty Memory Match</h2>
        </section>
      </div>
    )
  }
}

{/* <section id="moonlight">
  <img src="images/bg.jpg" id="bg" style={{ top: `${scrollY * 0.5}px` }} />
  <img src="images/moon.png" id="moon" style={{ left: `-${scrollY * 1}px` }} />
  <img src="images/mountain.png" id="mountain" style={{ top: `-${scrollY * 0.15}px` }} />
  <img src="images/road.png" id="road" style={{ top: `${scrollY * 0.15}px` }} />
  <h2 id="text" style={{ top: `${scrollY * 1}px` }}>Rick and Morty Memory Match</h2>
</section> */}
