import PropTypes from "prop-types";

const SplitStringToParagraphs = ({ text = null }) => {
  if (text === null) {
    return;
  }

  const paragraphs = text.split("\n").map((paragraph, index) => (
    <p className="mb-2" key={index}>
      {paragraph}
    </p>
  ));

  return <>{paragraphs}</>;
};

export default SplitStringToParagraphs;

SplitStringToParagraphs.propTypes = {
  text: PropTypes.string,
};
