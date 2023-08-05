import { createContext, useState } from "react";
import PropTypes from "prop-types";
const VisibleProjectPanelContext = createContext("");
const VisibleProjectPanelProvider = ({ children, navItems }) => {
  const [activePanels, setActivePanels] = useState(initActivePanels(navItems));

  const updateActivePanels = (panelId) => {
    setActivePanels((prevActivePanels) => ({
      ...prevActivePanels,
      [panelId]: !prevActivePanels[panelId],
    }));
  };

  return (
    <VisibleProjectPanelContext.Provider
      value={{ activePanels, updateActivePanels }}
    >
      {children}
    </VisibleProjectPanelContext.Provider>
  );
};

VisibleProjectPanelProvider.propTypes = {
  children: PropTypes.node,
  navItems: PropTypes.array,
};

const initActivePanels = (navItems) => {
  let activePanels = {};
  for (const item of navItems) {
    activePanels[item] = false;
  }
  return activePanels;
};

export { VisibleProjectPanelContext, VisibleProjectPanelProvider };
