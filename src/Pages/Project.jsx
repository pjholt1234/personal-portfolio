import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import projects from "../data/projects.js";
import PageNotFound from "../components/pageNotFound.jsx";
import IsometricSquares from "../components/IsometricSquares.jsx";
import Gallery from "../components/gallery.jsx";
import SplitStringToParagraphs from "../components/spiltStringToParagraphs.jsx";
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

  const technologies = project.technology.slice().reverse();

  const renderLinks = project?.links?.map((link, index) => {
    const icon = link?.icon;
    return (
      <a
        key={`${link.text}-${index}`}
        href={link.link}
        className="text-lg flex items-center"
      >
        {icon != null ? <i className={`${icon} w-7`}></i> : ""}
        {link.text}
      </a>
    );
  });

  const hasReflections = () => {
    if (!project?.hasReflections) {
      return false;
    }

    if (project?.reflections === "" || project?.reflections === null) {
      return false;
    }

    return true;
  };

  const rows = hasReflections() ? "grid-rows-2" : "grid-rows-1";
  const galleryRowSpan = hasReflections()
    ? "row-span-2 items-center"
    : "row-span-1";

  return (
    <div className={`grid grid-cols-2 w-full ${rows}`}>
      <div className="col-span-1 p-5">
        <div className="flex items-baseline">
          <h1>{project?.title}</h1>
          <a className="ml-auto mr-0" href={project?.gitHubLink}>
            <i className="text-white text-4xl fa-brands fa-github"></i>
          </a>
        </div>
        <div className="flex">
          <div>
            <h3 className="ml-auto mr-0 italic">{project?.date}</h3>
            <div className="mt-5 flex overflow-wrap space-x-4">
              {renderLinks}
            </div>
            <p className="mt-5">
              {project?.longDescription ?? project?.description}
            </p>
          </div>
          <div className="flex ml-10">
            <IsometricSquares technologies={technologies} />
          </div>
        </div>
      </div>
      <div className={`flex col-span-1 p-10 ${galleryRowSpan}`}>
        <Gallery images={project?.images} />
      </div>
      {hasReflections() ? (
        <div className="col-span-1 p-5">
          <h2>Reflections</h2>
          <SplitStringToParagraphs text={project?.reflections} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Project;
