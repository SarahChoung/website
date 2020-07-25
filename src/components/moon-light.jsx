import React from 'react'

export default class MoonLight extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollY: 0
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    this.setState({ scrollY: event.currentTarget.scrollY })
  }

  render() {
    let { scrollY } = this.state
    return (
      <section id="moonlight">
        <img src="images/bg.jpg" id="bg" style={{ top: `${scrollY * 0.5}px` }} />
        <img src="images/moon.png" id="moon" style={{ left: `-${scrollY * 0.5}px` }} />
        <img src="images/mountain.png" id="mountain" style={{ top: `-${scrollY * 0.15}px` }} />
        <img src="images/road.png" id="road" style={{ top: `${scrollY * 0.15}px` }} />
        <h2 id="text" style={{ top: `${scrollY * 1}px` }}>Rick and Morty Memory Match</h2>
      </section>
    )
  }
}
