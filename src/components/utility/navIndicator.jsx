import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import { VisiblePanelContext } from "../../hooks/VisiblePanelContext.jsx";

const NavIndicator = ({ title }) => {
  const { activePanels } = useContext(VisiblePanelContext);
  const scrollToTargetElement = () => {
    document.getElementById(title).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {}, [activePanels]);

  const hrStying = activePanels[title]
    ? "shadow-lg bg-gray-200 w-[100px] h-[3px]"
    : "w-[75px] h-[1px] bg-gray-400";

  const titleStyling = activePanels[title]
    ? "font-bold text-white"
    : "text-gray-400";

  return (
    <div className="flex items-center my-2" onClick={scrollToTargetElement}>
      <span className={`${hrStying} mr-2 cursor-pointer`}></span>
      <span
        className={`${titleStyling} cursor-pointer hover:text-highlight-blue`}
      >
        {title}
      </span>
    </div>
  );
};

export default NavIndicator;

NavIndicator.propTypes = {
  title: PropTypes.string,
  active: PropTypes.bool,
};
