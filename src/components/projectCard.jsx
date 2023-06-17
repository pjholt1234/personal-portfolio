import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

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

    useEffect(() => {
        if(images.length <= 0){
            return;
        }

        const intervalId = setInterval(() => {
            if(imageIndex >= images.length - 2){
                setImageIndex(0);
            } else {
                setImageIndex(imageIndex + 1);
            }

            setCurrentImage(images[imageIndex]);
        }, 5000)

        return () => clearInterval(intervalId);
    }, [imageIndex]);


    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const outputGitHubLink = () => {
        if(!gitHubLink) return null;
        return (
            <a className="mr-0 ml-auto" href={gitHubLink}>
                <i className="text-white text-xl fa-brands fa-github"></i>
            </a>
        );
    }

    const outputTechnologyList = () => {
        if(technology.length === 0) return null;


        var count = 0;
        const technologyList = technology.map((item) => {
            count ++;
            return (
                <li key={`${item}-${count}`}>{item}</li>
            );
        });

        return (
            <div>
                <h3>Technology:</h3>
                <ul>
                    {technologyList}
                </ul>
            </div>
        )
    }

    return (
        <div
            className="relative w-full overflow-hidden rounded-lg shadow-md h-[500px]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
                <img src={currentImage} alt="ProjectCard Image" className={`w-full h-full object-cover ${imgAlignment}`} />
                <div
                    className={`absolute inset-0 p-4 ${bgColor} bg-opacity-80 text-white transition-all ${
                        isHovered ? 'top-0' : 'top-[410px]'
                    }`}
                >
                    <div className="flex">
                        <h2>{title}</h2>
                        {outputGitHubLink()}
                    </div>
                    <h3 className="font-medium mb-3">{date}</h3>
                    <div className="h-full flex flex-wrap">
                        <p className="text-white my-auto">{description}</p>
                        {outputTechnologyList()}
                    </div>
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
}

export default ProjectCard;
