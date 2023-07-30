import PropTypes from "prop-types";

const NavIndicator = ({ title, active = false }) => {
  const width = active ? "w-[100px]" : "w-[50px]";
  console.log(title);
  return (
    <div className="flex items-center">
      <hr className={`${width} mr-2 border-2`}></hr>
      <span>{title}</span>
    </div>
  );
};

export default NavIndicator;

NavIndicator.propTypes = {
  title: PropTypes.string,
  active: PropTypes.bool,
};
