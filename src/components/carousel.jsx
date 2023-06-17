import PropTypes from "prop-types";

const Carousel = ({className, children}) => {
    return (
        <div className={`${className} flex`}>
            {children}
        </div>
    )
}

Carousel.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export default Carousel;