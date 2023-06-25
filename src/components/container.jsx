import PropTypes from "prop-types";

const Container = ({children}) => {
    return(
        <div className={`${children} w-full h-[500px] flex items-center`}>
            {children}
        </div>
    )
}

Container.propTypes = {
    children: PropTypes.node,
}
export default Container;