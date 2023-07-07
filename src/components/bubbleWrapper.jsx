import technologies from "../data/technologies";
import TechnologyBubble from "./technologyBubble.jsx";
import BubbleRow from "./bubbleRow.jsx";
import useWindowBreakpoint from "../hooks/useWindowBreakpoint.js";

const BubbleWrapper = () => {
  const breakpoint = useWindowBreakpoint();
  const rows = [];
  let rowIndex = 0;
  let slideInDirectionRight = true;
  let count = 0;

  const technologyBubbles = technologies.map((technology) => {
    count++;
    return (
      <div key={`technology-${count}`} className="flex mx-10">
        <TechnologyBubble
          name={technology.name}
          description={technology.description}
          logo={technology.logo}
          bgColor={technology.bgColor}
        />
      </div>
    );
  });

  while (technologyBubbles.length > 0) {
    const rowLength = getRowLength(breakpoint, rowIndex);
    const rowBubbles = technologyBubbles.splice(0, rowLength);
    rows.push(
      <BubbleRow
        key={`row-${rowIndex}`}
        slideInDirectionRight={slideInDirectionRight}
      >
        {rowBubbles}
      </BubbleRow>,
    );
    rowIndex++;
    slideInDirectionRight = !slideInDirectionRight;
  }

  return <div className="w-full">{rows}</div>;
};

const getRowLength = (breakpoint, rowIndex) => {
  const rowIndexIsEven = rowIndex % 2 === 0;

  if (rowIndexIsEven) {
    if (breakpoint === "xsm" || breakpoint === "sm") {
      return 1;
    } else if (breakpoint === "md" || breakpoint === "lg") {
      return 3;
    } else {
      return 4;
    }
  } else {
    if (breakpoint === "xsm" || breakpoint === "sm") {
      return 1;
    } else if (breakpoint === "md" || breakpoint === "lg") {
      return 2;
    } else {
      return 3;
    }
  }
};

export default BubbleWrapper;
