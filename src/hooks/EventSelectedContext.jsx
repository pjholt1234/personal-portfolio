import { createContext, useState } from "react";
import PropTypes from "prop-types";
import events from "../data/events.js";
const EventSelectedContext = createContext("");
const EventSelectedProvider = ({ children }) => {
  const [selectedEvent, setSelectedEvent] = useState(
    Object.keys(events)[0] ?? null,
  );
  const updateSelectedEvent = (newEvent) => {
    setSelectedEvent(newEvent);
  };

  return (
    <EventSelectedContext.Provider
      value={{ selectedEvent, updateSelectedEvent }}
    >
      {children}
    </EventSelectedContext.Provider>
  );
};

EventSelectedProvider.propTypes = {
  children: PropTypes.node,
};

export { EventSelectedContext, EventSelectedProvider };
