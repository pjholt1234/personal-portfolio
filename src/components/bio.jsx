import image from '../assets/bio-photo.png';
const Bio = () => {
    return (
        <div className="flex p-4">
            <img src={image} placeholder="profile-photo" className="h-[300px] rounded-lg"/>
            <div className="px-4 h-[300px] ml-2 rounded-lg flex flex-wrap">
                <h2 className="">About me</h2>
                <p className="text-sm mb-2">
                    Welcome to my portfolio. Here is quick run down about me. I currently live in the South of England,
                    in a small town in Surrey, I graduated UWE in 2021 with a first class degree in Business computing
                    and currently work for a software development agency called Lightflows. In my free time I enjoy hiking,
                    reading, coding and generally anything where I can learn and progress.
                </p>
                <p className="text-sm">
                    I would describe myself as driven and focused person who struggles to settle for any less than the best
                    I can do. I enjoy working within a team of keen individuals and especially if I can learn something new.
                    Software offers so many opportunities for this and I have already met so many helpful and insightful
                    people on my short journey.
                </p>
            </div>
        </div>
    )
}

export default Bio;