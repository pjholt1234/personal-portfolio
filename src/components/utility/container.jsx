import PropTypes from "prop-types";

const Container = ({ children, className }) => {
  return (
    <div className={`${className} w-full h-min-[500px] flex items-center`}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
export default Container;
