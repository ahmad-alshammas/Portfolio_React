import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";


function IconSkills(props){
    return(
        <div>
            <FontAwesomeIcon icon={props.icon} />
        </div>
    )
}


IconSkills.propTypes = {
    icon : PropTypes.object.isRequired,
}

export default IconSkills;