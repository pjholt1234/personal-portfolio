import PropTypes from "prop-types";
import { EventSelectedProvider } from "../../hooks/EventSelectedContext.jsx";
import EventInfoWrapper from "./eventInfoWrapper.jsx";
import TimelineWrapper from "./timelineWrapper.jsx";

const EventsWrapper = ({ className }) => {
  return (
    <div className={className}>
      <EventSelectedProvider>
        <EventInfoWrapper />
        <TimelineWrapper />
      </EventSelectedProvider>
    </div>
  );
};

export default EventsWrapper;

EventsWrapper.propTypes = {
  className: PropTypes.string,
};
