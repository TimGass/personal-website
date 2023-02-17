import Link from 'next/link';
import arrow from "../public/down.png";
import Image from 'next/image';
import Header from './Header';
import { useRouter } from 'next/router';

export default function Top({ linkArray, project }) {
  const router = useRouter();
  const { pathname } = router;
  let name, title, link;

  switch(true) {   
    case pathname.includes('/about'): {
      name = "aboutPage";
      link = "#me";
      title = "About";
      break;
    };

    case pathname.includes('/skills'): {
      name = "skillsPage";
      link = "#list";
      title = "Skills";
      break;
    }

    default: {
      name = "portfolioPage";
      link = project?"#about":"#projects";
      title = "Portfolio";
      break;
    }
  }

  return (
    <div id={name} className="pageDiv">
      <div className="scrollbarTrack">
        <div className="scrollbarThumb" />
      </div>
      <div className="hero-overlay">
        <Image src={'/whiteboard.jpg'} fill sizes='100vw' priority={linkArray[0]} style={linkArray[0]?{ objectFit: 'cover' }:{ visibility: 'hidden'}}/>
        <Image src={'/books.jpg'} fill sizes='100vw' priority={linkArray[1]} style={linkArray[1]?{ objectFit: 'cover' }:{ visibility: 'hidden'}}/>
        <Image src={'/mountain.jpg'} fill sizes='100vw' priority={linkArray[2]} style={linkArray[2]?{ objectFit: 'cover' }:{ visibility: 'hidden'}}/>
        <div className="hero">
          <Header linkArray={linkArray} />
          <h1 className="title">{title}</h1>
          <div className="descriptionLink" style={{ display: 'inline-block' }}>
            <Link
              href={`${link}`}
              scroll={false}
              style={{ position: 'relative', display: "inline-block", width: "2.5em", height: "2.5em", margin: "0 auto"}}
            >
              <Image src={arrow} className="arrow-down" fill sizes='2.5em'/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}