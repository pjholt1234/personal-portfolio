import PropTypes from "prop-types";

const TechnologyBubble = ({name, description, logo, bgColor}) => {
    return (
        <div className="flex">
            <div className={`grow-left rounded-full bg-blue-500 flex justify-center items-center ${bgColor}`}>
                <i className={`${logo} text-4xl mr-auto`}></i>
                <div className="hidden-child">
                    I am some example text explain the technology
                </div>
            </div>
        </div>
    )
}

TechnologyBubble.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    logo: PropTypes.string,
    bgColor: PropTypes.string,
}

export default TechnologyBubble;