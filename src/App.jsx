import Home from './components/Home'; // import component Home
import AboutUs from './components/AboutUs'; // import component AboutUs
import Service from "./components/Service"; // import component Service
import Skills from './components/Skills'; // import component Skills
import Testimonial from './components/Testimonial'; // import component Testimonial
import Projects from './components/Projects'; // import component Projects
import Highlight from './components/Highlight'; // import component Highlight
import Footer from './components/Footer'; // import component Footer
import '../src/styles/styles.css'; // import Style 



function App() {

    return(
      <>
              <Home /> 
              <AboutUs />
              <Service />
              <Skills />
              <Testimonial />
              <Projects />
              <Highlight />
              <Footer />
      </>
    )
}

export default App
