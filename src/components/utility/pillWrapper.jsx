import PropTypes from "prop-types";
import Pill from "./pill.jsx";

const PillWrapper = ({ pills }) => {
  const renderedPills = pills?.map((pill, index) => {
    return (
      <Pill
        key={index}
        text={pill.text}
        className={pill.className}
        link={pill.link}
      />
    );
  });
  return <div className="flex space-x-2">{renderedPills}</div>;
};

export default PillWrapper;

PillWrapper.propTypes = {
  pills: PropTypes.array,
};
