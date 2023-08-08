import PropTypes from "prop-types";
import HighlightContainer from "../highlightContainer.jsx";
import DynamicPanel from "./dynamicPanel.jsx";
import PanelTitle from "../panelTitle.jsx";

const ScrollPanelsWrapper = ({ scrollPanels, underlineColor = null }) => {
  const renderScrollPanels = scrollPanels?.map((panel, index) => {
    return (
      <HighlightContainer className="p-4" key={index} containerId={panel.title}>
        {!panel?.hideTitle ? (
          <PanelTitle title={panel?.title} colour={underlineColor} />
        ) : (
          ""
        )}
        <DynamicPanel panel={panel} />
      </HighlightContainer>
    );
  });

  return <div className="min-h-screen p-4">{renderScrollPanels}</div>;
};

export default ScrollPanelsWrapper;

ScrollPanelsWrapper.propTypes = {
  scrollPanels: PropTypes.array,
  underlineColor: PropTypes.string,
};
