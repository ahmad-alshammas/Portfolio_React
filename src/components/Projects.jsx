import CardProject from "./CardProject";


function Projects(){
    return(
        <>
            <section className="service" id="page-project">
            <h1 className="text-center">My <span>Projects</span></h1>
            <div className="box" id="padd">
               <CardProject name="Tayeb" description='The "Tayeb" website is a platform for food recipes built using React and Laravel. It allows users to create new recipes, edit existing ones, delete recipes, and view different recipes. The site provides an easy-to-use interface to manage food recipes.' urlRepo="https://github.com/Razanhroub/Tayeb_React_Laravel"/>
               <CardProject name="FitZone" description="The Fitzone project is a complete e-commerce website where users can buy player jerseys. It includes features like online payment and a shopping cart. The site was built using PHP and JS." urlRepo="https://github.com/shadi-alnkhatin/Ecommerce_Project_PHP_MYSQL"/>
               <CardProject name="FitMe" description="The FitMe website is a gym platform that showcases the names of trainers and the exercises they offer. It was built using HTML, CSS, and JS." urlRepo="https://github.com/sultan-bassam08/FitME_PROJECT_JAVASCRIPT"/>
           </div>
         </section>
        </>
    )
}


export default Projects;