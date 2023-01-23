import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcoome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jakub',
  subtitle: 'Welcome to my Portofolio.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne:
    'I am a Computer Science Student who loves coding, solving problems, and learning new things. Always looking for new chalenges.',
  paragraphTwo:
    'I am passionate about Web development, and my favourite technologies are React, Gatsby and GraphQL.',
  paragraphThree: 'In my free time I like reading books, learning foreign languages and sport.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'timetable.png',
    title: 'College Timetable',
    info: 'Timetable made for college which I attend.',
    info2:
      'This is a fullstack team project with frontend made in React and backend in Laravel. Data is scraped from the official timetable site.',
    url: 'https://plan.collegiumwitelona.com.pl/',
    repo: 'https://github.com/scrap-masters/frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'meetup.png',
    title: 'Meetup',
    info: 'Meetup is a library made in Laravel, that allows technically unfamiliar users to easily make their own meetup application where they can add new meetups and assign speakers to them.',
    info2:
      'This is an internship project. I work on a team of five and I am responsible for UX/UI and frontend.',
    repo: 'https://github.com/blumilksoftware/meetup', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'notes.png',
    title: 'Notes',
    info: 'Notes is an application that allows users to take notes. It is a full stack application with client made in React and server made in Strapi.',
    info2: '',
    url: 'https://react-strapi-notes-app.netlify.app/',
    repo: 'https://github.com/JakubZakowicz/notes-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'rick_and_morty.png',
    title: 'Rick and Morty Website in Gatsby',
    info: 'This website is made in Gatsby, where in comparison to its React version this website is statically generated, in order to make this website faster and more efficient.',
    info2: '',
    url: 'https://gatsby-rick-and-morty-graphql.netlify.app/',
    repo: 'https://github.com/JakubZakowicz/gatsby-rick-and-morty-graphql', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'rick_and_morty.png',
    title: 'Rick and Morty Website in React',
    info: 'This is a website that displays information about characters, episodes and locations from one of the most popular and beloved (by my included) TV shows called "Rick and Morty".',
    info2:
      'This website is made with React. Chakra UI library is used to style this website and data are fetched from the GraphQL API with help of Apollo Client.',
    url: 'https://react-rick-and-morty-graphql.netlify.app/',
    repo: 'https://github.com/JakubZakowicz/react-rick-and-morty-graphql', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'building_designing.png',
    title: 'Building Designing Landing Page',
    info: 'This landing page is a clone of a free wordpress template made in Gatsby.',
    info2: '',
    url: 'https://gatsby-building-designing-landing-page.netlify.app/',
    repo: 'https://github.com/JakubZakowicz/gatsby-building-designing-landing-page', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/jakub.zakowicz/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jakub-zakowicz-109679244/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/JakubZakowicz',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
