import React from 'react'

export default function About(props) {
  return (
    <div id="about" className="section text-center d-flex flex-column justify-content-center">
      <div className="pb-5">
        <h1>About Me</h1>
      </div>
      <div className="d-flex justify-content-end w-75 m-auto">
        <div className="row">
          <div className="col col-lg-6 mb-5">
            <img src="/images/profile-photo.jpg" alt="profile picture"></img>
          </div>
          <div className="col col-lg-6">
            <h3>Hi, I'm Sarah</h3>
            <p>About me blurb. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptas, rem id, eaque unde ducimus vero iure commodi numquam itaque aliquam similique quae dolorum quo. Perspiciatis et repellat aliquam eligendi?</p>
          </div>
        </div>
      </div>
    </div>
  )
}
