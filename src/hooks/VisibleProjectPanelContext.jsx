import { createContext, useState } from "react";
import PropTypes from "prop-types";
const VisibleProjectPanelContext = createContext("");
const VisibleProjectPanelProvider = ({ children }) => {
  const [visiblePanel, setVisiblePanel] = useState(null);
  const updateVisiblePanel = (newEvent) => {
    setVisiblePanel(newEvent);
  };

  return (
    <VisibleProjectPanelContext.Provider
      value={{ visiblePanel, updateVisiblePanel }}
    >
      {children}
    </VisibleProjectPanelContext.Provider>
  );
};

VisibleProjectPanelProvider.propTypes = {
  children: PropTypes.node,
};

export { VisibleProjectPanelContext, VisibleProjectPanelProvider };
