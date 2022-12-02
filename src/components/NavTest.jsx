import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import "../App.css"

function NavTest() {
  return (
    <div className="contaicontainer-fluid p-0">
      <Navbar className="navbar navbar-expand-sm navbar-dark " expand="lg">
        <Container>
          <Navbar.Brand>            
           <span className="nav-text">Portfo<span className="color-head">lio</span></span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="text-white nav-link-text">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="text-white nav-link-text">
                AboutMe
              </Nav.Link>
              <Nav.Link href="#projects" className="text-white nav-link-text">
                Projects
              </Nav.Link>
              <Nav.Link href="#contact" className="text-white nav-link-text">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse id="basic-navbar-nav" className="" />         
        </Container>
      </Navbar>
    </div>
  )
}

export default NavTest
