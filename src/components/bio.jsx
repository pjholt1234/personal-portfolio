import image from '../assets/bio-photo.png';
const Bio = () => {
    return (
        <div className="flex p-4">
            <img src={image} placeholder="profile-photo" className="h-[300px] border-4 border-white rounded-lg"/>
            <div className="px-4">
                <h2>About me</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin ipsum quis risus convallis, et hendrerit elit rhoncus. Nullam sit amet accumsan sem. Nunc at orci dolor. Aliquam lobortis nunc consectetur eros placerat imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nisi sapien, rhoncus a auctor eu, accumsan et augue. Curabitur fringilla bibendum nunc, pulvinar egestas sem consequat id.
                </p>
            </div>
        </div>
    )
}

export default Bio;