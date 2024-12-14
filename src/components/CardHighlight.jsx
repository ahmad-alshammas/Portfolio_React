import PropTypes from "prop-types";

function CardHighlight(props){
    return(
        <>
            <div className="Highlightcard">
                <h3> {props.title} </h3>
            </div>
        </>
    )
}


CardHighlight.propTypes = {
    title : PropTypes.string.isRequired,
}
export default CardHighlight;