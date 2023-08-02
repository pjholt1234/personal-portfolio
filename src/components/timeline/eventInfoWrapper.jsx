import EventInfoCard from "./eventInfoCard.jsx";
import events from "../../data/events.js";
import { useContext, useEffect, useState } from "react";
import { EventSelectedContext } from "../../hooks/EventSelectedContext.jsx";

const EventInfoWrapper = () => {
  const { selectedEvent } = useContext(EventSelectedContext);
  const [event, setEvent] = useState(events.uni);
  useEffect(() => {
    setEvent(events[selectedEvent]);
  }, [selectedEvent]);

  return (
    <div className="px-5">
      <EventInfoCard event={event} />
    </div>
  );
};

export default EventInfoWrapper;
