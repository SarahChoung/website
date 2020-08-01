import React from 'react'

export default class Contact extends React.Component {
  render() {
    return (
      <div id="contact" className="section text-center d-flex flex-column justify-content-center">
        <h1>Contact</h1>
        <div className="container p-3">
          <div className="row">
            <div className="col-12 col-md-4">
              <h6>Location</h6>
              <p>Orange County, CA</p>
            </div>
            <div className="col-12  col-md-4">
              <h6>Mobile</h6>
              <a href="tel:+17147320972">&#40;714&#41; 732-0972</a>
            </div>
            <div className="col-12 col-md-4">
              <h6>Email</h6>
              <a href="mailto: sarahjchoung@gmail.com">sarahjchoung&#64;gmail.com</a>
            </div>
          </div>
        </div >
      </div >
    )
  }
}
