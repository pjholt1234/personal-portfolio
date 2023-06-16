const Card = ({children, classes = ""}) => {
    return (
        <div className={`${classes} p-3 text-white rounded-lg shadow-inner`}>
            {children}
        </div>
    )
}

export default Card;