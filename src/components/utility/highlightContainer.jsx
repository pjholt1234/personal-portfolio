import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { VisiblePanelContext } from "../../hooks/VisiblePanelContext.jsx";
import { InView } from "react-intersection-observer";

const HighlightContainer = ({ children, className, containerId }) => {
  const { updateActivePanels } = useContext(VisiblePanelContext);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    updateActivePanels(containerId);
  }, [visible]);

  return (
    <div className="min-h-screen flex items-center" id={containerId}>
      <InView
        as="div"
        className={`rounded-xl hover:bg-blue-200 hover:bg-opacity-10 hover:shadow-lg w-full ${className}`}
        onChange={(inView) => setVisible(inView)}
      >
        {children}
      </InView>
    </div>
  );
};

export default HighlightContainer;

HighlightContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  containerId: PropTypes.string,
};
