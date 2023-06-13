import { InView } from 'react-intersection-observer';
import { useState } from 'react';
const SlideInCard = ({children, right = false}) => {
    const [ visible, setVisible ] = useState(false);

    var direction = 'left';

    if(right){
        direction = 'right';
    }

    return (
        <InView as="div" className={`my-2 w-full ${visible ? "animate-" + direction : ""}`} onChange={(inView) => setVisible(inView)}>
            {children}
        </InView>
    )
};
export default SlideInCard;