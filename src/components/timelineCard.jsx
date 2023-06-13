const timelineCard = ({heading, subheading, text, left, color, icon}) => {

    return (
        <div className="flex m-2">
            {!left ?
                <div className={`w-[60px] h-[60px] rounded-full ${color} mr-2 flex justify-center items-center`}>
                    <i className={`${icon}`}></i>
                </div> : ""
            }

            <div className="grow bg-gray-500 p-3 text-black rounded-lg border-4 border-white shadow-inner">
                <div className="flex mb-2">
                    <h3 className="text-white">{heading}</h3>
                    <span className="text-white mr-0 ml-auto">{subheading}</span>
                </div>
                <p>{text}</p>
            </div>

            {left ?
                <div className={`w-[60px] h-[60px] rounded-full ${color} ml-2 flex justify-center items-center`}>
                    <i className={`${icon}`}></i>
                </div> : ""
            }
        </div>
    )
}

export default timelineCard;