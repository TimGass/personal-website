import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  return (
    <>
      <div id="projects">
        <ul>
          <li>
            <Link href="/portfolio/park-a-lot#about" scroll={false}>
              <Image
                fill
                src={'/Park-A-Lot.png'}
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                alt="A picture of the web API known as Park-A-Lot."
              />
              <div className="project-description">
                <h3>Park-A-Lot</h3>
                <p>View Project</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/portfolio/chronophobia#about" scroll={false}>
              <Image
                fill
                src={'/Chronophobia.png'}
                style={{ objectFit: 'cover', objectPosition: 'left' }}
                alt="A picture of the web API known as chronophobia."
              />
              <div className="project-description">
                <h3>Chronophobia</h3>
                <p>View Project</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/portfolio/acquali#about" scroll={false}>
              <Image
                fill
                src={"/Acquali.png"}
                style={{ objectFit: 'cover', objectPosition: '57% top' }}
                alt={"A picture of the front-end of a webtool known as the Acquali wordcloud tool."}
              />
              <div className="project-description">
                <h3>Acquali</h3>
                <p>View Project</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/portfolio/goals#about" scroll={false}>
              <Image
                fill
                src={'/Goals.png'}
                style={{ objectFit: 'cover', objectPosition: 'right top' }}
                alt={"A picture of the Goals splash page, with a soccer goal."}
              />
              <div className="project-description">
                <h3>Goals</h3>
                <p>View Project</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/portfolio/github-recreation#about" scroll={false}>
              <Image
                fill
                src={"/github-recreation.png"}
                alt="A picture of a recreation of TimGass' GitHub Repo page."
                style={{ objectFit: 'cover', objectPosition: '13% top' }}
              />
              <div className="project-description">
                <h3>Github Recreation</h3>
                <p>View Project</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/portfolio/powell-peralta-recreation#about" scroll={false}>
              <Image
                fill
                src={"/PowellPeralta.png"}
                alt={"A picture of a Powell-Peralta splash page recreation, with skaters and skateboarders, and custom skull logo."}
                style={{ objectFit: 'cover', objectPosition: 'right' }}
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