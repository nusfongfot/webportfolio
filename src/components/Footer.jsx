import Slide from "react-reveal/Slide"

function Footer() {
  return (
    <footer class="footer overflow-hidden" id="contact">
      <Slide bottom>
        <div class="footer-content">
          <div class="footer-detail">
            <b>Sorawit Khongsrima(Nus)</b>
            <b>
              <i class="fa-solid fa-phone"></i> 099-472-4464
            </b>
            <b>link below to contact me: </b>
          </div>

          <div class="social">
            <a
              target="_blank"
              href="https://github.com/nusfongfot?tab=repositories"
              rel="noreferrer"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              target="_blank"
              href="https://line.me/ti/p/MvsFFyHusz"
              rel="noreferrer"
            >
              <i class="fa-brands fa-line"></i>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sorawit-khongsrima"
              rel="noreferrer"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>

          <div class="copy">
            <b>Copyright by Nus</b>
          </div>
        </div>
      </Slide>
    </footer>
  )
}

export default Footer
