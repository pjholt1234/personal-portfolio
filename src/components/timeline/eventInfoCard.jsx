import { useEffect } from "react";
import PropTypes from "prop-types";

const EventInfoCard = ({ event }) => {
  useEffect(() => {}, [event]);

  return (
    <div className="w-full my-5">
      <div className="flex">
        <h3>{event !== undefined ? event.heading : ""}</h3>
        <p className="italic font-semibold ml-auto mr-0">
          {event !== undefined ? event.subheading : ""}
        </p>
      </div>
      <p>{event !== undefined ? event.description : ""}</p>
    </div>
  );
};

EventInfoCard.propTypes = {
  event: PropTypes.object,
};

export default EventInfoCard;
