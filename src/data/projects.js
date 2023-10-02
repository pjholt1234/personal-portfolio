import * as files from "../assets/index.js";

const projects = [
  {
    id: "room-planner-app",
    title: "Room planner WIP",
    date: "Aug 2023 - Present",
    bgColor: "bg-pink-700",
    underlineColor: "after:bg-pink-700",
    borderColor: "border-pink-700",
    gitHubLink: "https://github.com/pjholt1234/room-planner",
    images: [files.roomPlanner, files.roomPlannerDesign],
    imgAlignment: null,
    technology: ["MongoDB", "Typescript", "React", "CSS"],
    description:
      "I decided to combine both learning typescript, html canvas and its supporting JS API and MongoDB. " +
      "The project was designed to be a room planner, heavily inspired by canva",
    scrollPanels: [
      {
        title: "Description",
        type: "text",
        text:
          "After completing my personal portfolio, I wanted to continue broadening my knowledge of the Javascript ecosystem. " +
          "I decided to building this project using typescript for both the front and backend. I used the both create and the plain " +
          "html canvas for the UI. My goal of this project was to try to scratch build as much as possible and limit my use of packages." +
          "This was to ensure that I had a good understanding of the underlying technologies.",
      },
      {
        title: "Gallery",
        hideTitle: true,
        type: "gallery",
        images: [files.roomPlanner, files.roomPlannerDesign],
      },
      {
        title: "Reflections",
        type: "text",
        text: "Todo...",
      },
    ],
  },
  {
    id: "personal-portfolio-v2",
    title: "Personal Portfolio V2",
    date: "June 2023 - Aug 2023",
    bgColor: "bg-green-700",
    underlineColor: "after:bg-green-700",
    borderColor: "border-green-700",
    gitHubLink: "https://github.com/pjholt1234/personal-portfolio",
    images: [
      files.portfolio1,
      files.portfolio2,
      files.portfolio3,
      files.portfolio4,
      files.portfolio5,
      files.portfolio6,
      files.portfolio7,
    ],
    imgAlignment: null,
    technology: ["Javascript", "React", "Tailwind", "CSS"],
    description:
      "I saw the use of the intersection observer online for some interesting css animations tied into the page scroll. " +
      "This inspired me to refresh my personal portfolio site. I took this opportunity to brush up on my React knowledge too.",
    scrollPanels: [
      {
        title: "Description",
        type: "text",
        text:
          "After being inspired by a brochure site with interesting animations based on the user's scroll, " +
          "I wanted to experiment with this idea in my free time. This combined with the realisation that my previous " +
          "portfolio was not a good demonstration of what I have learned in the last year. This resulted in the genesis of " +
          "starting this portfolio revamp. I thought it was a good opportunity to work on a pure frontend project allowing " +
          "me to explore the aforementioned animations as well as build on my React experience. ",
      },
      {
        title: "Gallery",
        hideTitle: true,
        type: "gallery",
        images: [files.portfolio1, files.portfolio2],
      },
      {
        title: "Reflections",
        type: "text",
        text:
          "During this project, I learnt the importance of planning. I found myself regularly going back and refactoring " +
          "or changing the styling of a component. I struggle with coming up with a consistent theme for the site. After " +
          "speaking to a colleague, they suggested doing some small sketches before getting stuck in with the programming. \n " +
          "I was happy with the stack I chose. Initially, I thought React might be overkill for this sort " +
          "of project but, it gave me the flexibility to create some interesting reactivity to the site with components " +
          "such as the carousel seen on the main page. Another hidden benefit to this project was providing a good way to " +
          "start learning how to deploy using AWS.",
      },
    ],
  },
  {
    id: "notion-steam-app",
    title: "Steam Market Price Tracker",
    date: "Mar 2023 - May 2023",
    bgColor: "bg-red-700",
    underlineColor: "after:bg-red-700",
    borderColor: "border-red-700",
    gitHubLink: "https://github.com/pjholt1234/notion-steam-app",
    images: [files.notionSteamApp],
    imgAlignment: "object-left-top",
    technology: [
      "PHP",
      "Javascript",
      "Laravel",
      "Livewire",
      "Tailwind",
      "Alpine JS",
    ],
    description:
      "This project provides an interface for entering steam item purchases and sales and calculates profit based on " +
      "item price data. Additionally, it allows you to export to a notion table. The aim of the project was to practice " +
      "using Laravel Livewire and the TALL stack.",
    scrollPanels: [
      {
        title: "Description",
        type: "text",
        text:
          "This project provides an interface for entering steam item purchases and sales and calculates profit based on " +
          "item price data. Additionally, it allows you to export to a notion table. The aim of the project was to practice " +
          "using Laravel Livewire and the TALL stack.",
      },
      {
        title: "Gallery",
        hideTitle: true,
        type: "gallery",
        images: [files.notionSteamApp],
      },
      {
        title: "Reflections",
        type: "text",
        text:
          "After using Livewire both personally and professionally, I’m of the opinion it’s not ready for use in " +
          "a large-scale project with a lot of interactivity. When making small-scale applications it's very nice to not " +
          "have to write and maintain routes however, the concept starts to fall over when a lot of client-side interactivity " +
          "is required. You still need to add Javascript and often this ends up in the markup in the form of Alpine. " +
          "This is quite ugly and lacks the readability of the other large JS frameworks such as React or Vue. \n" +
          "In terms of my work on this project, I felt fairly happy with the outcome. The project works as a wanted it to " +
          "and I particularly like how the tables interact with the forms. I enjoyed using Livewire however I think I’ll " +
          "stick to the larger JS frameworks until it’s had a chance to mature. (Note July-23: Livewire 3 looks very interesting!)",
      },
    ],
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
    underlineColor: "after:bg-orange-700",
    borderColor: "border-orange-700",
    gitHubLink: "https://github.com/pjholt1234/personal-portfolio-v1",
    description:
      "My first project out of uni was to create a portfolio site in support of my CV. This site was very basic " +
      "with simple html CSS and alittle javascript. For most of my projects in uni I didn’t have the time to learn CSS " +
      "so I took this opportunity to explore Bootstrap and styling in general.",
    technology: ["Javascript", "CSS"],
    imgAlignment: "object-left-top",
    scrollPanels: [
      {
        title: "Description",
        type: "text",
        text:
          "My first project out of uni was to create a portfolio site in support of my CV. This site was very basic " +
          "with simple html CSS and a little javascript. For most of my projects in uni I didn’t have the time to learn CSS " +
          "so I took this opportunity to explore Bootstrap and styling in general.",
      },
      {
        title: "Gallery",
        hideTitle: true,
        type: "gallery",
        images: [
          files.about,
          files.about2,
          files.contact,
          files.homepage,
          files.projectExample,
        ],
      },
    ],
  },
  {
    id: "dissertation",
    title: "Final Year Dissertation",
    date: "Oct 2020 - April 2021",
    bgColor: "bg-blue-800",
    underlineColor: "after:bg-blue-800",
    borderColor: "border-blue-800",
    gitHubLink: "https://github.com/pjholt1234/ExerciseWebCompanion",
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
    imgAlignment: null,
    technology: ["PHP", "MySql", "Javascript", "JQuery", "CSS"],
    description:
      "My final year dissertation was my first large-scale web application. My idea for the project was to create a tool " +
      "for planning, scheduling and tracking workouts.",
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
    scrollPanels: [
      {
        title: "Description",
        type: "text",
        text:
          "For my final year dissertation, I built a web application for planning, scheduling and recording exercise plans. " +
          "I achieved this primarily with, MySql, PHP, and Javascript. It was the first of many things for me and I learnt " +
          "a great deal surrounding web development and broader application development. Key takeaways from this project " +
          "were, planning and design methods such as UML + agile, database design, and fundamentals of how the web works.",
      },
      {
        title: "Gallery",
        hideTitle: true,
        type: "gallery",
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
      },
      {
        title: "Reflections",
        type: "text",
        text:
          "I’m writing this over a year in the future so when looking over this project I see many mistakes I made. " +
          "However, I have to remind myself that I was only at the beginning of my coding career. If I could go back and " +
          "give myself some advice it would be, to do some more research. \n These include which I hard-coded which could " +
          "have been achieved in a simple framework. I wrote some crazy string concatenation things for the sole purpose of " +
          "tracking the position of an element in a sortable list. I wrote many raw SQL queries which could have been handled " +
          "by something like Laravel or a similar ORM.",
      },
    ],
  },
  {
    id: "data-mining",
    images: [
      files.aproiri,
      files.aproiriEvaluation,
      files.corrMatrix,
      files.customerBehaviour,
      files.firstRecommender,
      files.hybrid,
      files.hybridEvaluation,
    ],
    title: "Intro to data science",
    date: "Jan 2021 - April 2021",
    bgColor: "bg-purple-800",
    underlineColor: "after:bg-purple-800",
    borderColor: "border-purple-800",
    gitHubLink:
      "https://github.com/pjholt1234/RetailRocketNoteBook/blob/main/Group_1.ipynb",
    description:
      "This group project was an introduction to data science. Within this module I was fortunate to be given the " +
      "chance to learn about machine learning and data mining which culminated in this final project where we had to " +
      "build a store item recommender based on the retail rocket dataset.",
    technology: [
      "Python",
      "Pandas",
      "sklearn",
      "Matplot",
      "mlxtend",
      "LightFM",
    ],
    imgAlignment: "object-left-top",
    links: [
      {
        link: "https://www.kaggle.com/datasets/retailrocket/ecommerce-dataset",
        text: "Retail rocket dataset",
        icon: "fa-solid fa-file",
      },
    ],
    scrollPanels: [
      {
        title: "Description",
        type: "text",
        text:
          "This group project was an introduction to data science. Within this module I was fortunate to be given the " +
          "chance to learn about machine learning and data mining which culminated in this final project where we had to " +
          "build a store item recommender based on the retail rocket dataset.",
      },
      {
        title: "Gallery",
        hideTitle: true,
        type: "gallery",
        images: [
          files.aproiri,
          files.aproiriEvaluation,
          files.corrMatrix,
          files.customerBehaviour,
          files.firstRecommender,
          files.hybrid,
          files.hybridEvaluation,
        ],
      },
    ],
  },
];

export default projects;
