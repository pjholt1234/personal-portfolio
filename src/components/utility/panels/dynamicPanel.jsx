import PropTypes from "prop-types";
import List from "./list.jsx";
import SplitStringToParagraphs from "../spiltStringToParagraphs.jsx";
import DetailedList from "./detailedList.jsx";
import ImagePanel from "./imagePanel.jsx";

const DynamicPanel = ({ panel }) => {
  switch (panel?.type) {
    case "text":
      return (
        <SplitStringToParagraphs className="text-gray-300" text={panel?.text} />
      );
    case "list":
      return <List panel={panel} />;
    case "detailed-list":
      return <DetailedList panel={panel} />;
    case "img":
      return <ImagePanel panel={panel} />;
    default:
      return null;
  }
};

export default DynamicPanel;

DynamicPanel.propTypes = {
  panel: PropTypes.object,
};
