import PropTypes from "prop-types";

const ProjectLinks = ({ links }) => {
  if (!Array.isArray(links) || links.length <= 0) {
    return null;
  }

  const renderedLinks = links?.map((link, index) => {
    return (
      <a
        key={`${link.text}-${index}`}
        href={link.link}
        className="text-lg flex items-center hover:text-highlight-blue"
      >
        {link?.icon != null ? <i className={`${link?.icon} w-7`}></i> : ""}
        <span className="hover:underline">{link.text}</span>
      </a>
    );
  });

  return (
    <div className="mt-5 flex overflow-wrap space-x-4">{renderedLinks}</div>
  );
};

export default ProjectLinks;

ProjectLinks.propTypes = {
  links: PropTypes.array,
};
