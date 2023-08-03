import image from "../assets/bio-photo.png";
const Bio = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1">
      <img
        src={image}
        placeholder="profile-photo"
        className="object-contain w-full rounded-lg m-2 max-h-[400px]"
      />
      <div className="min-h-[300px] max-h-[300px] px-4 sm:ml-2 rounded-lg flex flex-wrap col-span-2">
        <h2>About me</h2>
        <p className="text-sm mb-2 text-gray-400 hover:text-white">
          Welcome to my portfolio. Here is quick run down about me. I currently
          live in the South of England, in a small town in Surrey, I graduated
          UWE in 2021 with a first class degree in Business computing and
          currently work for a software development agency called Lightflows. In
          my free time I enjoy hiking, reading, coding and generally anything
          where I can learn and progress.
        </p>
        <p className="text-sm text-gray-400 hover:text-white">
          I would describe myself as driven and focused person who struggles to
          settle for any less than the best I can do. I enjoy working within a
          team of keen individuals and especially if I can learn something new.
          Software offers so many opportunities for this and I have already met
          so many helpful and insightful people on my short journey.
        </p>
      </div>
    </div>
  );
};

export default Bio;
