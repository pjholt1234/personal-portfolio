import {useState, useRef, useEffect, useContext} from 'react';
import ProjectCard from "./projectCard.jsx";
import ArrowLeft from "./icons/arrowLeft.jsx";
import ArrowRight from "./icons/arrowRight.jsx";
import {CarouselFilterContext} from "../hooks/CarouselFilterContext.jsx";

const Carousel = () => {
    const maxScrollWidth = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef(null);
    const { filteredProjects } = useContext(CarouselFilterContext);
    const movePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };


    const moveNext = () => {
        if (
            carousel.current !== null &&
            carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
        ) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    const isDisabled = (direction) => {
        if (direction === 'prev') {
            return currentIndex <= 0;
        }

        if (direction === 'next' && carousel.current !== null) {
            return (
                carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
            );
        }

        return false;
    };

    useEffect(() => {
        if (carousel !== null && carousel.current !== null) {
            carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
        }
    }, [currentIndex, filteredProjects]);

    useEffect(() => {
        maxScrollWidth.current = carousel.current
            ? carousel.current.scrollWidth - carousel.current.offsetWidth
            : 0;
    }, []);

    return (
        <div className="carousel my-12 mx-auto">
            <div className="relative overflow-hidden">
                <div className="flex justify-between absolute top left w-full h-full">
                    <button
                        onClick={movePrev}
                        className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled('prev')}
                    >
                        <ArrowLeft />
                        <span className="sr-only">Prev</span>
                    </button>
                    <button
                        onClick={moveNext}
                        className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled('next')}
                    >
                        <ArrowRight />
                        <span className="sr-only">Next</span>
                    </button>
                </div>
                <div
                    ref={carousel}
                    className="carousel-container relative flex gap-4 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
                >
                    {filteredProjects.map((project, index) => {
                        return (
                            <div
                                key={index}
                            >
                                <ProjectCard
                                    images={project.images}
                                    title={project.title}
                                    date={project.date}
                                    bgColor={project.bgColor}
                                    gitHubLink={project.gitHubLink}
                                    description={project.description}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Carousel;