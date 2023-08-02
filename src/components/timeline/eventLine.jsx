import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { EventSelectedContext } from "../../hooks/EventSelectedContext.jsx";
const EventLine = ({
  id,
  bgColor,
  colStart,
  colSpan,
  icon = null,
  title = "",
}) => {
  const [focused, setFocused] = useState(true);
  const { selectedEvent, updateSelectedEvent } =
    useContext(EventSelectedContext);

  const opacity = focused ? "opacity-100" : "opacity-50";

  const selectEvent = () => {
    if (id !== selectedEvent) {
      updateSelectedEvent(id);
    }
  };

  useEffect(() => {
    if (selectedEvent === id) {
      setFocused(true);
      return;
    }

    setFocused(false);
  }, [selectedEvent]);

  return (
    <div
      onClick={selectEvent}
      id={id}
      style={{ gridColumn: `${colStart} / ${colStart + colSpan}` }}
      className={`${opacity} ${bgColor} rounded-full h-[30px] cursor-pointer`}
    >
      {icon != null ? <i className={`ml-2 mt-[7px] ${icon}`}></i> : ""}
      <span className="ml-2 text-sm md:text-md">{title ?? ""}</span>
    </div>
  );
};

EventLine.propTypes = {
  id: PropTypes.string,
  bgColor: PropTypes.string,
  colStart: PropTypes.number,
  colSpan: PropTypes.number,
  icon: PropTypes.string,
  title: PropTypes.string,
};

export default EventLine;
