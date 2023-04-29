import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  java,
  python,
  typescript,
  express,
  php,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  mysql,
  git,
  figma,
  docker,
  meta,
  starbucks,
  godownmart,
  edunetFoundation,
  Xlnc,
  tesla,
  shopify,
  Votex,
  Restaurant,
  Onlinecode,
  Healthcare,
  pingpong,
  todo,
  imdb,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "mySQL",
    icon: mysql,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  
  {
    name: "php",
    icon: php,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "python",
    icon: python,
  },
  
];

const experiences = [
  {
    title: "Full Stack Developer intern",
    company_name: "Edunet Foundation",
    icon: edunetFoundation,
    iconBg: "#E6DEDD",
    date: "September 2022 - November 2022",
    points: [
      "Developed a complete full stack website in php to manage and book doctors appointment.",
      "Implementing responsive design using html css and bootstrap and ensuring cross-browser compatibility.",
      "Conducted thorough testing and debugging to identify and resolve any technical issues or bugs.",
      "Actively participated in team meetings, code reviews, and other project-related discussions to contribute to the project's success.",
    ],
  },
  
  {
    title: "Software Developer intern",
    company_name: "Godown Mart",
    icon: godownmart,
    iconBg: "#383E56",
    date: "February 2023 - April 2023",
    points: [
      "Worked on the development of an artificial intelligence and machine learning model for video processing and identification, leveraging technologies such as Python and TensorFlow.",
      "Collaborated with a team of developers to implement new features and functionalities to enhance the applications overall performance.",
      "Utilized OpenCV, cryptographic, invisible watermark, and fingerprinting technology to ensure faster processing and matching of videos.",
      "Participated in code reviews and provided constructive feedback to other developers, helping to maintain high coding standards and improve team efficiency.",
    ],
  },
  {
    title: "Full stack Developer intern",
    company_name: "Xlnc.io",
    icon: Xlnc,
    iconBg: "#E6DEDD",
    date: "April 2023 - Present",
    points: [
      "Developing and maintaining web applications using Node.js,React.js ,Express , Mongodb and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Ensured cross-browser compatibility to ensure seamless website performance across different web browsers.",
      "Developed Rest APIs to manage the inventory and the csv file imports.",
      "Learned and applied best practices in software development, including agile methodologies and software testing.",
    ],
  },
];
/*
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
];*/
const Minorprojects = [
  {
    name: "Todo App",
    description:
      "Web based application  that allows users, to manage there work by storing it in todo app, you can add,edit,delete your tasks in this app with different catogries.",
    tags: [
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "ejs",
        color: "blue-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/anandkr47/Full_stack-ToDo_App",
    live_link: "https://full-stack-todo-app-bpzn.onrender.com/",
  },
  {
    name: "Ping Pong Game",
    description:
      "It is a single player Ping Pong Game Website, which user can play both in mobiles and computers, automatic score updation using javascript algorithm.",
    tags: [
      
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: pingpong,
    source_code_link: "https://github.com/anandkr47/Ping-Pong-Game",
    live_link: "https://pingpong-byanand.netlify.app/",
  },
  {
    name: "Online Code Compiler",
    description:
      "A comprehensive online code compiler that can compile multiple languages like C,C++,Java,Python and Javascript, and also you can download the code from website.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "Rapid API",
        color: "pink-text-gradient",
      },
      
    ],
    image: Onlinecode,
    source_code_link: "https://github.com/anandkr47/Onlinecode-compiler-in-REACT",
    live_link: "https://online-compilerby-anand.netlify.app/",
  },
  {
    name: "IMDB Clone",
    description:
      "web based clone of imdb using omdb api , it has some features of imdb which includes movie search, ratings ,favorite, watch later.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: " Rapid API",
        color: "pink-text-gradient",
      },
      
    ],
    image: imdb,
    source_code_link: "https://github.com/anandkr47/IMDB-clone",
    live_link: "https://anandkr47.github.io/IMDB-clone/",
  },
  
  
];


const projects = [
  {
    name: "E-Voting In Blockchain",
    description:
      "Web 3-based platform that allows Voters and party candidate, to manage there account and vote safely, providing a safe  and secure solution for online Elections.",
    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "mySQL",
        color: "green-text-gradient",
      },
      
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "ejs",
        color: "blue-text-gradient",
      },
    ],
    image: Votex,
    source_code_link: "https://github.com/anandkr47/Online-VotingSystem-in-Blockchain",
  },
  {
    name: "Heakthcare App",
    description:
      "Web application that enables users to take Appointment from doctors online, view and edit Appointments, and locate available hospitals on their current location.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mySQL",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: Healthcare,
    source_code_link: "https://github.com/anandkr47/healthcare_guidance-project",
  },
  {
    name: "My Reastaurant",
    description:
      "A gui application that allows users to manage there restaurant, by adding ,deleting updating the menu items, and also provides a feature to manage the orders and generate bills.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tkinter",
        color: "pink-text-gradient",
      },
      
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "gui",
        color: "pink-text-gradient",
      },
      
    ],
    image: Restaurant,
    source_code_link: "https://github.com/anandkr47/Smart_restaurant_billing_system",
  },
];

export { services, technologies, experiences, projects, Minorprojects };
