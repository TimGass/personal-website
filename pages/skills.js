export default function Skills() {
  return (
    <div className="content" id="list">
      <h1>Skills</h1>
      <ul id="skillsList">
        <li>
          <h2>Node</h2>
          <p id="nodeText">
            Experience with Node, Mongo, Express and modeling tools such as
            Mongoose. Experience in building multiple REST APIs in Node with
            the Chronophobia API or Park-A-Lot in the Projects section of this website
            being prime examples. Also, experienced in deployments of such
            servers to cloud server infrasctructures.
          </p>
        </li>
        <li>
          <h2>Sass</h2>
          <p id="sassText">
            Ability to use Sass, partials, mixins, and grid systems. This
            site was built using Sass, with a Bourbon and Neat grid system.
            Also, experienced in responsive design and media queries. The
            site uses them, so feel free to check it out!
          </p>
        </li>
        <li>
          <h2>JavaScript</h2>
          <p id="jsText">
            Ability to use vanilla JavaScript and multiple frameworks, such
            as React and Backbone. Experienced in Jquery, AJAX requests, and
            event handlers. Experience performing dynamic data handling,
            routing, and dynamic routing. Also, experienced in single-page application
            development with React Router and component and class based programming.
            Proficient in ES6, and ES7.
          </p>
        </li>
        <li>
          <h2>Version Control</h2>
          <p id="gitText">
            Experience with Git and Github. I have worked on multiple group
            projects and have experience with fetching, merging, and
            handling merge conflicts. Experience doing modular development,
            with testing, and the Gulp build system.
          </p>
        </li>
      </ul>
      <a target="_blank" rel="noopener noreferrer" href="/Resume.pdf">
        Resume
      </a>
    </div>
  );
};
