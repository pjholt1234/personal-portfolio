import technologies from "../data/technologies";
import TechnologyBubble from "./technologyBubble.jsx";
import BubbleRow from "./bubbleRow.jsx";
import SlideUpContainer from "./slideUpContainer.jsx";


const BubbleWrapper = () => {
    var count = 0;
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


    const rows = [];
    let rowIndex = 0;
    let slideInDirectionRight = true;
    while (technologyBubbles.length > 0) {
        const rowLength = rowIndex % 2 === 0 ? 3 : 2;
        const rowBubbles = technologyBubbles.splice(0, rowLength);
        rows.push(<BubbleRow key={`row-${rowIndex}`} slideInDirectionRight={slideInDirectionRight}>{rowBubbles}</BubbleRow>);
        rowIndex++;
        slideInDirectionRight = !slideInDirectionRight;
    }

    return <div className="w-full">{rows}</div>;
}


export default BubbleWrapper;