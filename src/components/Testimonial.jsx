import CardTestimonial from "./CardTestimonial";
import mohammdImage from '../assets/images/mohammad.jpg';
import hamzaImage from '../assets/images/Hamza.jpg';
import samiImage from '../assets/images/sami.jpg';

function Testimonial(){
    return(
        <>
                {/* <!-- section five: Testimonial--> */}
     
     <section className="Testimonial" id="page-testimonial">
         <h1 className="text-center">Testimonial</h1>
        <div className="Testimonialbox">

                <CardTestimonial url={mohammdImage} name="Mohmmad Qadomi" description="Exceptional developer! Delivered high-quality code and was great to work with."/>
                <CardTestimonial url={hamzaImage} name="Hamza Zamil" description="Fast, efficient, and knowledgeable. The project came out perfectly"/>
                <CardTestimonial url={samiImage} name="Sami Yassen" description="Professional, reliable, and skilled in both front and back end."/>

         </div>
      </section>
        </>
    )
}


export default Testimonial;