import projects from "../data/projects.js";

const MobileProjectList = () => {
  const projectLinks = projects.map((project, index) => {
    return (
      <li key={index}>
        <a href={`/projects/${project.id}`} className="grid grid-cols-2 mb-1">
          <span className="font-bold">{project.title}</span>
          <span className="mr-0 ml-auto">{project.date}</span>
        </a>
      </li>
    );
  });

  return (
    <div>
      <div className="mt-5 flex justify-center">
        <div>
          <h2 className="mb-2">My Projects</h2>
          <ul>{projectLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default MobileProjectList;
