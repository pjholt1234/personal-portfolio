import { useParams } from "react-router-dom";

const Event = () => {
  const { eventId } = useParams();
  return <div>{eventId}</div>;
};

export default Event;
