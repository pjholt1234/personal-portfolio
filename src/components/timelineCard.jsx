import PropTypes from "prop-types";

const TimelineCard = ({heading, subheading, text, left, color, icon}) => {

    return (
        <div className="flex m-2">
            {!left ?
                <div className={`w-[50px] h-[50px] rounded-full ${color} mr-2 flex justify-center items-center`}>
                    <i className={`${icon}`}></i>
                </div> : ""
            }

            <div className="bg-gradient-to-r from-gray-500 to-slate-500 grow p-3 text-black rounded-lg shadow-inner">
                <div className="flex mb-2">
                    <h3 className="text-white">{heading}</h3>
                    <span className="text-white mr-0 ml-auto font-semibold">{subheading}</span>
                </div>
                <p>{text}</p>
            </div>

            {left ?
                <div className={`w-[50px] h-[50px] rounded-full ${color} ml-2 flex justify-center items-center`}>
                    <i className={`${icon}`}></i>
                </div> : ""
            }
        </div>
    )
}

TimelineCard.propTypes = {
    heading: PropTypes.string,
    subheading: PropTypes.string,
    text: PropTypes.string,
    left: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.string
}


export default TimelineCard;