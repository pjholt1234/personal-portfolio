import PropTypes from "prop-types";
import SpiltStringToParagraphs from "../spiltStringToParagraphs.jsx";

const DetailedList = ({ panel }) => {
  const renderedItems = panel?.items?.map((item, index) => {
    return (
      <div className="mb-4" key={index}>
        {item?.link ? (
          <a
            className="italic text-md text-gray-300 flex items-center hover:text-highlight-blue"
            href={item?.link}
          >
            {item?.heading}
            <i className="pl-4 fa-solid fa-arrow-right-from-bracket"></i>
          </a>
        ) : (
          <span className="italic text-md text-gray-300">{item?.heading}</span>
        )}
        <SpiltStringToParagraphs
          className="text-sm text-gray-300"
          text={item?.text}
        />
      </div>
    );
  });

  return <div className="mt-2">{renderedItems}</div>;
};
export default DetailedList;

DetailedList.propTypes = {
  panel: PropTypes.object,
};
