import React from 'react'
import '../css/Page1.css'
import leaf1 from '../assets/page1/leaf1.png'
import leaf2 from '../assets/page1/leaf2.png'
import leaf3 from '../assets/page1/leaf3.png'
import leaf4 from '../assets/page1/leaf4.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import plant from '../assets/marquee/plant2.png'


const Page1 = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo('.page1Content', {
      width: '0%',
      opacity: 0
    }, {
      width: '80%',
      opacity: 1,
      delat:0.50,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: '.page1Section',
        start: 'top center',
        toggleActions: 'play none none reverse'
      }
    });

    gsap.to('.plant', {
      y: 20,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });
  }, []);

  return (
    <section className='page1Section'>
      <div className="topTemplate"></div>
      
      <div className='page1Content'>
        <h1 className='page1ContentHeading'>
          <span style={{borderBottom: '3px solid #A5CE34'}}>Cultivate your inner peace with the simplicity of <span style={{color: '#A5CE34'}}>greenery</span>.</span>
        </h1>
        <img src={leaf1} alt='leaf img' className='leaf1' />
        <img src={leaf4} alt='leaf img' className='leaf2' />
        <img src={plant} alt ='plant img' className='plant'/>
      </div>

      <div className="bottomTemplate"></div>
    </section>
  )
}

export default Page1

// 