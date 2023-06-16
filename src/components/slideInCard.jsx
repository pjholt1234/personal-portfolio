import { InView } from 'react-intersection-observer';
import { useState } from 'react';
const SlideInCard = ({children, right = false, classes = ""}) => {
    const [ visible, setVisible ] = useState(false);

    var direction = 'left';

    if(right){
        direction = 'right';
    }

    return (
        <InView as="div" className={`${classes} my-5 px-2 w-full ${visible ? "animate-" + direction : ""}`} onChange={(inView) => setVisible(inView)}>
            <div className={`${visible ? "" : "hidden"}`}>
                {children}
            </div>
        </InView>
    )
};
export default SlideInCard;