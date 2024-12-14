import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from "prop-types";

function CardService(props){
    return(
        <>
            <div className="card">
                    
                    <FontAwesomeIcon icon={props.icon} className="card-icon"/>
                    <h5>{props.title}</h5>
                    <p>{props.description}</p>
            </div>
        </>
    )
}

CardService.propTypes = {
    icon : PropTypes.object.isRequired, 
    title : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
}


export default CardService;