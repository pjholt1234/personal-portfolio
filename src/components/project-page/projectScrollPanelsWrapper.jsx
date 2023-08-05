import PropTypes from "prop-types";
import HighlightContainer from "./highlightContainer.jsx";
import IsometricSquares from "./IsometricSquares.jsx";
import SplitStringToParagraphs from "../utility/spiltStringToParagraphs.jsx";
import TitleWithUnderline from "../utility/titleWithUnderline.jsx";
import Gallery from "../gallery.jsx";

const ProjectScrollPanelsWrapper = ({ project }) => {
  const additionalScrollPanels = project?.scrollPanels?.map((panel, index) => {
    return (
      <HighlightContainer className="p-4" key={index} containerId={panel.title}>
        <TitleWithUnderline
          text={panel?.title}
          underlineColour={project?.underlineColor}
          tag="h2"
        />
        <SplitStringToParagraphs className="text-gray-300" text={panel?.text} />
      </HighlightContainer>
    );
  });

  return (
    <div className="min-h-screen p-4">
      <HighlightContainer className="mb-10 p-4" containerId="Description">
        <TitleWithUnderline
          text="Description"
          underlineColour={project?.underlineColor}
          tag="h2"
        />
        <p className="text-gray-300">
          {project?.longDescription ?? project?.description}
        </p>
      </HighlightContainer>
      <HighlightContainer className="w-full p-4" containerId="Gallery">
        <TitleWithUnderline
          text="Gallery"
          underlineColour={project?.underlineColor}
          tag="h2"
        />
        <Gallery images={project?.images} borderColor={project?.borderColor} />
      </HighlightContainer>
      {additionalScrollPanels}
    </div>
  );
};

export default ProjectScrollPanelsWrapper;

ProjectScrollPanelsWrapper.propTypes = {
  project: PropTypes.object,
};
