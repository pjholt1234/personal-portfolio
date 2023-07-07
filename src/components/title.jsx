import backgroundImage from "../assets/surrey-hills.jpeg";

const Title = () => {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex">
        <div className="ml-auto mr-0 border-2 border-white rounded-lg">
          <a className="mx-1" href="https://www.linkedin.com/in/devpj/">
            <i className="text-white text-4xl fa-brands fa-linkedin"></i>
          </a>
          <a className="mx-1" href="https://github.com/pjholt1234">
            <i className="text-white text-4xl fa-brands fa-github"></i>
          </a>
        </div>
      </div>
      <div className="flex justify-center h-screen items-center">
        <div>
          <h1 className="text-10xl shadow-outline">PJ Holt</h1>
          <h2 className="text-3xl">Web developer</h2>
        </div>
      </div>
    </div>
  );
};

export default Title;
