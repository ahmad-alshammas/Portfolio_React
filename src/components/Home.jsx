import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // import icon Github
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; // import icon Linkedin 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; //  import icon Email 
import useTypingEffect from "../hooks/useTypingEffect"; // استيراد الهوك
import homeImage from "../assets/images/Programmer-bro.svg";
function Home() {
  const typedName = useTypingEffect("Ahmad Azzam", 150); // النص مع سرعة الكتابة

  return (
    <section className="home">
      {/*  start navigation bar */}
      <nav id="page-home">
        <h2 style={{ color: "red" }}>Abo Al-Azzm</h2>
        <ul>
          <li><a href="#page-home">Home</a></li>
          <li><a href="#page-about">About Me</a></li>
          <li><a href="#page-service">Services</a></li>
          <li><a href="#page-skills">Skills</a></li>
          <li><a href="#page-testimonial">Testimonial</a></li>
          <li><a href="#page-project">Project</a></li>
          <li><a href="#page-highlight">Highlight</a></li>
          <li><a href="#page-contactme">Contact Me</a></li>
        </ul>

        <button id="menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* content section */}
      <div className="content">
        <div className="container">
          <h4>Hello, my name is</h4>
          <h1>{typedName}</h1> {/* عرض النص المكتوب تدريجيًا */}
          <h3>I'm a <span>Full-stack</span> Developer</h3>
          <a href="/public/Ahmad_AlShammas.pdf" target='_blank'>
            <button className='button-cv'>Show CV</button>
          </a>
        </div>

        {/* social media icons */}
        <div className="socialicon">
          <a href="https://github.com/ahmad-alshammas" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.linkedin.com/in/ahmad-al-shammas-43b146327/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="mailto:ahmad.a.alsahmmas@gmial.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} /></a>
        </div>

        <div className="container-images">
          <img src={homeImage} alt="Programmer" />
        </div>
      </div>
    </section>
  );
}

export default Home;
