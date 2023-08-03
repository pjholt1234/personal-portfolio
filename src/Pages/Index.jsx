import Title from "../components/title.jsx";
import Container from "../components/utility/container.jsx";
import SlideInCard from "../components/slideInCard.jsx";
import Bio from "../components/bio.jsx";
import MobileProjectList from "../components/mobileProjectList.jsx";
import EventsWrapper from "../components/timeline/eventsWrapper.jsx";
import CarouselWrapper from "../components/carousel/carouselWrapper.jsx";

const Index = () => {
  return (
    <div className="w-full">
      <Title />
      <Container className="grid lg:grid-cols-2 mt-4">
        <SlideInCard className="col-span-1 w-full" triggerOnce={true}>
          <Bio />
        </SlideInCard>
        <SlideInCard
          className="col-span-1 w-full"
          triggerOnce={true}
          right={true}
        >
          <EventsWrapper />
        </SlideInCard>
      </Container>
      <CarouselWrapper />
      <SlideInCard className="md:hidden mt-[75px]" triggerOnce={true}>
        <MobileProjectList />
      </SlideInCard>
    </div>
  );
};

export default Index;
