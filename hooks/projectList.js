import parkALotAPI from '../public/park-a-lot-capture.png';
import parkALot from '../public/Park-A-Lot.png';
import team from '../public/teamMaxRes.png';
import chronophobiaMain from '../public/ChronophobiaMain.png';
import chronophobiaAbout from '../public/ChronophobiaAbout.png';
import Acquali from '../public/Acquali.png';
import GoalsMain from '../public/GoalsMain.png';
import GoalsAbout from '../public/GoalsAbout.png';
import GitHubMain from '../public/github-recreation.png';
import GitHubAbout from '../public/GitHubAbout.png';
import PowellPeraltaMain from '../public/PowellPeralta.png';
import PowellPeraltaAbout from '../public/PowellPeraltaAbout.png';

export default [
  {
    name: 'Park-A-Lot',
    id: 'park-a-lot',
    body: [
      'Park-A-Lot is an application developed at HackMT 2020 over 36 hours and is in ongoing development; there it received the award of third place. ',
      'Its current purpose is to use video feeds with OpenCV and Python to track cars as they enter parking lots and update both web and phone ',
      'users of the space remaining in the lots. The back-end is built in Node, Express, Mongo, and Socket.io with Swagger API Docs and Mongoose integration. ',
      'The API server has full token-based authentication. The front-end web application is built in React with Socket.io client integration. ',
      'The Front-End page may need to be refreshed to load as the server host is designed to sleep when inactive.',
    ].reduce((whole, item) => whole + item),
    images: [
      { src: team },
      {
        src: parkALot,
        link: 'https://park-a-lot.netlify.com/',
        description: 'Front-End Application',
      },
      {
        src: parkALotAPI,
        link: 'https://park-a-lot.herokuapp.com/api-explorer/',
        description: 'Back-End API',
      },
    ],
    code: 'https://github.com/Car-Hacked',
  },
  {
    name: 'Chronophobia',
    id: 'chronophobia',
    body: [
      'Chronophobia is a time-efficiency tracking application. I designed it to help people, like myself, really track what they are doing with their time to be more ',
      'efficient with their time expenditures. After all, all we have in life is time. The back-end API itself is built in Node, MongoDB, with SwaggerUI and Swagger Docs.',
      'The front-end has yet to be developed, as I am still working on my mobile applications development platforms.',
    ].reduce((whole, item) => whole + item),
    images: [
      { src: chronophobiaMain },
      {
        src: chronophobiaAbout,
        link: 'https://chronophobia.cyclic.app',
        description: 'Chronophobia API',
      },
    ],
    code: 'https://github.com/TimGass/chronophobia',
  },
  {
    name: 'Acquali Wordcloud Web Tool',
    id: 'acquali',
    body: [
      'Acquali is an online marketing company. They reached out to me and wanted a front-end web-designed application for use with their back-end servers to type in multiple urls ',
      'to search the most commonly used words with various pages to perform web-based marketing research. The front-end web tool is built in React. It is a simple and effective ',
      'demonstration of basic web-design principles and string-parsing.',
    ].reduce((whole, item) => whole + item),
    images: [
      {
        src: Acquali,
        link: 'https://timgass.github.io/acquali-wordcloud',
        description: 'Acquali Wordcloud Web Tool',
      },
    ],
    code: 'https://github.com/TimGass/acquali-wordcloud',
  },
  {
    name: 'Goals',
    id: 'goals',
    body: [
      'Goals is the final project of a three-person team at The Iron Yard Programming Bootcamp in Nashville, TN. Its purpose is to connect people together in order to use social ',
      'networking as a form of accountability for achieving personal goals. The front-end is a single-page application written in React with React Router. The back-end is written in Ruby ',
      'with a PostgreSQL database.',
    ].reduce((whole, item) => whole + item),
    images: [
      { src: GoalsMain },
      {
        src: GoalsAbout,
        link: 'https://jaserader.github.io/week10_finalproject_goals/',
        description: 'Goals Website',
      },
    ],
    code: 'https://github.com/jaserader/week10_finalproject_goals',
  },
  {
    name: 'Github Recreation',
    id: 'github-recreation',
    body: [
      'This project was a part of the curriculum at The Iron Yard Programming Bootcamp in Nashville, TN. It is a simple, yet effective, recreation of the Github Repo page, as it was styled, ',
      "at that time, built in React, with JQuery. It makes AJAX requests to the GitHub API to display the repos of my personal GitHub page, as they are updated in GitHub's database, with links ",
      'to each of the repos.',
    ].reduce((whole, item) => whole + item),
    images: [
      { src: GitHubMain },
      {
        src: GitHubAbout,
        link: 'https://timgass.github.io/homework_week7_tue/',
        description: 'GitHub Recreation',
      },
    ],
    code: 'https://github.com/TimGass/homework_week7_tue',
  },
  {
    name: 'Powell-Peralta Recration',
    id: 'powell-peralta-recreation',
    body: [
      'This project is a simple recreation of the Powell-Peralta homepage, at the time of its creation. This was one of my first programming assignments, ever, at the Iron Yard Programming Bootcamp ',
      'in Nashville, TN. The website is made in vanilla JavaScript, HTML, and CSS. It\'s a great example of how far my programming skills have come, since the beginning of my journey.',
    ].reduce((whole, item) => whole + item),
    images: [
      { src: PowellPeraltaMain },
      {
        src: PowellPeraltaAbout,
        link: 'https://timgass.github.io/homework_week2_weekend/',
        description: 'Powell-Peralta Recreation',
      },
    ],
    code: 'https://github.com/TimGass/homework_week2_weekend',
  },
];