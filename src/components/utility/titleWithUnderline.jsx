import PropTypes from "prop-types";

const TitleWithUnderline = ({
  className,
  text,
  underlineColour,
  tag = null,
}) => {
  const DynamicTag = tag || "h1";

  return (
    <DynamicTag>
      <span className={`thick-underline ${underlineColour} ${className ?? ""}`}>
        {text}
      </span>
    </DynamicTag>
  );
};

export default TitleWithUnderline;

TitleWithUnderline.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  underlineColour: PropTypes.string,
  tag: PropTypes.string,
};
