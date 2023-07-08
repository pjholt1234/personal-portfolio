import { createContext, useState } from "react";
import PropTypes from "prop-types";
const EventSelectedContext = createContext("");
const EventSelectedProvider = ({ children }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
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
