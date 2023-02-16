import { useRouter } from 'next/router'
import projectList from '@hooks/projectList';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';


export default function Project() {
  const router = useRouter();
  const [bottomImages, setBottomImages] = useState(null);
  const [topImage, setTopImage] = useState(null);
  const [currentProject, setCurrentProject] = useState({ name: null, body: null, code: null, id: null });

  useEffect(() => {
    if(router.query.project) {
      let project = router.query.project;
      let currentProjectTemp = projectList.find((element) => element.id === project);
      const images = currentProjectTemp.images.map((image, index) => {
        if(index === 0 && currentProjectTemp.images.length > 1) {
          return <div style={{ width: "60%", margin: "0 auto" }}>
                <Image src={image.src} key={index} alt=''
                  sizes="(max-width: 767px) 70vw,
                          42vw"
                  layout='responsive'
                />
                </div>;
        }
        return (<a href={image.link} key={index}>
          <Image src={image.src} sizes="70vw" alt='' layout='responsive' />
          <div className={`descriptionText descriptionText-${index+1} ${currentProjectTemp.name}`}>
            <h3>{image.description}</h3>
          </div>
        </a>);
      });
      if (images.length > 1){
        setBottomImages(() => images.slice(1));
        setTopImage(images[0]);
      }
      else {
        setBottomImages(() => images);
      }
      setCurrentProject(() => { return { body: currentProjectTemp.body, code: currentProjectTemp.code, name: currentProjectTemp.name, id: currentProjectTemp.id};});
    }
  }, []);

  return (
    <div id="projectsPage">
      <div id={currentProject.id}>
        <div id='about'>
          {topImage}
          <h1>
            {currentProject.name}
          </h1>
          <p>
            {currentProject.body}
          </p>
          <a href={currentProject.code} id='code' >
            <div alt='Picture of the GitHub OctoCat.' id='codeImage' />
            <p>Check out the code!</p>
          </a>
          {bottomImages}
          <Link href='/portfolio#projects' id='back'>Back to Portfolio</Link>
        </div>
      </div>
    </div>);
};