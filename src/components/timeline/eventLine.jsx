import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { EventSelectedContext } from "../../hooks/EventSelectedContext.jsx";
const EventLine = ({ id, bgColor, colStart, colSpan }) => {
  const [focused, setFocused] = useState(true);
  const { selectedEvent, updateSelectedEvent } =
    useContext(EventSelectedContext);

  const opacity = focused ? "opacity-100" : "opacity-50";

  const selectEvent = () => {
    if (selectedEvent === id) {
      updateSelectedEvent(null);
      return;
    }

    updateSelectedEvent(id);
  };

  useEffect(() => {
    if (selectedEvent === id || selectedEvent === null) {
      setFocused(true);
      return;
    }

    setFocused(false);
  }, [selectedEvent]);

  return (
    <div
      onClick={selectEvent}
      id={id}
      className={`${opacity} ${bgColor} col-start-${colStart} col-span-${colSpan} rounded-full h-[10px]`}
    ></div>
  );
};

EventLine.propTypes = {
  id: PropTypes.string,
  bgColor: PropTypes.string,
  colStart: PropTypes.string,
  colSpan: PropTypes.string,
};

export default EventLine;
