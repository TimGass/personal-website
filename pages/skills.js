export default function Skills() {
  return (
    <div className="content" id="list">
      <h1>Skills</h1>
      <ul id="skillsList">
        <li>
          <h2>Node</h2>
          <p id="nodeText">
            Experience with Node, Mongo, Firebase, Express, and ORMs and ODMs such as
            Mongoose and Sequelize. Experience in building multiple REST APIs in Node with encryption at rest and searchable encryption hashes.
            The Chronophobia API, Airmoney, or Park-A-Lot in the Projects section of this website
            being prime examples. Also, experienced in deployments of such
            servers to cloud server infrasctructures and authentication using OAuth platforms and JWT tokens.
          </p>
        </li>
        <li>
          <h2>Syling</h2>
          <p id="sassText">
            Ability to use Sass, CSS flexboxes, partials, mixins, and grid systems. This
            site was built using Sass, with a Bourbon and Neat grid system.
            Also, experienced in responsive design and media queries.
          </p>
        </li>
        <li>
          <h2>JavaScript</h2>
          <p id="jsText">
            Ability to use vanilla JavaScript and multiple frameworks, such
            as React and Backbone. Experience with build frameworks such as Gulp, Grunt, Webpack, Create React App, and NextJS.
            Experienced in Jquery, AJAX requests, and
            event handlers. Experience performing dynamic data handling,
            routing, single-page applications, server-side rendered applications, and dynamic routing.
            Skilled in ES6, React hooks, Redux, websockets, and authentication.
          </p>
        </li>
        <li>
          <h2>Version Control</h2>
          <p id="gitText">
            Experience with Git and Github. I have worked on multiple group
            projects and have experience with fetching, merging, submitting pull request,
            writing up pull request, approving pull requests, and
            handling merge conflicts.
          </p>
        </li>
        <li>
          <h2>Testing</h2>
          <p id="testingText">
            Experience unit testing with with Mocha and Chai.
            Experience in Cypress and Protractor for end to end testing.
          </p>
        </li>
        <li>
          <h2>Workflow Management Software</h2>
          <p id="workText">
            Experience with both Trello and Jira as forms of workflow management software, as well as performing agile sprints.
          </p>
        </li>
      </ul>
      <a target="_blank" rel="noopener noreferrer" href="/Resume.pdf">
        Resume
      </a>
    </div>
  );
};
