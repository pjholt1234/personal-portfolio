import PropTypes from "prop-types";
import HighlightContainer from "../utility/highlightContainer.jsx";
import DynamicPanel from "../utility/panels/dynamicPanel.jsx";

const EventScrollPanelsWrapper = ({ event }) => {
  const additionalScrollPanels = event?.scrollPanels?.map((panel, index) => {
    return (
      <HighlightContainer className="p-4" key={index} containerId={panel.title}>
        {panel?.hideTitle ? "" : <h2>{panel?.title}</h2>}
        <DynamicPanel panel={panel} />
      </HighlightContainer>
    );
  });

  return (
    <div className="min-h-screen p-4">
      <HighlightContainer className="mb-10 p-4" containerId="Description">
        <h2>Description</h2>
        <p className="text-gray-300">
          {event?.longDescription ?? event?.description}
        </p>
      </HighlightContainer>
      {additionalScrollPanels}
    </div>
  );
};

export default EventScrollPanelsWrapper;

EventScrollPanelsWrapper.propTypes = {
  event: PropTypes.object,
};
