import CardService from "./CardService";
import {faLaptopCode} from '@fortawesome/free-solid-svg-icons';
import {faDatabase} from '@fortawesome/free-solid-svg-icons';
import {faLaravel} from '@fortawesome/free-brands-svg-icons';



function Service(){
    return(
        // <!-- section Three: service-->
        <>
        <section className="service" id="page-service">
           <h1 className="text-center">My <span>Services</span></h1>
           <div className="box">
        
               <CardService icon={faLaptopCode}  title="Basic Website Development" description="Designing and developing simple websites using HTML, CSS, and JavaScript, with interactive elements using Bootstrap."/>
               <CardService icon={faDatabase} title="Database Management with SQL" description="Working with databases and managing data using SQL, creating queries, and integrating them with web applications for dynamic content."/>
               <CardService icon={faLaravel} title="Dynamic Website Development" description="Developing dynamic websites using PHP and Laravel, with basic features like forms and user registration."/>
               
           </div>
       </section> 
        </>
    )
}

export default Service;