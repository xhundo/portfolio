import { template } from "../utils/constants";
import { skillTemp } from "../utils/constants";
import { skillSet } from "../utils/constants";
import html5 from "../assets/mobile/html5.svg";
import css from "../assets/mobile/CSS3.svg";
import js from "../assets/mobile/JS.svg";
import express from "../assets/mobile/express.svg";
import node from "../assets/mobile/NODE.svg";
import react from "../assets/mobile/REACT.svg";
import mongo from "../assets/mobile/MONGO.svg";
import github from "../assets/mobile/Github-m.svg";
import figma from "../assets/mobile/figma-logo-1.svg";

let elems;
let skills2;
let skill;
const container = document.querySelector("#projects");
const wrapper = document.querySelector("#skills");
const container2 = document.querySelector("#skills-3");
const wrapper2 = document.querySelector("#skills-2");
const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward");
let newSkills;

const projects = [
    {
        title: "News Explorer",
        src: "../assets/newsexx.png",
        alt: "News Explorer",
        link: "https://github.com/xhundo",
    },
    {
        title: "Around The Us",
        src: "../assets/around.jpg",
        alt: "Around The Us",
        link: "https://github.com/xhundo",
    },
    {
        title: "Portland to portland",
        src: "../assets/portland.png",
        alt: "Project 003",
        link: "https://github.com/xhundo",
    },
    {
        title: "#",
        src: "#",
        alt: "Project 004",
        link: "https://github.com/xhundo",
    },
];

const mobileSkills = [
    {
        icon: html5,
        skill: "HTML",
        alt: "HTML5 skill icon",
    },
    {
        icon: css,
        skill: "CSS3",
        alt: "CSS3 skill icon",
    },
    {
        icon: js,
        skill: "JS",
        alt: "JavaScript skill icon",
    },
    {
        icon: express,
        alt: "Express.js skill icon",
    },
    {
        icon: node,
        skill: "Node",
        alt: "Node.js Skill Icon",
    },
    {
        icon: react,
        skill: "React",
        alt: "React.js Skill Icon",
    },
    {
        icon: mongo,
        skill: "Mongo",
        alt: "MongoDB Skill Icon",
    },
    {
        icon: github,
        skill: "GitHub",
        alt: "Github Skill Icon",
    },
    {
        icon: figma,
        skill: "Figma",
        alt: "Figma Skill Icon",
    },
    {},
];

function getContent(item) {
    elems = template.content.cloneNode(true);
    const content = template.content;
    const title = content.querySelector("#title");
    const image = content.querySelector("#image");
    const link = content.querySelector("#link");

    title.textContent = item.title;
    image.src = item.src;
    image.alt = item.alt;
    link.href = item.link;

    return elems;
}

function getSkills(i) {
    skill = skillTemp.content.cloneNode(true);
    const skills = skillTemp.content;
    const skillIcon = skills.querySelector("#icon");
    const skillName = skills.querySelector("#skill-p");
    const skillWrapper = skills.querySelector("#skill-container");
    skillIcon.src = i.icon;
    skillIcon.alt = i.alt;

    if (i.hasOwnProperty("skill")) {
        skillWrapper.classList.add("gap-x-2");
        skillName.textContent = i.skill;
    } else {
        skillWrapper.classList.remove("gap-x-2");
        skillName.textContent = "";
    }

    return skill;
}

function renderer(items, container, cb) {
    items.forEach((i) => {
        if (items === projects && container === container) {
            cb(i);
            container.append(elems);
        } else {
            cb(i);
            container.append(skill);
        }
    });
}

if (projects.length > 4) {
    forward.classList.remove("cursor-not-allowed");
    backward.classList.remove("cursor-not-allowed");
} else {
    forward.classList.add("cursor-not-allowed");
    backward.classList.add("cursor-not-allowed");
    forward.setAttribute("disabled", "");
    backward.setAttribute("disabled", "");
}

newSkills = mobileSkills.slice(0, 6);
skills2 = mobileSkills.slice(5, 10);

renderer(projects, container, getContent);
renderer(newSkills, wrapper, getSkills);
renderer(skills2, wrapper2, getSkills);
renderer(skillSet, container2, getSkills);
