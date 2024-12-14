import CardHighlight from "./CardHighlight";

function Highlight(){
    return(
        <section className="Highlight" id="page-highlight">
        <h1 className="text-center">Highlight</h1>
       <div className="Highlightbox">
           
           <CardHighlight title="I love programming very much and I aspire to become a full-stack web developer." />
           <CardHighlight title="I am collaborative and enjoy working with a team." />
           <CardHighlight title="I can work under pressure." />
           <CardHighlight title="I am a social person with good manners." />
       </div>
     </section>
    )
}


export default Highlight;