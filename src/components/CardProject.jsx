import PropTypes from "prop-types";

function CardProject(props){
    return(
        <div className="card" >
            <h3>{props.name}</h3>
            <button className="button-project"> <a href={props.urlRepo} target="_blank">Show Project</a> </button>
            <p>{props.description}</p>
        </div>
    )
}

CardProject.propTypes = {
    name : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    urlRepo : PropTypes.string.isRequired,
}

export default CardProject;