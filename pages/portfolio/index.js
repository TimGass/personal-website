import Link from "next/link";
import Image from "next/image";

import airmoney from "../../public/airmoneysmall.png";
import parkalot from "../../public/Park-A-Lot.png";
import goals from "../../public/Goals.png";
import chronophobia from "../../public/Chronophobia.png";
import acquali from "../../public/Acquali.png";
import github from "../../public/github-recreation.png";


export default function Portfolio() {
  return (
    <>
      <div id="projects">
        <ul>
          <li>
            <Link href="/portfolio/airmoney#about" scroll={false}>
              <Image
                fill
                src={airmoney}
                alt={"A picture of the Airmoney website."}
                style={{ objectFit: 'cover', objectPosition: '5%' }}
              />
              <div className="project-description">
                <h3>Airmoney</h3>
                <p>View Project</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/portfolio/park-a-lot#about" scroll={false}>
              <Image
                fill
                src={parkalot}
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
                src={chronophobia}
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
                src={acquali}
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
                src={goals}
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
                src={github}
                alt="A picture of a recreation of TimGass' GitHub Repo page."
                style={{ objectFit: 'cover', objectPosition: '13% top' }}
              />
              <div className="project-description">
                <h3>Github Recreation</h3>
                <p>View Project</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};