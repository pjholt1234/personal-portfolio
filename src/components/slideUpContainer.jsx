import {useState, useEffect} from "react";
import {InView} from "react-intersection-observer";

const SlideUpContainer = ({children, classes = "", delay = 0}) => {
    const [visible, setVisible] = useState(false);

    return (
        <InView
            triggerOnce={true}
            delay={delay}
            as="div"
            className={`${classes} my-5 px-2 w-full slide-in ${visible ? "animate-up" : ""}`}
            onChange={(inView) => setVisible(inView)}
        >
            <div className={`${visible ? "" : "hidden"}`}>
                {children}
            </div>
        </InView>
    )
}

export default SlideUpContainer;