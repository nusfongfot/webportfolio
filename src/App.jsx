import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Aboutme from "./components/Aboutme"
import Footer from "./components/Footer"
import HeaderSection from "./components/HeaderSection"
import NavbarUs from "./components/NavbarUs"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  return (
    <div>
      <NavbarUs />
      <HeaderSection />
      <Aboutme />
      <Projects />
      <Skills />
      <Footer />
    </div>
  )
}

export default App
