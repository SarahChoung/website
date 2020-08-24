import React from 'react';
import { Slide, Fade } from "react-awesome-reveal";
export default function About(props) {
  return (
    <div className="section text-center d-flex flex-column justify-content-center">
      <div className="pb-5">
        <h1>About Me</h1>
      </div>
      <div className="container about-container">
        <div className="row p-4 border-row">
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
            <Slide direction='left' triggerOnce='true'>
              <img className="profile-pic" src="/images/profile-photo.jpg" alt="profile picture"></img>
            </Slide>
          </div>
          <div className="col-12 col-lg-6 p-3">
            <Slide direction='right' triggerOnce='true'>
              <p className="text-left">
                Hi, I'm Sarah, a full stack web developer who enjoys building things, solving problems, and continuously learning.<br /><br />

              While my background is in research and health care, software played a crucial role in my previous positions. Having to use 3D-image analysis software and Electronic Health Record systems daily made me curious as to how computer programs like these were made.<br /><br />

              As I began learning HTML, CSS, and JavaScript using different online resources and taking part-time classes, I realized how much I enjoyed coding and wanted to pursue it as a career. Fast forward and after completing a full-time coding bootcamp at LearningFuze, I was able to add React.js, Node.js, PostgreSQL, jQuery, RESTful APIs, OOP, and Express to my skillset.<br /><br />

              Learning how to create front end and full stack applications has been an incredibly fun and educational journey. Bootcamp may have ended, but my drive to learn new technologies and methodologies has not, and I hope to have the opportunity to contribute my programming knowledge and experience to your team. </p>
            </Slide>
            <Fade triggerOnce='true' direction='down'>
              <div className="about-btn-container d-flex justify-content-around m-auto">
                <a href="mailto: sarahjchoung@gmail.com">
                  <div className="icon-div"><i className="icon fa fa-lg fa-envelope"></i></div>
                </a>
                <a href="tel:+17147320972">
                  <div className="icon-div"><i className="icon fa fa-lg fa-phone"></i></div>
                </a>
                <a href="images/Sarah_Choung_Resume.pdf">
                  <div className="icon-div"><i className="icon fa fa-lg fa-file"></i></div>
                </a>
                <a href="https://github.com/SarahChoung">
                  <div className="icon-div"><i className="icon fab fa-lg fa-github"></i></div>
                </a>
                <a href="https://www.linkedin.com/in/sarah-choung/">
                  <div className="icon-div"><i className="icon fab fa-lg fa-linkedin"></i></div>
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </div >
    </div >
  )
}
