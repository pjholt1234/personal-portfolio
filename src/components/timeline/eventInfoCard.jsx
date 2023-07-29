import { useEffect } from "react";
import PropTypes from "prop-types";

const EventInfoCard = ({ event }) => {
  useEffect(() => {}, [event]);

  return (
    <div className="w-full my-5">
      <div className="flex">
        <a className="flex" href={`/events/${event.id}`}>
          <h3>{event?.heading}</h3>
          <i className="pl-4 fa-solid fa-arrow-right-from-bracket mt-[6px]"></i>
        </a>
        <p className="italic font-semibold ml-auto mr-0">{event?.subheading}</p>
      </div>
      <p>{event?.description}</p>
    </div>
  );
};

EventInfoCard.propTypes = {
  event: PropTypes.object,
};

export default EventInfoCard;
