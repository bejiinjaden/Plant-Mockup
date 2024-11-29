import React from 'react'
import '../css/Page2.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import testimonialPlant from '../assets/testimonial/plant4.png'

const Page2 = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page2Section",
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play none none reverse",
      }
    });

    tl.fromTo(".page2Container",
      {
        y: '-100%',
        top: "-5%",
        transformOrigin: "bottom",
        ease: "power2.inOut"
      },
      {
        y: '0',
        top: "-5%",
        transformOrigin: "bottom",
        duration: 2,
        ease: "power2.inOut"
      }
    );

    tl.fromTo(".contactFormHeading",
      {
        opacity: 0,
        y: 20
      },
      {
        delay: 0,
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.2
      }
    );

     tl.fromTo(".formGroup",
      {
        opacity: 0,
        y: 20
      },
      {
        delay: 0,
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.2
      }
    );
    
    
  }, []);

  return (
    <section className='page2Section'>
      <div className="page2Container">
        <div className="contactFormContainer">
          <h1 className='contactFormHeading'>Get in touch</h1>
          <form className='contactForm'>
            <div className="formGroup">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
              />
            </div>
            <div className="formGroup">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              />
            </div>
          </form>
        </div>

        <div className='circleDesign'>
          <img src={testimonialPlant} alt='testimonialPlant' className='testimonialPlant' />
        </div>
      </div>
    </section>
  )
}

export default Page2