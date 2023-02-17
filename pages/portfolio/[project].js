import Image from 'next/image';
import Link from 'next/link';
import projectList from '@js/projectList';
import { useState } from 'react';

export default function Project({ project }) {
  let currentProject = { name: null, body: null, code: null, id: null, bottomImages: [], topImage: null };
  const [height1, setHeight1] = useState(672);
  const [height2, setHeight2] = useState(560);
  const [height3, setHeight3] = useState(1600);
  if(project) {
    let bottomImages;
    let topImage;
    let currentProjectTemp = projectList[project];
    const images = currentProjectTemp.images.map((image, index) => {
      if(index === 0 && currentProjectTemp.images.length > 1) {
        return <div className='topImage'>
              <Image src={image.src} key={index} alt=''
                sizes="(max-width: 767px) 70vw,
                        42vw"
                width={window.innerWidth * .42}
                height={height1}
                priority={true}
                onLoadingComplete={({ naturalWidth, naturalHeight }) => {
                    const ratio = naturalWidth/naturalHeight;
                    setHeight1((window.innerWidth>767?window.innerWidth*.42:window.innerWidth*.7)/ratio);
                }}
                style={{ margin: 'none' }}
              />
              </div>;
      }
      return (<a href={image.link} key={index}>
        <Image src={image.src} sizes="(max-width: 767p) 70vw, 42vw" width={window.innerWidth * .42} height={index===1?height2:height3} alt='' onLoadingComplete={({ naturalHeight, naturalWidth }) => {
            if(index===1) {
              setHeight2(naturalHeight);
            }
            else {
              setHeight3(naturalHeight);
            }
        }} />
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