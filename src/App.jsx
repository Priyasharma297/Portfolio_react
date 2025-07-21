import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Education from './components/Education/Education'
import SkillSlider from './components/SkillSlider/SkillSlider'
import HardSkills from './components/HardSkills/HardSkills'
import CertificatesSection from './components/CertificatesSection/CertificatesSection'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'
import ContactSection from './components/ContactSection/ContactSection'
import Footer from './components/Footer/Footer'
function App() {
  
  return (
    <>
      <Header></Header>
      <main>
        <Home/>
        <About/>
        <Education/>
        <SkillSlider/>
        {/* <HardSkills/> */}
        <CertificatesSection/>
        <ProjectsSection/>
        <ContactSection/>
      </main>
        <Footer/>
    </>
  )
}

export default App
