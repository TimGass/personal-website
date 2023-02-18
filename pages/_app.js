import '@styles/global.scss';
import 'normalize.css/normalize.css';

import Top from '@components/Top';
import Footer from '@components/Footer';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { gtag, install } from 'ga-gtag';
import Head from 'next/head';

function Application({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;
  const { project } = router.query;
  const linkArray = [false, false, false];
  let name,link,title;

  switch(true) {
    case project: {
      linkArray[0] = true;
      link = "#about";
      name = "portolioPage";
      title= "Portfolio";
      break;
    };
    
    case pathname.startsWith('/about'): {
      name = "aboutPage";
      link = "#me";
      title = "About";
      linkArray[2] = true;
      break;
    };

    case pathname.startsWith('/skills'): {
      linkArray[1] = true;
      name = "skillsPage";
      link = "#list";
      title = "Skills";
      break;
    }

    default: {
      linkArray[0] = true;
      link = "#projects";
      name = "portolioPage";
      title= "Portfolio";
      break;
    }
  }

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag('event', 'screen_view', {
        'app_name': `Timothy Gass's Personal Portfolio`,
        'screen_name': url
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    install(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
    if (window.innerWidth > 1920 || window.innerHeight > 1080) {
      window.resizeTo(1920, 1080);
      window.focus();
    }
  }, []); // Empty array ensures that effect is only run on mount

  return (
    <>
      <Head>
        <title>{project?"Tim Gass":`Tim Gass | ${title}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Top linkArray={linkArray} title={title} link={link} name={name} />
      <Component {...pageProps} project={project}/>
      <Footer linkArray={linkArray} />
    </>
  );
}

export default Application
