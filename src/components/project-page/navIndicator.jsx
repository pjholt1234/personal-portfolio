import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import { VisibleProjectPanelContext } from "../../hooks/VisibleProjectPanelContext.jsx";

const NavIndicator = ({ title }) => {
  const { activePanels } = useContext(VisibleProjectPanelContext);

  useEffect(() => {
    console.log(activePanels);
  }, [activePanels]);

  const width = activePanels[title] ? "w-[100px]" : "w-[50px]";
  return (
    <div className="flex items-center">
      <hr className={`${width} mr-2 border-2`}></hr>
      <span>{title}</span>
    </div>
  );
};

export default NavIndicator;

NavIndicator.propTypes = {
  title: PropTypes.string,
  active: PropTypes.bool,
};
