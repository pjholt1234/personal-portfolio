import * as images from "../assets/index.js";

const projects = [
  {
    id: "dissertation",
    images: [
      images.disLoginPage,
      images.disPlanning1,
      images.disPlanning2,
      images.disPlanning3,
      images.disProfile1,
      images.disProfile2,
      images.disProfile3,
      images.disTricks,
    ],
    title: "Final Year Dissertation",
    date: "Oct 2020 - April 2021",
    bgColor: "bg-blue-800",
    gitHubLink: "https://github.com/pjholt1234/ExerciseWebCompanion",
    description:
      "My final year dissertation was my first large-scale web application. My idea for the project was to create a tool for planning, scheduling and tracking workouts.",
    technology: ["PHP", "MySql", "Javascript", "JQuery", "CSS"],
    imgAlignment: null,
  },
  {
    id: "notion-steam-app",
    images: [images.notionSteamApp],
    title: "Steam Market Price Tracker",
    date: "Mar 2023 - May 2023",
    bgColor: "bg-red-700",
    gitHubLink: "https://github.com/pjholt1234/notion-steam-app",
    description:
      "This project provides an interface for entering steam item purchases and sales and calculates profit based on item price data. Additionally, it allows you to export to a notion table. The aim of the project was to practice using Laravel Livewire and the TALL stack.",
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
    id: "personal-portfolio-v2",
    images: [images.portfolio1, images.portfolio2],
    title: "Personal Portfolio V2",
    date: "June 2023 - Present",
    bgColor: "bg-green-700",
    gitHubLink: "https://github.com/pjholt1234/personal-portfolio",
    description:
      "I saw the use of the intersection observer online for some interesting css animations tied into the page scroll. This inspired me to refresh my personal portfolio site. I took this opportunity to brush up on my React knowledge too.",
    technology: ["Javascript", "React", "Tailwind", "CSS"],
    imgAlignment: null,
  },
];

export default projects;
