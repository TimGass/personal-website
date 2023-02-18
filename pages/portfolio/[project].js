import Image from 'next/image';
import Link from 'next/link';
import projectList from '@js/projectList';
import { useState } from 'react';
import Head from 'next/head';

export default function Project({ project }) {
  let currentProject = { name: null, body: null, code: null, id: null, bottomImages: [], topImage: null };
  const [height, setHeight] = useState(1600);
  const [topHeight, setTopHeight] = useState(0);

  if(project) {
    let bottomImages;
    let topImage;
    let currentProjectTemp = projectList[project];
    const images = currentProjectTemp.images.map((image, index) => {
      if(index === 0 && currentProjectTemp.images.length > 1) {
        return <div className='topImage' style={topHeight===0?{}:{ height: topHeight }}>
              <Image src={image.src} key={index} alt=''
                sizes="(max-width: 767px) 70vw,
                        42vw"
                priority={true}
                fill
                onLoadingComplete={({ naturalHeight, naturalWidth }) => {
                  let ratio = naturalWidth/naturalHeight;
                  setTopHeight((window.innerWidth>767?window.innerWidth*.42:window.innerWidth*.7)/ratio);
                }}
              />
              </div>;
      }
      else if(index === 1 && currentProjectTemp.images.length > 2) {
        return (<a href={image.link} key={index} className={`bottomImage1`}>
        <Image src={image.src} sizes="(max-width: 767p) 70vw, 42vw" fill alt='' style={{ margin: "0 auto" }} />
        <div className={`descriptionText descriptionText-${index+1} ${currentProjectTemp.name}`}>
          <h3>{image.description}</h3>
        </div>
      </a>);
      }
      return (<a href={image.link} key={index}>
        <Image src={image.src} sizes="(max-width: 767p) 70vw, 42vw" width={window?window.innerWidth * .42:806.4} height={height} alt='' onLoadingComplete={({ naturalHeight, naturalWidth }) => {
          const ratio = naturalWidth/naturalHeight;
          setHeight((window.innerWidth>767?window.innerWidth*.42:window.innerWidth*.7)/ratio);
        }} style={{ margin: "0 auto" }} />
        <div className={`descriptionText descriptionText-${index+1} ${currentProjectTemp.name}`}>
          <h3>{image.description}</h3>
        </div>
      </a>);
    });
    if (images.length > 1){
      topImage = images[0];
      bottomImages = images.slice(1);
    } else {
      bottomImages = images;
    }
    currentProject = { body: currentProjectTemp.body, code: currentProjectTemp.code, name: currentProjectTemp.name, id: currentProjectTemp.id, topImage, bottomImages};
  }

  return (
    <div id="projectsPage">
      <Head>
        <title>Tim Gass | {currentProject.name}</title>
      </Head>
      <div id={currentProject.id}>
        <div id='about'>
          {currentProject.topImage}
          <h1>
            {currentProject.name}
          </h1>
          <p>
            {currentProject.body}
          </p>
          <a href={currentProject.code} id='code' >
            <p>Check out the code!</p>
            <div id="codeWrapper">
              <div alt='Picture of the GitHub OctoCat.' id='codeImage' />
            </div>
          </a>
          {currentProject.bottomImages}
          <Link href='/portfolio#projects' id='back'>Back to Portfolio</Link>
        </div>
      </div>
    </div>);
};