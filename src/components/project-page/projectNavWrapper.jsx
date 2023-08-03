import PropTypes from "prop-types";
import NavIndicator from "./navIndicator.jsx";

const ProjectNavWrapper = ({ navItems }) => {
  const renderedNavItems = navItems?.map((item) => {
    return <NavIndicator title={item} key={item} />;
  });

  return <div className="my-10">{renderedNavItems}</div>;
};

export default ProjectNavWrapper;

ProjectNavWrapper.propTypes = {
  navItems: PropTypes.array,
};