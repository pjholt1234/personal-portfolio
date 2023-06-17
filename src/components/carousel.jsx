const Carousel = ({classes, children}) => {
    return (
        <div className={`${classes} flex`}>
            {children}
        </div>
    )
}

export default Carousel;