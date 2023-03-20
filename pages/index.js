import { template } from "../utils/constants";

let elems;
const container = document.querySelector("#projects");
const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward");

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
        title: "",
        src: "",
        alt: "Project 004",
        link: "https://github.com/xhundo",
    },
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

function renderer(items, container, cb) {
    items.forEach((i) => {
        cb(i);
        container.append(elems);
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

console.log(backward, forward);
renderer(projects, container, getContent);
