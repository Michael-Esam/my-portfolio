import {
  mobile,
  backend,
  creator,
  web,
  // javascript,
  // typescript,
  // html,
  // css,
  // reactjs,
  // redux,
  // tailwind,
  // nodejs,
  // mongodb,
  // git,
  // figma,
  // docker,
  meta,
  starbucks,
  tesla,
  shopify,
  specialdesign,
  dashboard,
  portfolio,
  // threejs,
} from "../assets";

// import javascript from "../assets/tech/javascript.png"
// import typescript from "../assets/tech/typescript.png"
// import html from "../assets/tech/html.png"
// import css from "../assets/tech/css.png"
// import reactjs from "../assets/tech/reactjs.png"
// import redux from "../assets/tech/redux.png"
// import tailwind from "../assets/tech/tailwind.png"
// import git from "../assets/tech/git.png"
// import threejs from "../assets/tech/threejs.svg"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React.js Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "UI / UX",
    icon: backend,
  },
  {
    title: "Optimization & Deployment",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "/public/tech/html.png",
  },
  {
    name: "CSS 3",
    icon: "/public/tech/css.png",
  },
  {
    name: "JavaScript",
    icon: "/public/tech/javascript.png",
  },
  {
    name: "TypeScript",
    icon: "/public/tech/typescript.png",
  },
  {
    name: "React JS",
    icon: "/public/tech/reactjs.png",
  },
  {
    name: "Redux Toolkit",
    icon: "/public/tech/redux.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/public/tech/tailwind.png",
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: "/public/tech/threejs.svg",
  },
  {
    name: "git",
    icon: "/public/tech/git.png",
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Special Design",
    description:
      "Special Design with JS is an interactive web project built with pure JavaScript, HTML, and CSS. It demonstrates dynamic UI behavior, DOM manipulation, and real-time user interaction. The design is clean and responsive, making it a great example of front-end functionality powered entirely by vanilla JavaScript.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS 3",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: specialdesign,
    source_code_link: "https://github.com/Michael-Esam/project-five-with-js",
    web_link:"https://michael-esam.github.io/project-five-with-js/",
  },
  {
    name: "Dashboard",
    description:
      "Dashboard is a sleek, responsive, and modern admin dashboard designed to visualize data and manage content efficiently. It features a clean UI with interactive charts, intuitive navigation, and dynamic components — all built with HTML, CSS, and JavaScript. Perfect for tracking performance, managing analytics, or showcasing front-end development skills in a professional way.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS 3",
        color: "green-text-gradient",
      },
      {
        name: "CSS Grid",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/Michael-Esam/Michael-Dashboard",
    web_link:"https://michael-esam.github.io/Michael-Dashboard/",
  },
  {
    name: "Portfolio",
    description:
      "Portfolio is a creative front-end project built with HTML and CSS, showcasing clean layout design and attention to detail. It focuses on responsive structure, modern styling, and visual balance — highlighting strong foundational web design skills and an eye for user-friendly interfaces.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS 3",
        color: "green-text-gradient",
      },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Michael-Esam/Micheal-project-one",
    web_link:"https://michael-esam.github.io/Micheal-project-one/",
  },
];

export { services, technologies, experiences, testimonials, projects };
