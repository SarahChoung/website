import React from 'react'

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <div id="contact" className="section text-center d-flex flex-column justify-content-center">
          <h1>Contact</h1>
          <div className="container p-3">
            <div className="row">
              <div className="col col-lg-4  d-flex text-left align-items-center mb-2">
                <div className="mr-2 ml-2">
                  <i aria-hidden="true" className="fa-2x fa fa-map-marker-alt mr-1"></i>
                </div>
                <div className="pl-3" style={{ borderLeft: '1px solid black' }}>
                  <h5>Location</h5>
                  <p>Orange County, CA</p>
                </div>
              </div>
              <div className="col col-lg-4 d-flex text-left align-items-center mb-2">
                <div className="mr-2">
                  <a href="tel:+17147320972"><i className="icon fa-2x fa fa-phone mr-1"></i></a>
                </div>
                <div className="pl-3" style={{ borderLeft: '1px solid black' }}>
                  <h5>Mobile</h5>
                  <a href="tel:+17147320972">&#40;714&#41; 732-0972</a>
                </div>
              </div>
              <div className="col col-lg-4 d-flex text-left align-items-center mb-2">
                <div className="mr-2">
                  <a href="mailto: sarahjchoung@gmail.com"><i className="icon fa-2x fa fa-envelope mr-1"></i></a>
                </div>
                <div className="pl-3" style={{ borderLeft: '1px solid black' }}>
                  <h5>Email</h5>
                  <a href="mailto: sarahjchoung@gmail.com">sarahjchoung&#64;gmail.com</a>
                </div>
              </div>
            </div>
          </div >
        </div >
        <div className="copyright p-1 w-100 text-center">
          <span>&copy; Copyright <strong>Sarah Choung</strong> 2020</span>
        </div >
      </div>
    )
  }
}
