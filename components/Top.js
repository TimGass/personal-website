import Link from 'next/link';
import arrow from "../public/down.png";
import Image from 'next/image';
import Header from './Header';

import whiteboard from "../public/whiteboard2.jpg";
import books from "../public/books2.jpg";
import mountain from "../public/mountain2.jpg";

import StateContext from '@hooks/stateContext';

import { useEffect, useContext, useState } from 'react';
import $ from 'jquery';

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

export default function Top({ project }) {
  const [otherImages, setOtherImages] = useState([]);

  const { link, name, title, linkArray } = useContext(StateContext);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    if (linkArray[2]) {
      setOtherImages([<Image key={1} src={whiteboard} fill style={{ visibility: 'hidden' }} />, <Image key={2} src={books} fill style={{ visibility: 'hidden' }} />]);
    }
    else if (linkArray[1]) {
      setOtherImages([<Image key={1} src={mountain} fill style={{ visibility: 'hidden' }} />, <Image key={2} src={whiteboard} fill style={{ visibility: 'hidden' }} />]);
    }
    else {
      setOtherImages([<Image key={1} src={mountain} fill style={{ visibility: 'hidden' }} />, <Image key={2} src={books} fill style={{ visibility: 'hidden' }} />]);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  const topImage = linkArray[2] ? mountain : linkArray[1] ? books : whiteboard;

  return (
    <div id={name} className="pageDiv">
      <div className="scrollbarTrack">
        <div className="scrollbarThumb" />
      </div>
      <div className={"hero-overlay"}>
        <Image src={topImage} priority fill style={{ objectFit: 'cover' }} />
        {otherImages}
        <div className={"hero"}>
          <Header />
          <h1 className="title">{title}</h1>
          <div className="descriptionLink" style={{ display: 'inline-block' }}>
            <Link
              href={project?"#about":link}
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