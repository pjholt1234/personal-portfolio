import { useState } from 'react';

const ProjectCard = ({
    imageSrc,
    title,
    date,
    bgColor = "bg-black",
    gitHubLink = null,
    description = "",
    technology = [],
    imgAlignment = "",
    children
}) => {
    const [isHovered, setIsHovered] = useState(false);

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
                <img src={imageSrc} alt="ProjectCard Image" className={`w-full h-full object-cover ${imgAlignment}`} />
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

export default ProjectCard;
