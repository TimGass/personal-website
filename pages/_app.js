import '@styles/main.scss';
import 'normalize.css/normalize.css';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import $ from "jquery";
import Link from 'next/link';
import arrow from "../public/down.png";
import Image from 'next/image';
import LegacyImage from 'next/legacy/image';
import { gtag, install } from 'ga-gtag';

function Application({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;
  const { project } = router.query;
  const linkArray = [false,false,false];
  switch(true) {
    case pathname.includes('/about'): {
      linkArray[2] = true;
      break;
    };

    case pathname.includes('/skills'): {
      linkArray[1] = true;
      break;
    }

    default: {
      linkArray[0] = true;
      break;
    }
  }
  let name;
  let link;
  let title;
  let background;
  switch(true) {
    case project: {
      name = "portfolioPage";
      link = project?"#about":"#projects"
      title = "Portfolio";
      background = "/whiteboard.jpg";
      break;
    };

    case pathname.includes('/about'): {
      name = "aboutPage";
      link = "#me";
      title = "About";
      background = "/mountain.jpg";
      break;
    };

    case pathname.includes('/skills'): {
      name = "skillsPage";
      link = "#list";
      title = "Skills";
      background = "/books.jpg";
      break;
    }

    default: {
      name = "portfolioPage";
      link = "#projects";
      title = "Portfolio";
      background = "/whiteboard.jpg";
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

    function handleResize() {
      let height = window.innerHeight;
      let footer = $('footer.footer').outerHeight();
      let page = $('body').height() - footer;
      let tab = $('div.scrollbarThumb').height();

      const scrollHandler = () => {
        if (page !== $('body').height() - footer) {
          height = $(window).height();
          footer = $('footer.footer').outerHeight();
          page = $('body').height() - footer;
          tab = $('div.scrollbarThumb').height();
        }
        const top = $(window).scrollTop();
        if (!isNaN(top)) {
          const percentage = top / (page - height);
          const position = top + percentage * height;
          const backgroundColor = $('div.scrollbarThumb').css('background-color');
          const arrowDisplay = $('div.descriptionLink').css('display');
          tab = $('div.scrollbarThumb').height();
          if (
            position <= height - Math.round(tab/2) &&
            backgroundColor !== 'rgba(255, 255, 255, 0.3)'
          ) {
            $('div.scrollbarThumb').css(
              'background-color',
              'rgba(255, 255, 255, 0.3)'
            );
            if (top <= 0 && arrowDisplay === 'none') {
              $('div.descriptionLink').css('display', 'inline-block');
            }
          } else if (percentage <= 1) {
            $('div.scrollbarThumb').offset({ top: position });
            if (
              backgroundColor === 'rgba(255, 255, 255, 0.3)' &&
              position > height - Math.round(tab/2)
            ) {
              $('div.scrollbarThumb').css(
                'background-color',
                'rgba(0, 0, 0, 0.7)'
              );
            }
            if (top <= 0 && arrowDisplay === 'none') {
              $('div.descriptionLink').css("display", 'inline-block');
            } else if (arrowDisplay !== 'none' && top > 0) {
              $('div.descriptionLink').css("display", "none");
            }
          } else {
            $('div.scrollbarThumb').css('background-color', 'rgba(0, 0, 0, 0.7)');
            $('div.scrollbarThumb').offset({ top: page - tab + 1});
          }
        }
      };

      const dragHandler = event => {
        $("body").css("cursor", "grabbing");
        const position = event.clientY;
        if (position !== undefined) {
          const percentage = position / window.outerHeight;
          let top = (page - ((height/1.65) * percentage)) * (percentage);
          const backgroundColor = $('div.scrollbarThumb').css('background-color');
          const arrowDisplay = $('div.descriptionLink').css('display');
          if(event.pageY + Math.round(tab/2) <= page && event.pageY >= Math.round(tab/2)){
            $('div.scrollbarThumb').offset({ top: event.pageY - Math.round(tab/2)});
          }
          else if(event.pageY >= tab){
            $('div.scrollbarThumb').offset({ top: page - tab + 1});
          }
          else if(event.pageY + Math.round(tab/2) <= page) {
            $('div.scrollbarThumb').offset({ top: -1 });
          }
          $(window).scrollTop(top);
          if (arrowDisplay === 'none' && top <= 0) {
            $('div.descriptionLink').css("display", 'inline-block');
          } else if (arrowDisplay !== 'none' && top > 0) {
            $('div.descriptionLink').css("display", "none");
          }
          if (
            backgroundColor !== 'rgba(255, 255, 255, 0.3)' &&
            event.pageY <= height
          ) {
            $('div.scrollbarThumb').css(
              'background-color',
              'rgba(255, 255, 255, 0.3)'
            );
          } else if (
            backgroundColor !== 'rgba(0, 0, 0, 0.7)' &&
            event.pageY > height
          ) {
            $('div.scrollbarThumb').css(
              'background-color',
              'rgba(0, 0, 0, 0.7)'
            );
          }
        }
      };

      const releaseHandler = event => {
        $("body").css("cursor", "Default");
        $('html').css('scroll-behavior', 'smooth');
        $(document).off();
        $(window).on("scroll", scrollHandler);
      };

      const clickHandler = event => {
        $('html').css('scroll-behavior', 'auto');
        if (page !== $('body').height() - footer) {
          height = $(window).height();
          footer = $('footer.footer').outerHeight();
          page = $('body').height() - footer;
          tab = $('div.scrollbarThumb').height();
        }
        event.preventDefault();
        $(window).off();
        $(document).on("mouseup", releaseHandler);
        $(document).on("mousemove", dragHandler);
      };

    $(window).off();
    $(document).off();
    $('div.scrollbarThumb').off();
    scrollHandler();
    if ($('div.scrollbarThumb').css('display') !== 'none') {
      $(window).on("scroll", scrollHandler);
      $('div.scrollbarThumb').on("mousedown", clickHandler);
    }
  }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return (
    <>
      <div id={name} className="pageDiv">
        <div className="scrollbarTrack">
          <div className="scrollbarThumb" />
        </div>
        <div className="hero-overlay">
          <LegacyImage src={background} layout="fill" sizes='100vw' priority={true} objectFit={"cover"} />
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
      <Component {...pageProps} />
      <Footer linkArray={linkArray} />
    </>
  );
}

export default Application
