import {useState} from "react";
import {InView} from "react-intersection-observer";
import PropTypes from "prop-types";

const SlideUpContainer = ({children, className = "", delay = 0}) => {
    const [visible, setVisible] = useState(false);

    return (
        <InView
            delay={delay}
            as="div"
            className={`${className} my-5 px-2 w-full slide-in ${visible ? "animate-up" : ""}`}
            onChange={(inView) => setVisible(inView)}
        >
            <div className={`${visible ? "" : "hidden"}`}>
                {children}
            </div>
        </InView>
    )
}

SlideUpContainer.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    delay: PropTypes.number,
}

export default SlideUpContainer;