import { createContext, useState, useEffect } from "react";
import projects from "../data/projects";
const CarouselFilterContext = createContext("");
const CarouselFilterProvider = ({ children }) => {
  const [value, setValue] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    const tmpProjects = projects.filter((project) => {
      if (value === null) {
        return projects;
      }

      return project.technology.includes(value);
    });

    setFilteredProjects(tmpProjects);
  }, [value]);

  const updateValue = (newValue) => {
    setValue(newValue);
  };

  return (
    <CarouselFilterContext.Provider
      value={{ filteredProjects, value, updateValue }}
    >
      {children}
    </CarouselFilterContext.Provider>
  );
};

export { CarouselFilterContext, CarouselFilterProvider };
