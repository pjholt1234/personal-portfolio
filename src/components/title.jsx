import backgroundImage from '../assets/surrey-hills.jpeg';

const Title = () => {
    return (
        <div className="bg-cover bg-center flex justify-center w-screen h-screen items-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="mx-auto mt-10">
                <h1 className="text-10xl shadow-outline">PJ Holt</h1>
                <h2 className="text-3xl">Web developer</h2>
            </div>
        </div>
    )
}

export default Title;