import CardTestimonial from "./CardTestimonial";

function Testimonial(){
    return(
        <>
                {/* <!-- section five: Testimonial--> */}
     
     <section className="Testimonial" id="page-testimonial">
         <h1 className="text-center">Testimonial</h1>
        <div className="Testimonialbox">

                <CardTestimonial url="/public/images/mohammad.jpg" name="Mohmmad Qadomi" description="Exceptional developer! Delivered high-quality code and was great to work with."/>
                <CardTestimonial url="/public/images/Hamza.jpg" name="Hamza Zamil" description="Fast, efficient, and knowledgeable. The project came out perfectly"/>
                <CardTestimonial url="/public/images/sami.jpg" name="Sami Yassen" description="Professional, reliable, and skilled in both front and back end."/>

         </div>
      </section>
        </>
    )
}


export default Testimonial;