import DateBlockWrapper from "./dateBlockWrapper.jsx";
import TimelineRow from "./timelineRow.jsx";
import EventLine from "./eventLine.jsx";
const TimelineWrapper = () => {
  const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024];
  const colCount = years.length + 1;
  return (
    <div className={`w-full grid grid-rows-4`}>
      {/*education*/}
      <TimelineRow colCount={colCount} rowNumber={1}>
        <EventLine
          bgColor="bg-green-500"
          id="uni"
          colStart={2}
          colSpan={3}
        ></EventLine>
      </TimelineRow>
      {/*career*/}
      <TimelineRow colCount={colCount} rowNumber={2}>
        <EventLine
          bgColor="bg-red-500"
          id="work"
          colStart={5}
          colSpan={3}
        ></EventLine>
      </TimelineRow>
      <DateBlockWrapper colCount={colCount} years={years} />
    </div>
  );
};

TimelineWrapper.propTypes = {};

export default TimelineWrapper;
