import Link from "next/link";

export default function Portfolio() {
  return (
    <>
      <div id="projects">
        <ul>
          <li>
            <Link href="/portfolio/park-a-lot#about" scroll={false}>
              <img
                id="park"
                rel="A picture of the web API known as Park-A-Lot."
              />
              <div className="project-description">
                <h3>Park-A-Lot</h3>
                <p>View Project</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/portfolio/chronophobia#about" scroll={false}>
              <img
                id="chronophobia"
                rel="A picture of the web API known as chronophobia."
              />
              <div className="project-description">
                <h3>Chronophobia</h3>
                <p>View Project</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/portfolio/acquali#about" scroll={false}>
              <img
                id="acquali"
                rel="A picture of the front-end of a webtool known as the Acquali wordcloud tool."
              />
              <div className="project-description">
                <h3>Acquali</h3>
                <p>View Project</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/portfolio/goals#about" scroll={false}>
              <img
                id="goals"
                rel="A picture of the Goals splash page, with a soccer goal."
              />
              <div className="project-description">
                <h3>Goals</h3>
                <p>View Project</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/portfolio/github-recreation#about" scroll={false}>
              <img
                id="github"
                rel="A picture of a recreation of TimGass' GitHub Repo page."
              />
              <div className="project-description">
                <h3>Github Recreation</h3>
                <p>View Project</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/portfolio/powell-peralta-recreation#about" scroll={false}>
              <img
                id="powell"
                rel="A picture of a Powell-Peralta splash page recreation, with skaters and skateboarders, and custom skull logo"
              />
              <div className="project-description">
                <h3>Powell-Peralta Recreation</h3>
                <p>View Project</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};