import React from 'react';
import MoonLight from './moon-light';
import Home from './home';
import NavBar from './navbar';
import About from './about';
import Applications from './applications';
import Skills from './skills';
import Tools from './tools';
import Contact from './contact'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleSection: 'Home'
    }
    this.navBarRef = React.createRef()
    this.homeRef = React.createRef()
    this.aboutRef = React.createRef()
    this.applicationsRef = React.createRef()
    this.skillsRef = React.createRef()
    this.toolsRef = React.createRef()
    this.contactRef = React.createRef()
    this.getDimensions = this.getDimensions.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.sectionRefs
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
    this.sectionRefs = [
      { section: "Home", ref: this.homeRef },
      { section: "About", ref: this.aboutRef },
      { section: "Applications", ref: this.applicationsRef },
      { section: "Skills", ref: this.skillsRef },
      { section: "Tools", ref: this.toolsRef },
      { section: "Contact", ref: this.contactRef },
    ]
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
    const { height: navBarHeight } = this.getDimensions(this.navBarRef.current);
    const scrollPosition = window.scrollY + navBarHeight

    const selected = this.sectionRefs.find(({ section, ref }) => {
      const ele = ref.current;
      if (ele) {
        const { offsetBottom, offsetTop } = this.getDimensions(ele);
        return scrollPosition > offsetTop && scrollPosition < offsetBottom;
      }
    });

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.setState({ visibleSection: 'Contact' });
    } else if (selected && selected.section !== this.state.visibleSection) {
      this.setState({ visibleSection: selected.section });
    } else if (!selected && this.state.visibleSection) {
      this.setState({ visibleSection: 'Home' });
    }

  }

  getDimensions(ele) {

    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;

    return {
      height,
      offsetTop,
      offsetBottom,
    };

  }

  render() {
    return (
      <div>
        <div className="#top" ref={this.navBarRef}>
          <NavBar
            visibleSection={this.state.visibleSection}
            navBar={this.navBarRef.current}
            home={this.homeRef.current}
            about={this.aboutRef.current}
            applications={this.applicationsRef.current}
            skills={this.skillsRef.current}
            tools={this.toolsRef.current}
            contact={this.contactRef.current}
          />
        </div>
        <div ref={this.homeRef} className="home-background">
          <Home />
        </div>
        <div ref={this.aboutRef} id="about" >
          <About />
        </div>
        <div ref={this.applicationsRef} id="applications"  >
          <Applications />
        </div>
        {/* <MoonLight /> */}
        <div ref={this.skillsRef} id="skills">
          <Skills />
        </div>
        <div ref={this.toolsRef} id="tools" >
          <Tools />
        </div>
        <div ref={this.contactRef} id="contact">
          <Contact />
        </div>
      </div>
    )
  }
}
