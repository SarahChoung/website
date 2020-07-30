import React from 'react'

export default function About(props) {
  return (
    <div id="about" className="section text-center d-flex flex-column justify-content-center">
      <div className="pb-5">
        <h1>About Me</h1>
      </div>
      <div className="d-flex justify-content-center w-75 m-auto">
        <div className="row">
          <div className="col col-lg-6 mb-5">
            <img src="/images/profile-photo.jpg" alt="profile picture"></img>
          </div>
          <div className="col col-lg-6">
            <h3>Hi, I'm Sarah</h3>
            <p className="text-left">About me blurb. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptas, rem id, eaque unde ducimus vero iure commodi numquam itaque aliquam similique quae dolorum quo. Perspiciatis et repellat aliquam eligendi?</p>
            <div className="d-flex justify-content-around w-50 m-auto">
              <a href="mailto: sarahjchoung@gmail.com"><i className="fa fa-lg fa-envelope"></i></a>
              <a href="tel:+17147320972"><i className="fa fa-lg fa-phone"></i></a>
              <a href="/images/resume.pdf"><i className="fa fa-lg fa-file"></i></a>
              <a href="https://github.com/SarahChoung"><i className="fab fa-lg fa-github"></i></a>
              <a href="https://www.linkedin.com/in/sarah-choung/"><i className="fab fa-lg fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
