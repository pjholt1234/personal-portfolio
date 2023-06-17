import { InView } from 'react-intersection-observer';
import { useState } from 'react';
import PropTypes from "prop-types";
const SlideInCard = ({children, right = false, className = ""}) => {
    const [ visible, setVisible ] = useState(false);

    var direction = 'left';

    if(right){
        direction = 'right';
    }

    return (
        <InView as="div" className={`${className} my-5 px-2 w-full ${visible ? "animate-" + direction : ""}`} onChange={(inView) => setVisible(inView)}>
            <div className={`${visible ? "" : "hidden"}`}>
                {children}
            </div>
        </InView>
    )
};

SlideInCard.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    right: PropTypes.string,
}

export default SlideInCard;