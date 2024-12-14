import aboutImage from "../assets/images/Developer activity.svg";

function AboutUs(){
    return(
        <>

        {/* <!--section two: about us--> */}
        <section className="about" id="page-about">
            <div className="container-image">
                <img src={aboutImage} alt="programer" title="programmer" />
            </div>
            {/* <!-- className container-text me because the content the colum flexbox--> */}
            <div className="container-text">
                <h1>About Me</h1>
                <h5><span>Full-stack </span>Developer</h5>
                <p> I am currently training to become a Full Stack Developer,
                    focusing on both front-end and back-end development. 
                    I am learning key technologies such as HTML, CSS, JavaScript,
                    and back-end languages like PHP. I am passionate about building 
                    web applications and gaining hands-on experience to create 
                    efficient and user-friendly solutions </p>
                    
            </div>
        </section>

        </>
    )
}

export default AboutUs;