import TimelineCard from "./timelineCard.jsx";
import PropTypes from "prop-types";

const Timeline = ({events}) => {
    var count = 0;

    const listItems = events.map((event) => {
        var left = false;
        if(count % 2 === 0){
            left = true;
        }

        count++;

        return (
            <div key={`timelineCard-${count}`} className="mx-auto">
                <TimelineCard
                    heading={event.heading}
                    subheading={event.subheading}
                    text={event.text}
                    color={event.color}
                    icon={event.icon}
                    left={left}
                />
            </div>
        );
    });

    return (
        <div className="w-full">
            {listItems}
        </div>
    );
}

Timeline.propTypes = {
    events: PropTypes.array,
}

export default Timeline;