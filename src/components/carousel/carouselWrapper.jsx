import { CarouselFilterProvider } from "../../hooks/CarouselFilterContext.jsx";
import Container from "../utility/container.jsx";
import BubbleWrapper from "./bubbleWrapper.jsx";
import Carousel from "./carousel.jsx";

const CarouselWrapper = () => {
  return (
    <div className="hidden md:block mt-10">
      <CarouselFilterProvider>
        <Container className="overflow-hidden">
          <BubbleWrapper />
        </Container>
        <Carousel />
      </CarouselFilterProvider>
    </div>
  );
};

export default CarouselWrapper;
