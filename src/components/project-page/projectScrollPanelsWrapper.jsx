import PropTypes from "prop-types";
import HighlightContainer from "./highlightContainer.jsx";
import IsometricSquares from "./IsometricSquares.jsx";
import Gallery from "../gallery.jsx";
import SplitStringToParagraphs from "../spiltStringToParagraphs.jsx";

const ProjectScrollPanelsWrapper = ({ project }) => {
  const additionalScrollPanels = project?.scrollPanels?.map((panel, index) => {
    return (
      <HighlightContainer className="p-4" key={index} containerId={panel.title}>
        <h2>{panel?.title}</h2>
        <SplitStringToParagraphs text={panel?.text} />
      </HighlightContainer>
    );
  });

  return (
    <div className="min-h-screen p-4">
      <HighlightContainer className="mb-10 p-4" containerId="Description">
        <h2>Description</h2>
        <p>{project?.longDescription ?? project?.description}</p>
      </HighlightContainer>
      <HighlightContainer className="w-full p-4" containerId="Tech Stack">
        <h2>Tech Stack</h2>
        <div className="h-[300px] w-full flex justify-center">
          <IsometricSquares technologies={project.technology} />
        </div>
      </HighlightContainer>
      {additionalScrollPanels}
    </div>
  );
};

export default ProjectScrollPanelsWrapper;

ProjectScrollPanelsWrapper.propTypes = {
  project: PropTypes.object,
};
