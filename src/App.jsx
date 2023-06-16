import Title from "./components/title.jsx";
import SlideInCard from "./components/slideInCard.jsx";
import Timeline from "./components/timeline.jsx";
import Bio from "./components/bio";
import Carousel from "./components/carousel.jsx";
import Card from "./components/card.jsx";
import SlideUpContainer from "./components/slideUpContainer.jsx";
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
                        <Card classes="bg-red-500">
                            <div className="flex">
                                <h2 className="text-white">Final Year Dissertation</h2>
                                <a className="mr-0 ml-auto" href="https://github.com/pjholt1234/ExerciseWebCompanion">
                                    <i className="text-white text-xl fa-brands fa-github"></i>
                                </a>
                            </div>

                            <h3 className="text-white mb-1">Dec 2020 - Apr 2021</h3>
                            <p className="text-white mb-1">
                                My final year dissertation was my first large scale web application. The aim of the
                                project was to create a web application for planning workouts.
                            </p>
                            <h2>Technology:</h2>
                            <ul>
                                <li>PHP</li>
                                <li>Javascript</li>
                                <li>Jquery</li>
                                <li>Vanilla CSS</li>
                                <li>MySql</li>
                            </ul>
                        </Card>
                    </SlideUpContainer>
                    <SlideUpContainer delay={500} classes="w-1/3 m-1">
                        <Card classes="bg-green-500">
                            <div className="flex">
                                <h2 className="text-white">Steam Item Market Tracker</h2>
                                <a className="mr-0 ml-auto" href="https://github.com/pjholt1234/notion-steam-app">
                                    <i className="text-white text-xl fa-brands fa-github"></i>
                                </a>
                            </div>
                            <h3 className="text-white mb-1">Mar 2023 - May 2023</h3>
                            <p className="text-white mb-1">
                                I started this project to practice the livewire and the TALL stack in general.
                                This project integrates with a web steam market api, provides an interface for
                                adding purchases and sales and has the option to push the data to notion.
                            </p>
                            <h2>Technology:</h2>
                            <ul>
                                <li>PHP</li>
                                <li>Laravel</li>
                                <li>Livewire</li>
                                <li>Tailwind</li>
                            </ul>
                        </Card>
                    </SlideUpContainer>
                </Carousel>
            </div>
        </div>
    );
};

export default App;