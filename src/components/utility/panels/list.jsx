import PropTypes from "prop-types";

const List = ({ panel, ordered = false }) => {
  const ListTag = ordered ? "ol" : "ul";

  const renderedListItems = panel?.items?.map((item, index) => {
    return <li key={`${item}-${index}`}>{item}</li>;
  });

  return (
    <ListTag className={ordered ? "list-decimal" : "list-disc"}>
      {renderedListItems}
    </ListTag>
  );
};

export default List;

List.propTypes = {
  panel: PropTypes.object,
  ordered: PropTypes.bool,
};
