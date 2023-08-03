import PropTypes from "prop-types";
import { CarouselFilterContext } from "../hooks/CarouselFilterContext.jsx";
import { useContext } from "react";

const TechnologyBubble = ({ name, description, logo, bgColor }) => {
  const { value, updateValue } = useContext(CarouselFilterContext);

  const handleClick = () => {
    if (name === value) {
      updateValue(null);
      return;
    }

    updateValue(name);
  };

  let border = "";

  if (value === name) {
    border = "border-2 border-white";
  }

  return (
    <a onClick={handleClick} className="cursor-pointer">
      <div className="flex">
        <div
          className={`grow-left rounded-full bg-blue-500 flex justify-center items-center ${bgColor} ${border}`}
        >
          <i className={`${logo} text-7xl mr-auto`}></i>
          <div className="ml-4 hidden-child text-sm">{description}</div>
        </div>
      </div>
    </a>
  );
};

TechnologyBubble.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  logo: PropTypes.string,
  bgColor: PropTypes.string,
};

export default TechnologyBubble;
