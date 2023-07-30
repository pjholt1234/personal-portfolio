import PropTypes from "prop-types";

const HighlightContainer = ({ children, className }) => {
  return (
    <div
      className={`rounded-lg hover:bg-blue-300 hover:bg-opacity-10 ${className}`}
    >
      {children}
    </div>
  );
};

export default HighlightContainer;

HighlightContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
