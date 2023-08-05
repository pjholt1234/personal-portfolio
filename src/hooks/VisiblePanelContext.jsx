import { createContext, useState } from "react";
import PropTypes from "prop-types";
const VisiblePanelContext = createContext("");
const VisiblePanelProvider = ({ children, navItems }) => {
  const [activePanels, setActivePanels] = useState(initPanels(navItems));

  const updateActivePanels = (panelId) => {
    setActivePanels((prevActivePanels) => ({
      ...prevActivePanels,
      [panelId]: !prevActivePanels[panelId],
    }));
  };

  return (
    <VisiblePanelContext.Provider value={{ activePanels, updateActivePanels }}>
      {children}
    </VisiblePanelContext.Provider>
  );
};

VisiblePanelProvider.propTypes = {
  children: PropTypes.node,
  navItems: PropTypes.array,
};

const initPanels = (navItems) => {
  let activePanels = {};
  for (const item of navItems) {
    activePanels[item] = false;
  }
  return activePanels;
};

export { VisiblePanelContext, VisiblePanelProvider };
