import * as files from "../assets/index.js";

const events = {
  uni: {
    id: "uni",
    heading: "University of the West of England",
    date: "Sept 2018 - June 2021",
    text: "First Class Bachelor of Science, Business Computing",
    description:
      "I graduated from UWE in the summer of 2021 with a first-class degree in business computing. Throughout the program, I covered many topics around software development. These included project management, core programming skills, web development and software development methodologies.",
    color: "bg-blue-800",
    icon: "fa-solid fa-graduation-cap",
    links: [
      {
        link: files.reportCard,
        text: "Final year report",
        icon: "fa-solid fa-book",
      },
    ],
    scrollPanels: [
      {
        title: "Modules Taken",
        type: "list",
        items: [
          "Foundation of business analytics",
          "Ethical and professional issues in computing and digital media",
          "Software development project",
          "Sustainable business and computing",
          "Requirements engineering",
          "Business intelligence and data mining",
          "Security management in practice",
          "Information practitioner 2",
          "Project management",
          "Data, schemas and applications",
          "Business Applications",
          "Information Technology",
          "Understanding the Principles of Marketing",
          "Understanding Organisations and People",
          "Introduction to OO Systems Development",
        ],
      },
    ],
  },
  work: {
    id: "lightflows",
    heading: "Lightflows",
    date: "Oct 2021 - Present",
    text: "Junior Web Developer",
    description:
      "I joined Lightflows in October 2021. Since starting working at Lightflows, I have had the opportunity to work on many exciting projects as well as learn new technologies such as Laravel, Livewire, React, Drupal, WordPress and even some Unity. I have contributed to project ranging from brochure sites to a fully automatic video rendering platform.",
    color: "bg-red-700",
    icon: "fa-sharp fa-solid fa-briefcase",
  },
};

export default events;
