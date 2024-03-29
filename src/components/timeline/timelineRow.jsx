import PropTypes from "prop-types";

const TimelineRow = ({ children, className = "", colCount = 8 }) => {
  const gridCols = `grid-cols-8`;

  return (
    <div className={`${className} grid ${gridCols} h-[50px]`}>
      {/*Padding column*/}
      {children}
    </div>
  );
};

TimelineRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  colCount: PropTypes.number,
};

export default TimelineRow;
