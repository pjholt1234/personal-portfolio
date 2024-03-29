import { InView } from "react-intersection-observer";
import { useState } from "react";
import PropTypes from "prop-types";
const SlideInCard = ({
  children,
  right = false,
  className = "",
  triggerOnce = false,
}) => {
  const [visible, setVisible] = useState(false);

  var direction = "left";

  if (right) {
    direction = "right";
  }

  return (
    <InView
      as="div"
      className={`${className} ${visible ? "animate-" + direction : ""}`}
      onChange={(inView) => setVisible(inView)}
      triggerOnce={triggerOnce}
    >
      <div className={`${visible ? "" : "hidden"}`}>{children}</div>
    </InView>
  );
};

SlideInCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  right: PropTypes.bool,
  triggerOnce: PropTypes.bool,
};

export default SlideInCard;
