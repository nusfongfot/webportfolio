import Slide from "react-reveal/Slide"

function HeaderSection() {
  const handleForm = (e) => {
    e.preventDefault()
  }

  return (
    <div className="nav container-fluid p-0 m-0">
      <div className="row">
        <div className="col">
          <div className="content" id="home">
            <Slide left>
              <h4>Hello, my name is</h4>
              <h1>
                Sorawit <span className="color-head">Khongsrima</span>
              </h1>
              <h3>I'am a student.</h3>
            </Slide>
            <div className="newslatter">
              <Slide left>
                <form onSubmit={handleForm}>
                  <input type="text" placeholder="Enter your email" />
                  <input type="submit" value="Let's Start" />
                </form>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderSection
