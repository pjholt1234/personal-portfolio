import DateBlock from "../timeline/dateBlock.jsx";
import PropTypes from "prop-types";
import TimelineRow from "./timelineRow.jsx";

const DateBlockWrapper = ({ className, years, colCount }) => {
  const renderYearBlock = years.map((year) => {
    return <DateBlock key={year} year={year} />;
  });

  return (
    <TimelineRow className={className} colCount={colCount} rowNumber={4}>
      {renderYearBlock}
    </TimelineRow>
  );
};

DateBlockWrapper.propTypes = {
  className: PropTypes.string,
  years: PropTypes.array,
  colCount: PropTypes.number,
};

export default DateBlockWrapper;
