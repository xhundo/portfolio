import { template } from "../utils/constants";
import { skillTemp } from "../utils/constants";
import { skillSet } from "../utils/constants";
import html5 from "../assets/mobile/HTML5.svg";
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
const downloadBtn = document.querySelector("#download");
let newSkills;

const projects = [
    {
        title: "News Explorer",
        src: "../assets/newsexx.png",
        alt: "News Explorer",
        link: "https://github.com/xhundo/news-explorer-frontend",
    },
    {
        title: "Around The Us",
        src: "../assets/around.jpg",
        alt: "Around The Us",
        link: "https://github.com/xhundo/se_project_aroundtheus",
    },
    {
        title: "Portland to portland",
        src: "../assets/portland.png",
        alt: "Project 003",
        link: "https://github.com/xhundo/web_project_3",
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

async function downloadFile(url, filename = "") {
    fetch(`${url}`, {
        method: "GET",
    })
        .then((res) => res.blob())
        .then((res) => {
            const link = document.createElement("a");
            link.setAttribute("download", filename);
            const href = URL.createObjectURL(res);
            link.href = href;
            link.setAttribute("target", "_blank");
            link.click();
            URL.revokeObjectURL(href);
        })
        .catch((e) => {
            console.log(e);
        });
}

downloadBtn.addEventListener("click", (e) => {
    e.preventDefault();
    downloadFile(
        'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e5ad6f40-433a-4a3b-ab96-2bffc9f72494/resumeupdated_%287%29.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230323T030828Z&X-Amz-Expires=86400&X-Amz-Signature=9416754bc057fc7be479aab508690992a437109e7f98ae677299c475872c9e93&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D"resumeupdated_%2525287%252529.pdf"&x-id=GetObject',
        "KJResume.pdf"
    );
});

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
