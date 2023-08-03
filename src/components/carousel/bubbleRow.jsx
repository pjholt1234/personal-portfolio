import PropTypes from "prop-types";
import SlideInCard from "./slideInCard.jsx";

const BubbleRow = ({ children, slideInDirectionRight }) => {
  return (
    <SlideInCard right={slideInDirectionRight} triggerOnce={true}>
      <div className="w-full flex justify-center">{children}</div>
    </SlideInCard>
  );
};

BubbleRow.propTypes = {
  children: PropTypes.node,
  slideInDirectionRight: PropTypes.bool,
};

export default BubbleRow;
