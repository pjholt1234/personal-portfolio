import PropTypes from "prop-types";

const ImagePanel = ({ panel }) => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={panel?.src}
        alt={panel?.alt}
        className={`${panel?.properties} block`}
      />
    </div>
  );
};

export default ImagePanel;

ImagePanel.propTypes = {
  panel: PropTypes.object,
};
