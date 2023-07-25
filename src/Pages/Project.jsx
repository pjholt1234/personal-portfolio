import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import projects from "../data/projects.js";
import PageNotFound from "../components/PageNotFound.jsx";
import ProjectCard from "../components/projectCard.jsx";
import IsometricSquares from "../components/IsometricSquares.jsx";
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

  let technologies = project.technology.slice().reverse();
  return (
    <div className="grid grid-cols-2 w-full">
      <div className="col-span-1 p-5 w-full">
        <div className="flex items-baseline w-full">
          <h1>{project.title}</h1>
          <a className="ml-auto mr-0" href={project.gitHubLink}>
            <i className="text-white text-4xl fa-brands fa-github"></i>
          </a>
        </div>
        <h3 className="ml-auto mr-0 italic mb-4">{project.date}</h3>
        <div className="flex">
          <div className="w-1/2"></div>
          <div className="w-1/2">
            <IsometricSquares technologies={technologies} />
          </div>
        </div>
      </div>
      <div className="col-span-1 p-5"></div>
    </div>
  );
};

export default Project;
