import Link from "next/link";

export default function Header({ linkArray }) {
  return (
    <header className="header">
      <div className="headerLeft">
        <Link href="/portfolio" className={linkArray[0]?"active":""}>
          Portfolio
        </Link>
        <Link href="/skills" id="skillsLink" className={linkArray[1]?"active":""}>
          Skills
        </Link>
        <Link href="/about" id="aboutLink"  className={linkArray[2]?"active":""}>
          About
        </Link>
      </div>
      <div className="headerRight">
        <a href="mailto: timothyagass@gmail.com?subject=Reaching Out&body=Hi,">
          Email
        </a>
        <a target="_blank" rel="noopener noreferrer" href='./Resume.pdf'>
          Resume
        </a>
      </div>
    </header>
  );
}

