import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import projects from "../data/projects.js";
import PageNotFound from "../components/pageNotFound.jsx";
import ProjectLinks from "../components/project-page/projectLinks.jsx";
import ProjectScrollPanelsWrapper from "../components/project-page/projectScrollPanelsWrapper.jsx";
import ProjectNavWrapper from "../components/project-page/projectNavWrapper.jsx";
import { VisibleProjectPanelProvider } from "../hooks/VisibleProjectPanelContext.jsx";
import Gallery from "../components/gallery.jsx";
import TitleWithUnderline from "../components/utility/titleWithUnderline.jsx";

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

  let additionalNavItems = [];
  project?.scrollPanels?.map((panel) => {
    additionalNavItems.push(panel.title);
  });

  const navItems = ["Description", "Tech Stack", ...additionalNavItems];

  return (
    <VisibleProjectPanelProvider navItems={navItems}>
      <div className="md:grid md:grid-cols-2">
        <div className="max-h-screen md:sticky top-0 left-0 w-full px-12 items-center h-full flex">
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
            <span className="text-lg italic text-gray-300">
              {project?.date}
            </span>
            <ProjectLinks links={project?.links} />
            <div className="hidden md:flex">
              <ProjectNavWrapper navItems={navItems} />
            </div>
            <Gallery
              images={project?.images}
              borderColor={project?.borderColor}
            />
          </div>
        </div>
        <ProjectScrollPanelsWrapper project={project} />
      </div>
    </VisibleProjectPanelProvider>
  );
};

export default Project;
