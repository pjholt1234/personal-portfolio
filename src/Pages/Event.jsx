import { useParams } from "react-router-dom";
import StickyTwoColumnLayout from "../components/utility/stickyTwoColumnLayout.jsx";
import { useState } from "react";
import events from "../data/events.js";
import FeaturedLinks from "../components/utility/featuredLinks.jsx";
import NavWrapper from "../components/utility/navWrapper.jsx";
import { VisiblePanelProvider } from "../hooks/VisiblePanelContext.jsx";
import ScrollPanelsWrapper from "../components/utility/panels/scrollPanelsWrapper.jsx";

const Event = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(events[eventId]);

  let navItems = [];
  event?.scrollPanels?.map((panel) => {
    navItems.push(panel.title);
  });

  const leftPanel = () => {
    return (
      <div className="w-full">
        <div className="flex flex-wrap items-baseline">
          <i className={`mr-2 text-white text-4xl ${event?.icon}`}></i>
          <h1>{event?.heading}</h1>
        </div>
        <div className="md:flex">
          <div className="text-lg italic text-gray-300 mr-2">{event?.date}</div>
          <div className="md:ml-auto md:mr-0 text-lg text-gray-300">
            {event?.subheading}
          </div>
        </div>
        <FeaturedLinks links={event?.links} />
        <div className="hidden md:flex">
          <NavWrapper navItems={navItems} />
        </div>
      </div>
    );
  };

  const rightPanel = () => {
    return (
      <ScrollPanelsWrapper
        scrollPanels={event?.scrollPanels}
        underlineColor={event?.underlineColor}
      />
    );
  };

  return (
    <VisiblePanelProvider navItems={navItems}>
      <StickyTwoColumnLayout
        leftPanel={leftPanel()}
        rightPanel={rightPanel()}
      />
    </VisiblePanelProvider>
  );
};

export default Event;
