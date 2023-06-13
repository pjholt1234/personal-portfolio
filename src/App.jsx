import Title from "./components/title.jsx";
import SlideInCard from "./components/slideInCard.jsx";
import Timeline from "./components/timeline.jsx";
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
            <div className="w-1/2 mr-0 ml-auto">
                <SlideInCard right={true}>
                    <Timeline events={events} />
                </SlideInCard>
            </div>
        </div>
    );
};

export default App;