import { useEffect } from "react";
import PropTypes from "prop-types";

const EventInfoCard = ({ event }) => {
  useEffect(() => {}, [event]);

  return (
    <div className="w-full">
      <div className="sm:flex">
        <a className="flex arrow-right-link" href={`/events/${event.id}`}>
          <h3>{event?.heading}</h3>
          <i className="pl-4 fa-solid fa-arrow-right-from-bracket hidden md:block"></i>
        </a>
        <p className="italic font-semibold ml-auto mr-0">{event?.date}</p>
      </div>
      <p className="text-gray-400 hover:text-white min-h-[150px]">
        {event?.description}
      </p>
    </div>
  );
};

EventInfoCard.propTypes = {
  event: PropTypes.object,
};

export default EventInfoCard;
