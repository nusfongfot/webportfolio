import Slide from "react-reveal/Slide"

function Skills() {
  return (
    <div class="container-fluid contact-me">
      <div class="title-service d-flex align-items-center justify-content-center overflow-hidden">
        <Slide bottom>Skills</Slide>
      </div>
      <div class="row overflow-hidden d-flex m-0 flex-column d-sm-flex flex-sm-column align-items-sm-center justify-content-sm-center gap-4 mb-5 d-xxl-flex flex-xxl-row d-xl-flex flex-xl-row d-lg-flex flex-lg-row">
      <Slide bottom>
        <div class="col col-sm-12 col-md-6 col-lg-5 col-xl-4 col-xxl-3 d-flex  justify-content-center">
          <div class="icon-service-skills">
            <i class="fa-brands fa-html5"></i>
            <i class="fa-brands fa-css3-alt"></i>
            <i class="fa-brands fa-js"></i>
            <i class="fa-brands fa-react"></i>
          </div>
        </div>
        </Slide>
      </div>
    </div>
  )
}

export default Skills
