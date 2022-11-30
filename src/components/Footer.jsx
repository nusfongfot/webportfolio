import Slide from "react-reveal/Slide"
import '../App.css'

function Footer() {
  return (
    <footer className="footer overflow-hidden" id="contact">
      <Slide bottom>
        <div className="footer-content">
          <div className="footer-detail">
            <b>Sorawit Khongsrima(Nus)</b>
            <b>
              <i className="fa-solid fa-phone"></i> 099-472-4464
            </b>
            <b>link below to contact me: </b>
          </div>

          <div className="social">
            <a
              target="_blank"
              href="https://github.com/nusfongfot?tab=repositories"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              target="_blank"
              href="https://line.me/ti/p/MvsFFyHusz"
              rel="noreferrer"
            >
              <i className="fa-brands fa-line"></i>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sorawit-khongsrima"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>

          <div className="copy">
            <b>Copyright by Nus</b>
          </div>
        </div>
      </Slide>
    </footer>
  )
}

export default Footer
