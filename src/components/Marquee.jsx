import React, { useEffect, useRef } from 'react'
import '../css/Marquee.css'
import plant1 from '../assets/marquee/plant1.png'
import plant2 from '../assets/marquee/plant2.png'
import plant3 from '../assets/marquee/plant3.png'   
import plant4 from '../assets/marquee/plant4.png'
import plant5 from '../assets/marquee/plant5.png'

const Marquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const content = entry.target.getElementsByClassName('marquee-content');
          Array.from(content).forEach(element => {
            element.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
          });
        });
      },
      { threshold: 0 }
    );

    if (marqueeRef.current) {
      observer.observe(marqueeRef.current);
    }

    return () => {
      if (marqueeRef.current) {
        observer.unobserve(marqueeRef.current);
      }
    };
  }, []);

  return (
    <div className="marquee-container">
      <div className="marquee" ref={marqueeRef}>
        <div className="marquee-content">
          <img src={plant1} alt="plant1" className="marquee-plant" />
          <img src={plant2} alt="plant2" className="marquee-plant" />
          <img src={plant3} alt="plant3" className="marquee-plant" />
          <img src={plant4} alt="plant4" className="marquee-plant" />
          <img src={plant5} alt="plant5" className="marquee-plant" />
        </div>
        <div className="marquee-content" aria-hidden="true">
          <img src={plant1} alt="plant1" className="marquee-plant" />
          <img src={plant2} alt="plant2" className="marquee-plant" />
          <img src={plant3} alt="plant3" className="marquee-plant" />
          <img src={plant4} alt="plant4" className="marquee-plant" />
          <img src={plant5} alt="plant5" className="marquee-plant" />
        </div>
      </div>
    </div>
  )
}

export default Marquee