import React, { useEffect, useRef } from 'react'
import '../css/Landingpage.css'
import plant from '../assets/plant1.png'
import plant2 from '../assets/plant2.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Marquee from './Marquee'

const Landingpage = () => {
  const plantRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.fromTo('.textcoverPlant',
      { scale: 2 },
      { scale: 1, duration: 1.5, ease: "power2.out" }
    ).to('.textcoverPlant', {
      y: 15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.fromTo('.textcoverPlant2',
      { scale: 1.5, transformOrigin: "center center" },
      { 
        scale: 1, 
        duration: 1.8, 
        ease: "power2.out",
        force3D: true
      }
    );
  }, []);

  return (
    <section className='landingpageSection'>
      <div className='landingpageText'>
        <p>Let's Make the World a Little Greener,
          <img ref={plantRef} src={plant} alt='plant1' className='textcoverPlant'/>
          <br /> One Plant at a Time <br/>
          <div className="arrow-container">
            <div className="arrow"></div>
            <div className="arrow-head"></div>
          </div>
        </p>
      </div>
      <div className='showCaseLandingpage'>
        <Marquee />
      </div>
      {/*<img src={plant2} alt='plant2' className='textcoverPlant2'/>*/}
    </section>
  )
}

export default Landingpage