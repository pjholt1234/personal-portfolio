import Title from "./components/title.jsx";
import SlideInCard from "./components/slideInCard.jsx";
import Timeline from "./components/timeline.jsx";
import Bio from "./components/bio";
import Carousel from "./components/carousel.jsx";
const App = () => {

    return (
        <div className="w-full">
            <Title />
            <div className="flex my-20">
                <div className="w-1/2">
                    <SlideInCard>
                        <Bio />
                    </SlideInCard>
                </div>
                <div className="w-1/2">
                    <SlideInCard right={true}>
                        <Timeline />
                    </SlideInCard>
                </div>
            </div>
            <Carousel className="flex my-5" />
        </div>
    );
};

export default App;