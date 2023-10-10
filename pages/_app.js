import '@styles/global.scss';
import 'normalize.css/normalize.css';

import Top from '@components/Top';
import Footer from '@components/Footer';
import { useRouter } from 'next/router';
import { useEffect, useReducer } from 'react';
import { gtag, install } from 'ga-gtag';
import Head from 'next/head';

import projectList from '@js/projectList';
import StateContext from '@hooks/stateContext';



function Application({ Component, pageProps }) {

  const router = useRouter();

  const { pathname } = router;
  const { project } = router.query;

  let state = {
    link: "#projects",
    name: "portfolioPage",
    title: "Portfolio",
    linkArray: [true, false, false],
  };

  switch (true) {
    case project: {
      state = {
        link: '#about',
        name: 'portfolioPage',
        title: 'Portfolio',
        linkArray: [true, false, false],
      };
      break;
    };

    case pathname.startsWith('/about'): {
      state = {
        link: '#me',
        name: 'aboutPage',
        title: 'About',
        linkArray: [false, false, true],
      };
      break;
    };

    case pathname.startsWith('/skills'): {
      state = {
        link: '#list',
        name: 'skillsPage',
        title: 'Skills',
        linkArray: [false, true, false],
      };
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
  }, []); // Empty array ensures that effect is only run on mount

  return (
    <>
      <Head>
        {!project?<title>{`Tim Gass | ${state.title}`}</title>:<title>{`Tim Gass | ${projectList[project].name}`}</title>}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <StateContext.Provider value={state}>
        <Top project={project}/>
      </StateContext.Provider>
      <Component {...pageProps} project={project}/>
      <StateContext.Provider value={state}>
        <Footer />
      </StateContext.Provider>
    </>
  );
}

export default Application
