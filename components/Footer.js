import Link from 'next/link';
import { useContext } from 'react';

import StateContext from '@hooks/stateContext';

export default function Footer() {
  const { linkArray } = useContext(StateContext);
  return (
    <footer className="footer">
      <Link href="/portfolio" className={linkArray[0]?"active":""}>
        Portfolio
      </Link>
      <Link href="/skills" className={linkArray[1]?"active":""}>
        Skills
      </Link>
      <Link href="/about" className={linkArray[2]?"active":""}>
        About
      </Link>
      <a target="_blank" rel="noopener noreferrer" href={'/Resume.pdf'}>
        Resume
      </a>
      <a href="mailto: timothyagass@gmail.com?subject=Reaching Out&body=Hi,">
        Email
      </a>
      <a href="https://www.linkedin.com/in/timothy-gass-867a0410a">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className='linkedIn'>
          {"<!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->"}
          <style>{'svg{fill:#ffffff}'}</style>
          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
        </svg>
      </a>
    </footer>
  );
}
