import { useParams } from "react-router-dom";
import StickyTwoColumnLayout from "../components/utility/stickyTwoColumnLayout.jsx";
import { useState } from "react";
import events from "../data/events.js";
import FeaturedLinks from "../components/utility/featuredLinks.jsx";

const Event = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(events[eventId]);
  const leftPanel = () => {
    return (
      <div>
        <div className="flex flex-wrap items-baseline">
          <i className={`mr-2 text-white text-4xl ${event?.icon}`}></i>
          <h1>{event?.heading}</h1>
        </div>
        <span className="ml-2 text-lg italic text-gray-300">{event?.date}</span>
        <FeaturedLinks links={event?.links} />
      </div>
    );
  };

  const rightPanel = () => {
    return (
      <div>
        <div className="h-screen">hello</div>
        <div className="h-screen">hello2</div>
      </div>
    );
  };

  return (
    <StickyTwoColumnLayout leftPanel={leftPanel()} rightPanel={rightPanel()} />
  );
};

export default Event;
