/* eslint-disable jsx-a11y/anchor-is-valid */
import '../App.css'

function NavbarUs() {
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-sm navbar-dark w-100">
        <div className="container-fluid">
          <a className="navbar-brand nav-text">
            Portfo<span className="color-head">lio</span>
          </a>
          <button
            className="navbar-toggler bg-danger"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-sm-flex align-items-sm-center justify-content-sm-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link text-center text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-center text-white" href="#about">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-center text-white" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-center text-white" href="#contact">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavbarUs
