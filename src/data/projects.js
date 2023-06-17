import * as images from "../assets/index.js";

const projects = [
    {
        "images": [
            images.disPlanning1,
            images.disPlanning2,
            images.disPlanning3
        ],
        "title": "Final Year Dissertation",
        "date": "Oct 2020 - April 2021",
        "bgColor": "bg-blue-800",
        "gitHubLink": "https://github.com/pjholt1234/ExerciseWebCompanion",
        "description": "My final year dissertation was my first large scale web application. The aim of the project was to create a tool for planning, scheduling and tracking workouts.",
        "technology": [
            'PHP',
            'Javascript',
            'JQuery',
            'MySql',
            'CSS'
        ],
        "imgAlignment": null,
    },
    {
        "images": [
            images.notionSteamApp
        ],
        "title": "Steam Market Price Tracker",
        "date": "Mar 2023 - May 2023",
        "bgColor": "bg-red-700",
        "gitHubLink": "https://github.com/pjholt1234/notion-steam-app",
        "description": "This project provides an interface for entering steam item purchases + sales, and calculates profit based on item price data. Additional, it allows you to export to a notion table. The aim of the project practice using laravel livewire and the TALL stack.",
        "technology": [
            'PHP',
            'Javascript',
            'Laravel',
            'Livewire',
            'Tailwind',
            'Alpine JS'
        ],
        "imgAlignment": "object-left-top"
    }
];

export default projects;