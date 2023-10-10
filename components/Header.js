import Link from "next/link";
import { useContext } from 'react';

import StateContext from '@hooks/stateContext';

export default function Header() {
  const { linkArray } = useContext(StateContext);
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

