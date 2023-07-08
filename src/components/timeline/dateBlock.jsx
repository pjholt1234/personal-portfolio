import PropTypes from "prop-types";

const DateBlock = ({ year }) => {
  return (
    <div className="col-span-1">
      <div className="w-[2px] h-[50px] bg-white"></div>
      <div className="transform -rotate-90 w-[2px] mt-8">{year}</div>
    </div>
  );
};

export default DateBlock;

DateBlock.propTypes = {
  year: PropTypes.number,
};
