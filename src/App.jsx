import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Aboutme from "./components/Aboutme"
import Footer from "./components/Footer"
import HeaderSection from "./components/HeaderSection"
import NavTest from "./components/NavTest"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  return (
    <div>
      <NavTest />
      <HeaderSection />
      <Aboutme />
      <Projects />
      <Skills />
      <Footer />
    </div>
  )
}

export default App
