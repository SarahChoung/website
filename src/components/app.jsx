import React from 'react';
import MoonLight from './moon-light';
import Home from './home';
import About from './about';
import Applications from './applications';
import Skills from './skills';
import Tools from './tools';
import Contact from './contact'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleSection: 'Home',
      active: false,
      headerBackground: 'transparent'
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
    this.toggleNav = this.toggleNav.bind(this)
    this.scrollTo = this.scrollTo.bind(this)
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

  toggleNav(event) {
    if (!this.state.active) {
      this.setState({ active: true })
    } else {
      this.setState({ active: false })
    }
  }

  scrollTo(element) {
    const { height: navBarHeight } = this.getDimensions(this.navBarRef.current);
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const target = elementPosition - navBarHeight + 1
    window.scrollTo({
      top: target,
      behavior: "smooth",
    });
  };

  handleScroll() {
    const { height: navBarHeight } = this.getDimensions(this.navBarRef.current);
    const scrollPosition = window.scrollY + navBarHeight

    const selected = this.sectionRefs.find(({ section, ref }) => {
      const ele = ref.current;
      if (ele) {
        const { offsetBottom, offsetTop } = this.getDimensions(ele);
        return scrollPosition >= offsetTop && scrollPosition < offsetBottom;
      }
    });

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.setState({ visibleSection: 'Contact' });
    } else if (selected && selected.section !== this.state.visibleSection) {
      this.setState({ visibleSection: selected.section });
    }

    if (window.scrollY > navBarHeight) {
      this.setState({ headerBackground: '#f3f3f4' })
    } else {
      this.setState({ headerBackground: 'transparent' })
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
    const { visibleSection, headerBackground } = this.state
    let isActive = null;
    let toggle = null;
    if (this.state.active) {
      isActive = 'nav-active'
      toggle = 'toggle'
    }

    return (
      <div>
        <div className="nav-home-group">
          <div className="#top" ref={this.navBarRef}>
            <div>
              <div id="header-placeholder">&nbsp;</div>
              <nav id="header-container" className="fixed-top" style={{ backgroundColor: headerBackground, transition: '0.5s' }}>
                <div className="header d-flex justify-content-between align-items-center m-auto p-2">
                  <a href="#top"><h2 className="m-0">SC</h2></a>
                  <ul className={`nav-links d-flex align-items-center justify-content-around m-0 ${isActive}`}>
                    <li><span onClick={() => { this.toggleNav(), this.scrollTo(this.homeRef.current) }} className={visibleSection === 'Home' ? 'active-nav' : 'null'}>Home</span></li>
                    <li><span onClick={() => { this.toggleNav(), this.scrollTo(this.aboutRef.current) }} className={visibleSection === 'About' ? 'active-nav' : 'null'}>About</span></li>
                    <li><span onClick={() => { this.toggleNav(), this.scrollTo(this.applicationsRef.current) }} className={visibleSection === 'Applications' ? 'active-nav' : 'null'}>Applications</span></li>
                    <li><span onClick={() => { this.toggleNav(), this.scrollTo(this.skillsRef.current) }} className={visibleSection === 'Skills' ? 'active-nav' : 'null'}>Skills</span></li>
                    <li><span onClick={() => { this.toggleNav(), this.scrollTo(this.toolsRef.current) }} className={visibleSection === 'Tools' ? 'active-nav' : 'null'}>Tools</span></li>
                    <li><span onClick={() => { this.toggleNav(), this.scrollTo(this.contactRef.current) }} className={visibleSection === 'Contact' ? 'active-nav' : 'null'}>Contact</span></li>
                  </ul>
                  <div className="burger" onClick={this.toggleNav} >
                    <div className={`${toggle} line1`}></div>
                    <div className={`${toggle} line2`}></div>
                    <div className={`${toggle} line3`}></div>
                  </div>
                </div>
              </nav>
            </div >
          </div>
          <div ref={this.homeRef} className="home-background">
            <Home />
          </div>
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
      </div >
    )
  }
}
