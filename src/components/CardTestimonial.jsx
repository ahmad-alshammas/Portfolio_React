import PropTypes from "prop-types";

function CardTestimonial(props){
    return(
        <div className="Testimonialcard">
            <img src={props.url} width="100px" height="100px"/>
            <h5>{props.name}</h5>
            <p>{props.description}</p>
        </div>
    )
}

CardTestimonial.propTypes = {
    url : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
}

export default CardTestimonial;