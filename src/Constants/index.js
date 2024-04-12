import portfolio from "../Assets/portfolio.PNG";
import GazaTech from "../Assets/gaza technologies.png";
import calculator from "../Assets/calculator.webp";
import notes from "../Assets/notes.PNG";
import todo from "../Assets/todo.jpg";

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Freelance Frontend Developer",
    company: "Growit MC",
    description: `A part of a team in developing and maintaining web applications using React.js.`,
    technologies: ["Javascript", "React.js"],
  },
  {
    year: "2023 - Present",
    role: "Web Developer",
    company: "Freelance",
    description: `Collaborated and developed user interfaces for web applications using HTML, CSS, Javascript, React, Boostrap, JQuery and SAAS. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["React.js", "Tailwind-CSS"],
  },

];

export const PROJECTS = [
  {
    title: "Gaza Technologies Website",
    image: GazaTech,
    description:
      "Gaza Technologies is a newly started company of a close friend where I helped them build their website. Collaborated to develop modular, reusable code components by writing clean, efficient code to implement new features and functionalities of the entire project and website maintenance",
    technologies: ["React.js", "CSS", "jQuery"],
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Tailwind-CSS", "React.js"],
  },
  {
    title: "Calculator",
    image: calculator,
    description:
      "Introducing my modern and functional calculator, built using HTML, CSS, and JavaScript. This sleek and intuitive calculator was designed with a simple and clean user interface, making it easy to perform quick and accurate calculations.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Notes App",
    image: notes,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Todo List",
    image: todo,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
];

export const CONTACT = {
  address: "Pretoria, Republic of South Africa",
  phoneNo: "+27 63 801 0078",
  email: "lesedisebetola@gmail.com",
};