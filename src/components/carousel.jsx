import PropTypes from "prop-types";
import ProjectCard from "../components/projectCard.jsx";
import SlideUpContainer from "../components/slideUpContainer.jsx";
import projects from "../data/projects.js";


const Carousel = () => {
    const projectCards = projects.map((project) => {
        return (
            <SlideUpContainer key={project.title} className="w-1/3 p-1">
                <ProjectCard
                    images={project.images}
                    title={project.title}
                    date={project.date}
                    bgColor={project.bgColor}
                    gitHubLink={project.gitHubLink}
                    description={project.description}
                    technology={project.technology}
                    imgAlignment={project.imgAlignment}
                />
            </SlideUpContainer>
        )
    });

    return (
        <div className="flex w-full mx-auto">
            {projectCards}
        </div>
    );
}


Carousel.propTypes = {
    className: PropTypes.string,
}

export default Carousel;