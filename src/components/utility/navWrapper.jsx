import PropTypes from "prop-types";
import NavIndicator from "./navIndicator.jsx";

const NavWrapper = ({ navItems }) => {
  const renderedNavItems = navItems?.map((item) => {
    return <NavIndicator title={item} key={item} />;
  });

  return <div className="my-10">{renderedNavItems}</div>;
};

export default NavWrapper;

NavWrapper.propTypes = {
  navItems: PropTypes.array,
};
