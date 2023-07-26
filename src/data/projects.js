import * as files from "../assets/index.js";

const projects = [
  {
    id: "personal-portfolio-v2",
    images: [files.portfolio1, files.portfolio2],
    title: "Personal Portfolio V2",
    date: "June 2023 - Present",
    bgColor: "bg-green-700",
    gitHubLink: "https://github.com/pjholt1234/personal-portfolio",
    description:
      "I saw the use of the intersection observer online for some interesting css animations tied into the page scroll. " +
      "This inspired me to refresh my personal portfolio site. I took this opportunity to brush up on my React knowledge too.",
    technology: ["Javascript", "React", "Tailwind", "CSS"],
    imgAlignment: null,
  },
  {
    id: "notion-steam-app",
    images: [files.notionSteamApp],
    title: "Steam Market Price Tracker",
    date: "Mar 2023 - May 2023",
    bgColor: "bg-red-700",
    gitHubLink: "https://github.com/pjholt1234/notion-steam-app",
    description:
      "This project provides an interface for entering steam item purchases and sales and calculates profit based on " +
      "item price data. Additionally, it allows you to export to a notion table. The aim of the project was to practice " +
      "using Laravel Livewire and the TALL stack.",
    technology: [
      "PHP",
      "Javascript",
      "Laravel",
      "Livewire",
      "Tailwind",
      "Alpine JS",
    ],
    imgAlignment: "object-left-top",
  },
  {
    id: "personal-portfolio-v1",
    images: [
      files.about,
      files.about2,
      files.contact,
      files.homepage,
      files.projectExample,
    ],
    title: "Personal Portfolio V1",
    date: "Aug 2021 - Sept 2021",
    bgColor: "bg-orange-700",
    gitHubLink: "https://github.com/pjholt1234/personal-portfolio-v1",
    description:
      "My first project out of uni was to create a portfolio site in support of my CV. This site was very basic " +
      "with simple html CSS and alittle javascript. For most of my projects in uni I didn’t have the time to learn CSS " +
      "so I took this opportunity to explore Bootstrap and styling in general.",
    technology: ["Javascript", "CSS"],
    imgAlignment: "object-left-top",
  },
  {
    id: "dissertation",
    images: [
      files.disLoginPage,
      files.disPlanning1,
      files.disPlanning2,
      files.disPlanning3,
      files.disProfile1,
      files.disProfile2,
      files.disProfile3,
      files.disTricks,
    ],
    title: "Final Year Dissertation",
    date: "Oct 2020 - April 2021",
    bgColor: "bg-blue-800",
    gitHubLink: "https://github.com/pjholt1234/ExerciseWebCompanion",
    description:
      "My final year dissertation was my first large-scale web application. My idea for the project was to create a tool for planning, scheduling and tracking workouts.",
    technology: ["PHP", "MySql", "Javascript", "JQuery", "CSS"],
    imgAlignment: null,
    longDescription:
      "For my final year dissertation, I built a web application for planning, scheduling and recording exercise plans. " +
      "I achieved this primarily with, MySql, PHP, and Javascript. It was the first of many things for me and I learnt " +
      "a great deal surrounding web development and broader application development. Key takeaways from this project " +
      "were, planning and design methods such as UML + agile, database design, and fundamentals of how the web works.",
    links: [
      {
        link: "https://www.youtube.com/watch?v=DuZjvRmZTzM",
        text: "Demo",
        icon: "fa-brands fa-youtube",
      },
      {
        link: files.disReport,
        text: "Report",
        icon: "fa-solid fa-file",
      },
    ],
  },
];

export default projects;
