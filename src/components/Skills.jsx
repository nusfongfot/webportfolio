import Slide from "react-reveal/Slide"
import '../App.css'

function Skills() {
  return (
    <div className="container-fluid contact-me">
      <div className="title-service d-flex align-items-center justify-content-center overflow-hidden">
        <Slide bottom>Skills</Slide>
      </div>
      <div className="row overflow-hidden d-flex m-0 flex-column d-sm-flex flex-sm-column align-items-sm-center justify-content-sm-center gap-4 mb-5 d-xxl-flex flex-xxl-row d-xl-flex flex-xl-row d-lg-flex flex-lg-row">
      <Slide bottom>
        <div className="col col-sm-12 col-md-6 col-lg-5 col-xl-4 col-xxl-3 d-flex justify-content-center">
          <div className="icon-service-skills">
            <i className="fa-brands fa-html5"></i>
            <i className="fa-brands fa-css3-alt"></i>
            <i className="fa-brands fa-js"></i>
            <i className="fa-brands fa-react"></i>
          </div>
        </div>
        </Slide>
      </div>
    </div>
  )
}

export default Skills
