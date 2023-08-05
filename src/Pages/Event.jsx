import { useParams } from "react-router-dom";
import StickyTwoColumnLayout from "../components/utility/stickyTwoColumnLayout.jsx";
import { useState } from "react";
import events from "../data/events.js";
import FeaturedLinks from "../components/utility/featuredLinks.jsx";
import EventScrollPanelsWrapper from "../components/event-page/eventScrollPanelsWrapper.jsx";
import NavWrapper from "../components/utility/navWrapper.jsx";
import { VisiblePanelProvider } from "../hooks/VisiblePanelContext.jsx";

const Event = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(events[eventId]);

  let additionalNavItems = [];
  event?.scrollPanels?.map((panel) => {
    additionalNavItems.push(panel.title);
  });

  const navItems = ["Description", ...additionalNavItems];

  const leftPanel = () => {
    return (
      <div>
        <div className="flex flex-wrap items-baseline">
          <i className={`mr-2 text-white text-4xl ${event?.icon}`}></i>
          <h1>{event?.heading}</h1>
        </div>
        <span className="ml-2 text-lg italic text-gray-300">{event?.date}</span>
        <FeaturedLinks links={event?.links} />
        <div className="hidden md:flex">
          <NavWrapper navItems={navItems} />
        </div>
      </div>
    );
  };

  const rightPanel = () => {
    return <EventScrollPanelsWrapper event={event} />;
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
