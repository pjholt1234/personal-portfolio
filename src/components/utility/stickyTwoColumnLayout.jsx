import PropTypes from "prop-types";

const StickyTwoColumnLayout = ({ leftPanel, rightPanel }) => {
  return (
    <div className="md:grid md:grid-cols-2">
      <div className="max-h-screen md:sticky top-0 left-0 w-full px-12 items-center h-full w-full flex">
        {leftPanel}
      </div>
      {rightPanel}
    </div>
  );
};

export default StickyTwoColumnLayout;

StickyTwoColumnLayout.propTypes = {
  leftPanel: PropTypes.node,
  rightPanel: PropTypes.node,
};
