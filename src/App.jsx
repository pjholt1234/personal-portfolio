import Title from "./components/title.jsx";
import SlideInCard from "./components/slideInCard.jsx";
import Timeline from "./components/timeline.jsx";
import Bio from "./components/bio";
import Carousel from "./components/carousel.jsx";
import ProjectCard from "./components/projectCard.jsx";
import SlideUpContainer from "./components/slideUpContainer.jsx";
import DissertationImg from './assets/dissertation1.jpg';
import NotionSteamAppImg from './assets/notion-steam-app.png';
const App = () => {
    const events = [
        {
            "heading": "University of the West of England",
            "subheading": "Sept 2018 - June 2021",
            "text": "First Class Bachelor of Science, Business Computing",
            "color": "bg-blue-800",
            "icon": "fa-solid fa-graduation-cap"
        },
        {
            "heading": "Lightflows",
            "subheading": "Oct 2021 - Present",
            "text": "Junior Web Developer",
            "color": "bg-red-700",
            "icon": "fa-sharp fa-solid fa-briefcase"
        },
    ]

    return (
        <div className="w-full">
            <Title />
            <div className="flex">
                <div className="w-1/2">
                    <SlideInCard>
                        <Bio />
                    </SlideInCard>
                </div>
                <div className="w-1/2">
                    <SlideInCard right={true}>
                        <Timeline events={events} />
                    </SlideInCard>
                </div>
            </div>
            <div>
                <Carousel>
                    <SlideUpContainer classes="w-1/3 m-1">
                        <ProjectCard
                            imageSrc={DissertationImg}
                            title="Final Year Dissertation"
                            date="Oct 2020 - April 2021"
                            bgColor="bg-blue-800"
                            gitHubLink="https://github.com/pjholt1234/ExerciseWebCompanion"
                            description="My final year dissertation was my first large scale web application. The aim of the
                            project was to create a tool for planning, scheduling and tracking workouts."
                            technology={[
                                'PHP',
                                'Javascript',
                                'JQuery',
                                'MySql',
                                'CSS'
                            ]}
                        />
                    </SlideUpContainer>
                    <SlideUpContainer classes="w-1/3 m-1">
                        <ProjectCard
                            imageSrc={NotionSteamAppImg}
                            title="Steam Market Price Tracker"
                            date="Mar 2023 - May 2023"
                            bgColor="bg-red-700"
                            gitHubLink="https://github.com/pjholt1234/notion-steam-app"
                            description="This project provides an interface for entering steam item purchases + sales, and calculates profit based on item price data.
                            Additional, it allows you to export to a notion table. The aim of the project practice using laravel livewire and the TALL stack."
                            technology={[
                                'PHP',
                                'Javascript',
                                'Laravel',
                                'Livewire',
                                'Tailwind',
                                'Alpine JS'
                            ]}
                            imgAlignment="object-left-top"
                        />
                    </SlideUpContainer>

                </Carousel>
            </div>
        </div>
    );
};

export default App;