import Title from "./components/title.jsx";
import SlideInCard from "./components/slideInCard.jsx";
import Bio from "./components/bio";
import Carousel from "./components/carousel.jsx";
import BubbleWrapper from "./components/bubbleWrapper.jsx";
import Container from "./components/container.jsx";
import { CarouselFilterProvider } from "./hooks/CarouselFilterContext.jsx";
import TimelineWrapper from "./components/timeline/timelineWrapper.jsx";
import { EventSelectedProvider } from "./hooks/EventSelectedContext.jsx";
import EventInfoWrapper from "./components/timeline/eventInfoWrapper.jsx";
const App = () => {
  return (
    <div className="w-full">
      <Title />
      <Container className="h-[600px]">
        <div className="w-1/2">
          <SlideInCard triggerOnce={true}>
            <Bio />
          </SlideInCard>
        </div>
        <div className="w-1/2">
          <SlideInCard triggerOnce={true} right={true}>
            <EventSelectedProvider>
              <EventInfoWrapper />
              <TimelineWrapper />
            </EventSelectedProvider>
          </SlideInCard>
        </div>
      </Container>
      <CarouselFilterProvider>
        <Container className="overflow-hidden">
          <BubbleWrapper />
        </Container>
        <div className="py-3 px-10">
          <Carousel />
        </div>
      </CarouselFilterProvider>
    </div>
  );
};

export default App;
