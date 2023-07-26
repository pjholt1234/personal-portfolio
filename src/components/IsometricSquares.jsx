import PropTypes from "prop-types";
import { useState } from "react";

const IsometricSquares = ({ technologies }) => {
  const [technologiesArray, SetTechnologiesArray] = useState(technologies);
  const renderSquare = (technology, index) => {
    const topValue = index * 30;
    const zIndexValue = -1 * (index + 1);
    const colours = [
      "bg-pink-500",
      "bg-orange-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-blue-500",
      "bg-red-500",
    ];

    return (
      <div
        key={index}
        className={`isometric-square ${colours[index]}`}
        style={{ top: `${topValue}px`, zIndex: zIndexValue }}
      >
        <div className="text-container w-full">
          <span className="text-2xl">{technology}</span>
        </div>
      </div>
    );
  };
  return (
    <div className="square-container">
      {technologiesArray.map((technology, index) =>
        renderSquare(technology, index),
      )}
    </div>
  );
};

export default IsometricSquares;

IsometricSquares.propTypes = {
  technologies: PropTypes.array,
};
