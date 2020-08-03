import React from 'react'

export default function About(props) {
  return (
    <div id="about" className="section text-center d-flex flex-column justify-content-center">
      <div className="pb-5">
        <h1>About Me</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 mb-5 d-flex align-items-center">
            <img className="w-100" src="/images/profile-photo.jpg" alt="profile picture"></img>
          </div>
          <div className="col-12 col-md-7">
            <p className="text-left">
              Hi, I'm Sarah, a full stack web developer who enjoys building things, solving problems, and continuously learning.<br /><br />

              While my background is in research and health care, software played a crucial role in my previous positions. Having to use Imaris’s 3D-image analysis software and Evident’s Thrive Electronic Health Record system almost every day made me curious as to how computer programs like these were made. To tackle that curiosity, I decided to start all the way from square one and used Codecademy and FreeCodeCamp to type out my first “Hello World” in HTML.<br /><br />

              As I began learning HTML, CSS, and JavaScript using different online resources and taking part-time classes, I realized how much I enjoyed coding and wanted to pursue it as a career. Fast forward and after completing a full-time coding bootcamp at LearningFuze, my skillset has expanded to include utilizing JavaScript, React.js, Node.js, PostgreSQL, jQuery, RESTful APIs, OOP, Express <br /><br />


              Learning how to create front end and full stack applications has been an incredibly fun and educational journey. Bootcamp may have ended, but my drive to learn new technologies and methodologies has not, and I hope to have the opportunity to contribute my programming knowledge and experience to your team. </p>
            <div className="d-flex justify-content-around w-50 m-auto">
              <a href="mailto: sarahjchoung@gmail.com"><i className="fa fa-lg fa-envelope"></i></a>
              <a href="tel:+17147320972"><i className="fa fa-lg fa-phone"></i></a>
              <a href="/images/resume.pdf"><i className="fa fa-lg fa-file"></i></a>
              <a href="https://github.com/SarahChoung"><i className="fab fa-lg fa-github"></i></a>
              <a href="https://www.linkedin.com/in/sarah-choung/"><i className="fab fa-lg fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}
