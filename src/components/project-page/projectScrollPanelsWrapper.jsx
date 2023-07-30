import PropTypes from "prop-types";
import HighlightContainer from "./highlightContainer.jsx";
import IsometricSquares from "./IsometricSquares.jsx";
import Gallery from "../gallery.jsx";
import SplitStringToParagraphs from "../spiltStringToParagraphs.jsx";

const ProjectScrollPanelsWrapper = ({ project }) => {
  const additionalScrollPanels = project?.scrollPanels?.map((panel, index) => {
    return (
      <HighlightContainer className="p-4" key={index}>
        <h2>{panel?.title}</h2>
        <SplitStringToParagraphs text={panel?.text} />
      </HighlightContainer>
    );
  });

  return (
    <div className="w-1/2 min-h-screen p-4">
      <HighlightContainer className="mb-10 p-4">
        <h2>Description</h2>
        <p>{project?.longDescription ?? project?.description}</p>
      </HighlightContainer>
      <HighlightContainer className="h-[350px] w-full flex justify-center p-4">
        <IsometricSquares technologies={project.technology} />
      </HighlightContainer>
      <HighlightContainer className="flex mb-10 p-10">
        <Gallery images={project?.images} />
      </HighlightContainer>
      {additionalScrollPanels}
    </div>
  );
};

export default ProjectScrollPanelsWrapper;

ProjectScrollPanelsWrapper.propTypes = {
  project: PropTypes.object,
};
