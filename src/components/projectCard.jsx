import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { CarouselFilterContext } from "../hooks/CarouselFilterContext.jsx";

const ProjectCard = ({
  images = [],
  title,
  date,
  bgColor = "bg-black",
  gitHubLink = null,
  description = "",
  technology = [],
  imgAlignment = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [imageIndex, setImageIndex] = useState(0);
  const { value } = useContext(CarouselFilterContext);

  useEffect(() => {
    setCurrentImage(images[0]);
  }, [value]);

  useEffect(() => {
    if (images.length <= 0) {
      return;
    }

    const intervalId = setInterval(() => {
      if (imageIndex >= images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }

      setCurrentImage(images[imageIndex]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [imageIndex]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const outputGitHubLink = () => {
    if (!gitHubLink) return null;
    return (
      <a className="mr-0 ml-auto" href={gitHubLink}>
        <i className="text-white text-xl fa-brands fa-github"></i>
      </a>
    );
  };

  const outputTechnologyList = () => {
    if (technology.length === 0) return null;

    let count = 0;
    const technologyList = technology.map((item) => {
      count++;
      return <li key={`${item}-${count}`}>{item}</li>;
    });

    return (
      <div>
        <h3>Technology:</h3>
        <ul>{technologyList}</ul>
      </div>
    );
  };

  return (
    <div
      className="relative w-[400px] h-[400px] overflow-hidden rounded-lg shadow-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={currentImage}
        alt="ProjectCard Image"
        className={`w-full h-full object-cover ${imgAlignment}`}
      />
      <div
        className={`absolute inset-0 p-4 ${bgColor} bg-opacity-80 text-white transition-all ${
          isHovered ? "top-0" : "top-[310px]"
        }`}
      >
        <div className="flex">
          <h2>{title}</h2>
          {outputGitHubLink()}
        </div>
        <h3 className="font-medium mb-3">{date}</h3>
        <p className="text-white mb-3">{description}</p>
        {outputTechnologyList()}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  images: PropTypes.array,
  title: PropTypes.string,
  date: PropTypes.string,
  bgColor: PropTypes.string,
  gitHubLink: PropTypes.string,
  description: PropTypes.string,
  technology: PropTypes.array,
  imgAlignment: PropTypes.string,
};

export default ProjectCard;
