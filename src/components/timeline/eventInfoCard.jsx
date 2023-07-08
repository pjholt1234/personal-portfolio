import { useEffect } from "react";

const EventInfoCard = ({ event }) => {
  useEffect(() => {}, [event]);

  return (
    <div className="w-full my-5">
      <h2>{event !== undefined ? event.heading : ""}</h2>
      <h3>{event !== undefined ? event.subheading : ""}</h3>
      <p>{event !== undefined ? event.description : ""}</p>
    </div>
  );
};

export default EventInfoCard;
