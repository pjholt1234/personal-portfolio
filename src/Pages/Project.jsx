import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import projects from "../data/projects.js";
import PageNotFound from "../components/pageNotFound.jsx";
import FeaturedLinks from "../components/utility/featuredLinks.jsx";
import ScrollPanelsWrapper from "../components/utility/panels/scrollPanelsWrapper.jsx";
import NavWrapper from "../components/utility/navWrapper.jsx";
import { VisiblePanelProvider } from "../hooks/VisiblePanelContext.jsx";
import TitleWithUnderline from "../components/utility/titleWithUnderline.jsx";
import IsometricSquares from "../components/project-page/IsometricSquares.jsx";
import StickyTwoColumnLayout from "../components/utility/stickyTwoColumnLayout.jsx";

const Project = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id === projectId) {
        setProject(projects[i]);
        break;
      }
    }
  }, [projectId]);

  if (project === null) {
    return <PageNotFound />;
  }

  let navItems = [];
  project?.scrollPanels?.map((panel) => {
    navItems.push(panel.title);
  });

  const leftPanel = () => {
    return (
      <div className="w-full">
        <div className="flex items-baseline">
          <TitleWithUnderline
            text={project?.title}
            underlineColour={project?.underlineColor}
          />
          <a className="ml-auto mr-0" href={project?.gitHubLink}>
            <i className="text-white text-4xl fa-brands fa-github hover:text-highlight-blue"></i>
          </a>
        </div>
        <span className="text-lg italic text-gray-300">{project?.date}</span>
        <FeaturedLinks links={project?.links} />
        <div className="hidden md:flex">
          <NavWrapper navItems={navItems} />
        </div>
        <div className="h-[300px] w-full flex justify-center">
          <IsometricSquares technologies={project.technology} />
        </div>
      </div>
    );
  };

  const rightPanel = () => {
    return (
      <ScrollPanelsWrapper
        scrollPanels={project?.scrollPanels}
        underlineColor={project?.underlineColor}
      />
    );
  };

  return (
    <VisiblePanelProvider navItems={navItems}>
      <StickyTwoColumnLayout
        leftPanel={leftPanel()}
        rightPanel={rightPanel()}
      />
    </VisiblePanelProvider>
  );
};

export default Project;
