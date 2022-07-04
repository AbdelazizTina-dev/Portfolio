import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Abdelaziz's Portfolio", // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my personal website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Abdelaziz Tina',
  subtitle: 'I am a Frontend Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a 22 years old Frontend web developer with experience building modern web applications. I have all the basics needed including HTML, CSS and JavaScript (incl. ES6+), I mainly use React.js with hands-on knowledge in several frameworks including Angular and Laravel.',
  paragraphTwo:
    'I am also familiar with and can use the following: Redux.js, Next.js, TailwindCSS, SASS, NPM, Git, REST APIs and Docker.',
  paragraphThree:
    "On June 2022, I graduated with a master's degree in Computer Science from ELTE University specializing in Software and Service Architecture.",
  resume: 'https://drive.google.com/file/d/1R9NVcEQkhdwW1uKkdQSzfRsGgLVqpvK1/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ecommerce.png',
    title: 'Gomu Shop',
    info: 'A fully responsive e-commerce web application built with Next.js that can be customized on the fly using Sanity Headless CMS with Stripe as a payment system.',
    info2: '',
    url: 'https://gomu-ecommerce.vercel.app/',
    repo: 'https://github.com/AbdelazizTina-dev/ecommerce', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cryptohub.png',
    title: 'Cryptohub',
    info: 'A web application built with React.js that tracks cryptocurrencies informations using multiple public APIs. Redux was used for state management and TailwindCSS for styling.',
    info2: '',
    url: 'https://cryptohubv0.netlify.app/',
    repo: 'https://github.com/AbdelazizTina-dev/Cryptohub', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'lms.png',
    title: 'Learning Management System',
    info: 'SSR Web Application built with Laravel as a school project with multiple features: Teacher/Student login, Teachers offering subjects and students can take them, Students solving tasks and submiting them and more.',
    info2: '',
    url: 'https://abdelaziz-lms.herokuapp.com/',
    repo: 'https://github.com/AbdelazizTina-dev/Laravel-Learning-Management-System', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to hire me? Awesome!',
  btn: '',
  email: 'tinaabdelaziz8@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/abdelaziz-tina-4998251b7/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/AbdelazizTina-dev',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
