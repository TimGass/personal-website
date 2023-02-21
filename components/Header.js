import Link from "next/link";

export default function Header({ linkArray }) {
  return (
    <header className="header">
      <div className="headerLeft">
        {!linkArray[0]?<Link href="/portfolio">
          Portfolio
        </Link>:null}
        {!linkArray[1]?<Link href="/skills" id="skillsLink">
          Skills
        </Link>:null}
        {!linkArray[2]?<Link href="/about" id="aboutLink">
          About
        </Link>:null}
      </div>
      <div className="headerRight">
        <a href="mailto: timothyagass@gmail.com?subject=Reaching Out&body=Hi,">
          Email
        </a>
        <a target="_blank" rel="noopener noreferrer" href='/Resume.pdf'>
          Resume
        </a>
      </div>
    </header>
  );
}

