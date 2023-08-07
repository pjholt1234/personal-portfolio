import PropTypes from "prop-types";

const Pill = ({ className = null, text, link = null }) => {
  if (link === null) {
    return (
      <span
        className={`${className} rounded p-1 bg-highlight-blue text-gray-700`}
      >
        {text}
      </span>
    );
  }
};

export default Pill;

Pill.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
};
