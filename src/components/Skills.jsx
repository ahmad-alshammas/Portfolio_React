import IconSkills from "./IconSkills";
import {faHtml5} from "@fortawesome/free-brands-svg-icons";
import {faCss3Alt} from "@fortawesome/free-brands-svg-icons";
import {faJs} from "@fortawesome/free-brands-svg-icons";
import {faPhp} from "@fortawesome/free-brands-svg-icons";
import {faLaravel} from "@fortawesome/free-brands-svg-icons";
import {faBootstrap} from "@fortawesome/free-brands-svg-icons";
import {faDatabase} from "@fortawesome/free-solid-svg-icons";



function Skills(){

    return(
        // <!-- section four: skills-->
       
        <section className="skills" id="page-skills">
            {/* <!-- className container-text me because the content the colum flexbox--> */}
            <div className="container-skills"> 
                <h1>my <span>skills</span></h1>
                <div className="box-skills">
         
                    <IconSkills icon={faHtml5} />
                    <IconSkills icon={faCss3Alt} />
                    <IconSkills icon={faJs} />
                    <IconSkills icon={faPhp} />
                    <IconSkills icon={faLaravel} />
                    <IconSkills icon={faBootstrap} />
                    <IconSkills icon={faDatabase} />

                </div>
            </div>
            <div className="container-image">
                <img src="images/skills.svg" alt="skills" title="skills" />
            </div>
        </section>
    )

}


export default Skills;