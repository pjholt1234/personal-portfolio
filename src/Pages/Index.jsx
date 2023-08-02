import Title from "../components/title.jsx";
import Container from "../components/container.jsx";
import SlideInCard from "../components/slideInCard.jsx";
import Bio from "../components/bio.jsx";
import { EventSelectedProvider } from "../hooks/EventSelectedContext.jsx";
import EventInfoWrapper from "../components/timeline/eventInfoWrapper.jsx";
import TimelineWrapper from "../components/timeline/timelineWrapper.jsx";
import { CarouselFilterProvider } from "../hooks/CarouselFilterContext.jsx";
import BubbleWrapper from "../components/bubbleWrapper.jsx";
import Carousel from "../components/carousel.jsx";
import MobileProjectList from "../components/mobileProjectList.jsx";

const Index = () => {
  return (
    <div className="w-full">
      <Title />
      <Container className="h-min-[600px] grid lg:grid-cols-2">
        <div className="col-span-1 w-full">
          <SlideInCard triggerOnce={true}>
            <Bio />
          </SlideInCard>
        </div>
        <div className="col-span-1 w-full">
          <SlideInCard triggerOnce={true} right={true}>
            <EventSelectedProvider>
              <EventInfoWrapper />
              <TimelineWrapper />
            </EventSelectedProvider>
          </SlideInCard>
        </div>
      </Container>
      <div className="hidden md:block">
        <CarouselFilterProvider>
          <Container className="overflow-hidden mt-5">
            <BubbleWrapper />
          </Container>
          <div className="py-3 px-10">
            <Carousel />
          </div>
        </CarouselFilterProvider>
      </div>
      <div className="md:hidden mt-[75px]">
        <SlideInCard triggerOnce={true}>
          <MobileProjectList />
        </SlideInCard>
      </div>
    </div>
  );
};

export default Index;
