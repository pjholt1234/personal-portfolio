import TitleWithUnderline from "./titleWithUnderline.jsx";
import PropTypes from "prop-types";

const PanelTitle = ({ title, colour = null }) => {
  if (!title) {
    return <h2>{title}</h2>;
  }

  return <TitleWithUnderline text={title} underlineColour={colour} tag="h2" />;
};

export default PanelTitle;

PanelTitle.propTypes = {
  title: PropTypes.string,
  colour: PropTypes.string,
};
