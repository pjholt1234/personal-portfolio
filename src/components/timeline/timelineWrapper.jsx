import DateBlockWrapper from "./dateBlockWrapper.jsx";
import TimelineRow from "./timelineRow.jsx";
import EventLine from "./eventLine.jsx";
const TimelineWrapper = () => {
  const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];
  const colCount = years.length;
  return (
    <div className="mx-auto">
      {/*career*/}
      <TimelineRow colCount={colCount}>
        <EventLine
          bgColor="bg-red-500"
          id="work"
          colStart={4}
          colSpan={3}
          icon="fa-solid fa-briefcase"
          title="Lightflows"
        ></EventLine>
      </TimelineRow>
      {/*education*/}
      <TimelineRow colCount={colCount}>
        <EventLine
          bgColor="bg-green-500"
          id="uni"
          colStart={1}
          colSpan={3}
          icon="fa-solid fa-school"
          title="UWE"
        ></EventLine>
      </TimelineRow>
      <DateBlockWrapper colCount={colCount} years={years} />
    </div>
  );
};

TimelineWrapper.propTypes = {};

export default TimelineWrapper;
