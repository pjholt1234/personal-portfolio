import * as files from "../assets/index.js";

const events = {
  uni: {
    id: "uni",
    heading: "University of the West of England",
    date: "Sept 2018 - June 2021",
    subheading: "First Class, Bcs Business Computing",
    description:
      "I graduated from UWE in the summer of 2021 with a first-class degree in business computing. Throughout the program, " +
      "I covered many topics around software development. These included project management, core programming skills," +
      " web development and software development methodologies.",
    color: "bg-blue-800",
    underlineColor: "after:bg-blue-800",
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
        title: "Description",
        type: "text",
        text:
          "I graduated from UWE in the summer of 2021 with a first-class degree in business computing. Throughout " +
          "the program, I covered many topics around software development. These included project management, core " +
          "programming skills, web development and software development methodologies.",
      },
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
            pills: [{ text: "Java" }],
          },
          {
            heading: "Twin Cities web application",
            link: "https://github.com/pjholt1234/twincities",
            text:
              "This project constituted a large portion of the DSA module and was my first web and full-stack " +
              "application. I use PHP, Javascript, HTML, CSS and MySQL to deliver a website which used the Google Maps " +
              "API to show points of interest in two twin cities. The project also made use of the Flickr image API to" +
              " pull in images relating to the points of interest.",
            pills: [
              { text: "PHP" },
              { text: "Javascript" },
              { text: "MySQL" },
              { text: "CSS" },
              { text: "Google Maps API" },
              { text: "Flickr API" },
            ],
          },
          {
            heading: "UWE Support revamp",
            text:
              "In this project, my group mates and I had to liaise with a real-life client to extract and manage " +
              "deliverables. Our client was the universities head of IT and our task was to help identify and fix " +
              "problematic areas of the UWE support website. This culminated in creating a mock of our proposed fixes" +
              " and a presentation of our findings.",
            pills: [{ text: "PHP" }, { text: "Javascript" }, { text: "CSS" }],
          },
          {
            heading: "Introduction to data science",
            link: "/projects/data-mining",
            text:
              "This group project was an introduction to data science. Within this module I was fortunate to be given the " +
              "chance to learn about machine learning and data mining which culminated in this final project where we had to " +
              "build a store item recommender based on the retail rocket dataset.",
            pills: [
              { text: "Python" },
              { text: "Pandas" },
              { text: "sklearn" },
              { text: "Matplot" },
              { text: "mlxtend" },
              { text: "LightFM" },
            ],
          },
          {
            heading: "Exercise web companion (Final year project)",
            link: "/projects/dissertation",
            text:
              "For my final year dissertation, I built a web application for planning, scheduling and recording exercise plans. " +
              "I achieved this primarily with, MySql, PHP, and Javascript. It was the first of many things for me and I learnt " +
              "a great deal surrounding web development and broader application development. Key takeaways from this project " +
              "were, planning and design methods such as UML + agile, database design, and fundamentals of how the web works.",
            pills: [
              { text: "PHP" },
              { text: "Javascript" },
              { text: "JQuery" },
              { text: "MySQL" },
              { text: "CSS" },
              { text: "Youtube API" },
            ],
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
    subheading: "Junior Web Developer",
    description:
      "I joined Lightflows in October 2021. Since starting working at Lightflows, I have had the opportunity to work on" +
      " many exciting projects as well as learn new technologies such as Laravel, Livewire, React, Drupal, WordPress " +
      "and even some Unity. I have contributed to project ranging from brochure sites to a fully automatic video rendering " +
      "platform.",
    scrollPanels: [
      {
        title: "Description",
        type: "text",
        text:
          "During my time at Lightflows, I have had the chance to work on a wide variety of projects and " +
          "technologies. The agency has provided a great environment for learning and developing myself in the early years " +
          "of my career. In a single month, I could be working on a full stack node or Laravel application, designing a " +
          "piece of middleware to integrate two external client systems or building a slick brochure site for their wide " +
          "client base",
      },
      {
        title: "My role",
        type: "text",
        text:
          "Due to the fast-paced environment that comes with an agency, I have had to be flexible. As a rough " +
          "estimate I spend 60% of my time on backend tasks and 35% on frontend and 5% on DevOps. Often, I must see a " +
          "feature from the point of receiving the wireframes from a design to deployment. \n" +
          "I will sketch out my solution to the task and run this by my lead developer before actioning it. In the case " +
          "of features which require the use of new technology, I am sometimes required to research, plan and prototype" +
          " a particular solution. Then, once this is finished, feedback the information to the lead developer and /" +
          " or project management. \n",
      },
      {
        title: "Languages + frameworks",
        type: "list",
        items: [
          "PHP",
          "Javascript",
          "Laravel",
          "MySQL",
          "React",
          "NodeJS",
          "C#",
          "CSS",
          "Tailwind",
          "AlpineJs",
          "Livewire",
          "Unity",
          "Wordpress",
          "Drupal",
          "Bash",
        ],
      },
      {
        title: "Tools + services",
        type: "list",
        items: [
          "Git",
          "Jira",
          "Asana",
          "Bitbucket Pipelines",
          "Ansible",
          "Composer",
          "NPM",
          "Nexrender",
          "Adobe After Effects CLI",
          "Laravel Nova",
          "Spatie libraries (Media library, Roles, etc)",
          "Brightpearl stock management API",
          "Shopify API",
          "Hubspot API",
        ],
      },
      {
        title: "Projects introduction",
        type: "text",
        text:
          "The bread and butter of the agency, and therefore what I have been primarily focused on, is the " +
          "LAMP stack. Often, the base of the stack will be Laravel using a MySQL backend, with a Blade frontend or for " +
          "more complex UI, React or Livewire. \n " +
          "Lightflows customer base is very diverse, it includes, fintech, real estate, " +
          "and education. I have been fortunate enough to be involved in both backend and frontend development while working " +
          "here. This at times has been challenging to keep up learning all the technology required however, this has made more " +
          "a far more flexible and adaptable developer.",
      },
      {
        title: "Project examples",
        type: "detailed-list",
        items: [
          {
            heading: "Video rendering Platform",
            text:
              "This project was built to provide clients with a portal to render marketing videos tailored to their " +
              "client base. A user could select a company name from Hubspot, which would pull down its name, logo and " +
              "company colours. This, along with a selected video template, is used as a configuration for a custom " +
              "render. A request was fired to an after-effect instance running on a separate server which rendered a " +
              "complete video using the configuration. Once rendered this would automatically be uploaded to Vimeo and " +
              "a webhook would be called upon completion which would fire a notification to the user who request the " +
              "video.\n" +
              "My role in the project was to build the complete video rendering backend, all supporting API endpoints, " +
              "status tracking, error handling, uploading and the webhook which began the notification flow. " +
              "This project was built using NodeJS for the renderer and Laravel + React for the portal. I learnt a " +
              "lot about how to structure a system which requires multiple servers and how to track monitor and track " +
              "the system effectively.",
            pills: [
              {
                text: "NodeJS",
              },
              {
                text: "Laravel",
              },
              {
                text: "Adobe AE CLI",
              },
              {
                text: "React",
              },
            ],
          },
          {
            heading: "Project management platform",
            text:
              "This project involved creating an internal admin portal for a large construction company. It was " +
              "designed to connect with their external access database and track projects. The platform was very " +
              "comprehensive, offering tracking for purchase orders, health and safety certification, financial " +
              "tracking as well as an extensive user role and permission system. \n" +
              "My role in this project was split fairly evenly between the front and back end. For many of the " +
              "features, I would be both building the user interface as well as the supporting backend infrastructure. " +
              "This project was my first exposure to Laravel Livewire and the TALL stack. Myself and the team used this to build a full " +
              "internal component library which we used throughout this and other projects.",
            pills: [
              {
                text: "Laravel",
              },
              {
                text: "Livewire",
              },
              {
                text: "MySQL",
              },
              {
                text: "Alpine JS",
              },
              {
                text: "Tailwind",
              },
            ],
          },
          {
            heading: "Reading and spelling unity application",
            text:
              "One of the most left-field projects I have worked on to date involved creating a Unity application " +
              "which had many interactive levels for teaching dyslexic children how to spell. The app was built to " +
              "be available on the web, IOS and Android. Much of the lesson's content was served via a Laravel backend. " +
              "Which also contains a Nova interface where schools and teachers can track student progress.\n" +
              "I built a number of small minigames for the application as well as a few of the lesson types. I also " +
              "built some of the supporting API endpoints which hydrates the lessons and provides student tracking. " +
              "This project was a dip into game development, into Unity and by extension C#.",
            pills: [
              {
                text: "Unity",
              },
              {
                text: "C#",
              },
              {
                text: "Laravel",
              },
              {
                text: "MySQL",
              },
            ],
          },
          {
            heading: "Large corporate Drupal website",
            text:
              "This project was built for a large multinational company with thousands of pieces of content. The website" +
              " is hosted on Digital Ocean and has independent regions. The site was built using a heavily extended " +
              "version of Drupal. The website enables the client to distribute regional content and drive company growth \n" +
              "I worked on several features for this project including investigating and fixing taxonomy to better SEO " +
              "and site health, site styling improvements, and building a system for tracking newsletter sign-up forms " +
              "and displaying the analytics inside of Google's Looker Studio.",
            pills: [
              {
                text: "Drupal",
              },
              {
                text: "Javascript",
              },
              {
                text: "Sass",
              },
              {
                text: "Google Looker Studio",
              },
              {
                text: "Google App Script",
              },
            ],
          },
        ],
      },
    ],
    color: "bg-red-700",
    underlineColor: "after:bg-red-500",
    icon: "fa-sharp fa-solid fa-briefcase",
  },
};

export default events;
