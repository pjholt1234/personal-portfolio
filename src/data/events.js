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
      {
        title: "Projects introduction",
        type: "text",
        text:
          "I worked on a number of projects while studying, using a variety of different programming languages and " +
          "technologies. These taught me foundational skills such as data types, schemas, dynamic programming, design " +
          "methodologies and OOP. My university projects have had a wide spread of domains ranging from basic command-line " +
          "applications to full-stack web applications.",
      },
      {
        title: "Projects",
        type: "detailed-list",
        items: [
          {
            heading: "Stock item tracker",
            text:
              "This was my first large programming assignment, it involved creating a stock tracking system for " +
              "the command line and built in Java. This project was my first exposure to OOP. Part of the marks were " +
              "for designing the project using UML and the rest were for delivering a final application which implement " +
              "polymorphism and inheritance.",
          },
          {
            heading: "Twin Cities web application",
            link: "https://github.com/pjholt1234/twincities",
            text:
              "This project constituted a large portion of the DSA module and was my first web and full-stack " +
              "application. I use PHP, Javascript, HTML, CSS and MySQL to deliver a website which used the Google Maps " +
              "API to show points of interest in two twin cities. The project also made use of the Flickr image API to" +
              " pull in images relating to the points of interest.",
          },
          {
            heading: "UWE Support revamp",
            text:
              "In this project, my group mates and I had to liaise with a real-life client to extract and manage " +
              "deliverables. Our client was the universities head of IT and our task was to help identify and fix " +
              "problematic areas of the UWE support website. This culminated in creating a mock of our proposed fixes" +
              " and a presentation of our findings.",
          },
          {
            heading: "Introduction to data science",
            link: "/projects/data-mining",
            text:
              "This group project was an introduction to data science. Within this module I was fortunate to be given the " +
              "chance to learn about machine learning and data mining which culminated in this final project where we had to " +
              "build a store item recommender based on the retail rocket dataset.",
          },
          {
            heading: "Exercise web companion (Final year project)",
            link: "/projects/dissertation",
            text:
              "For my final year dissertation, I built a web application for planning, scheduling and recording exercise plans. " +
              "I achieved this primarily with, MySql, PHP, and Javascript. It was the first of many things for me and I learnt " +
              "a great deal surrounding web development and broader application development. Key takeaways from this project " +
              "were, planning and design methods such as UML + agile, database design, and fundamentals of how the web works.",
          },
        ],
      },
      {
        title: "Graduation",
        hideTitle: true,
        type: "img",
        src: files.graduation,
        alt: "graduation",
        properties: "sm:w-1/2 w-full h-auto",
      },
      {
        title: "Reflections",
        type: "text",
        text:
          "Despite spending much of my university time in lockdown, I was fortunate enough to meet a lot of amazing " +
          "people and had the chance to experience many new things. In my three years studying I saw the most personal " +
          "growth to that point and learnt a great deal. When I started, I had only a very basic knowledge of programming. " +
          "When I finished, I had developed a full large-scale web application on my own and was armed with the " +
          "knowledge required to make my first professional steps. \n" +
          "Most importantly, I learnt how to self-motivate and became a proficient self-teacher. My university " +
          "experience by no means was normal and was definitely not what I expected it to be. How could anyone " +
          "anticipate what happened.. But, I do think the “unique” circumstances provided a useful lesson in being " +
          "independent when sometimes I was left lacking the support of the university. Sometimes I wish I could have " +
          "been different, but we made it through anyway. That's what's important! I can be proud of what I achieved" +
          " and it left me in good stead for my next steps.",
      },
    ],
  },
  lightflows: {
    id: "lightflows",
    heading: "Lightflows",
    date: "Oct 2021 - Present",
    text: "Junior Web Developer",
    description:
      "I joined Lightflows in October 2021. Since starting working at Lightflows, I have had the opportunity to work on" +
      " many exciting projects as well as learn new technologies such as Laravel, Livewire, React, Drupal, WordPress " +
      "and even some Unity. I have contributed to project ranging from brochure sites to a fully automatic video rendering " +
      "platform.",
    color: "bg-red-700",
    icon: "fa-sharp fa-solid fa-briefcase",
  },
};

export default events;
