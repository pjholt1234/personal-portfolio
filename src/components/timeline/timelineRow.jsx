import PropTypes from "prop-types";

const TimelineRow = ({ children, className, colCount, rowNumber }) => {
  return (
    <div
      className={`${className} grid grid-cols-${colCount} h-[50px] row-start-${rowNumber}`}
    >
      {/*Padding column*/}
      <div className="col-span-1"></div>
      {children}
    </div>
  );
};

TimelineRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  colCount: PropTypes.number,
  rowNumber: PropTypes.number,
};

export default TimelineRow;
