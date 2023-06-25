import Title from "./components/title.jsx";
import SlideInCard from "./components/slideInCard.jsx";
import Timeline from "./components/timeline.jsx";
import Bio from "./components/bio";
import Carousel from "./components/carousel.jsx";
import BubbleWrapper from "./components/bubbleWrapper.jsx";
import Container from "./components/container.jsx";
const App = () => {

    return (
        <div className="w-full">
            <Title />
            <Container>
                <div className="w-1/2">
                    <SlideInCard triggerOnce={true}>
                        <Bio />
                    </SlideInCard>
                </div>
                <div className="w-1/2">
                    <SlideInCard right={true} triggerOnce={true}>
                        <Timeline />
                    </SlideInCard>
                </div>
            </Container>
            <Container className="overflow-hidden">
                <BubbleWrapper />
            </Container>
            <div className="py-3 px-10">
                <Carousel />
            </div>
        </div>
    );
};

export default App;