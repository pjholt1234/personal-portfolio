import PropTypes from "prop-types";

const ProjectLinks = ({ links }) => {
  if (links.length <= 0) {
    return null;
  }

  const renderedLinks = links?.map((link, index) => {
    const icon = link?.icon;
    return (
      <a
        key={`${link.text}-${index}`}
        href={link.link}
        className="text-lg flex items-center"
      >
        {icon != null ? <i className={`${icon} w-7`}></i> : ""}
        {link.text}
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
