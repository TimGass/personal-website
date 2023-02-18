import Link from 'next/link';

export default function Footer({ linkArray }) {
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
    </footer>
  );
}
