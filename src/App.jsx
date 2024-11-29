import { useState, useEffect } from 'react'
import Landingpage from './components/Landingpage'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Footer from './components/Footer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

function App() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to('footer', {
      y: '-500px',
      duration: 4,
      scrollTrigger: {
        trigger: '.page2Section',
        start: 'top top',
        end: '+=50',
        scrub: 4,
        pin:'.page2Section'
      }
    })
  }, []);

  return (
    <div className="container">
      <Landingpage />
      <Page1 />
      <Page2 />
      <Footer/>
    </div>
  )
}

export default App
