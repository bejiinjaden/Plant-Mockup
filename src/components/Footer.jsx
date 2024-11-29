import React from 'react'
import '../css/Footer.css'
// Import Font Awesome icons from react-icons
//import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faSquareFacebook } from "@fortawesome/free-solid-svg-icons";
import x from '../assets/footer/square-x-twitter-brands-solid.svg'
import facebook from '../assets/footer/square-facebook-brands-solid.svg'
import instagram from '../assets/footer/square-instagram-brands-solid (1).svg'
import star from '../assets/footer/star.png'
const Footer = () => {
  return (
    <footer>
      <div className='footerDiv'>
        <p>Elevate your life with <span style={{ color: '#A5CE34' }}>greenery</span>.</p>
        <div className='socials'>
          <h2>Socials:</h2>
          {/*<FontAwesomeIcon icon={faSquareFacebook} / >*/}
          <img src={x} className='x socialImg' alt='x img' />
          <img src={facebook} className='facebook socialImg' alt='facebook img' />
          <img src={instagram} className='instagram socialImg' alt='instagram img' />
        </div>
        
        <div className='hrDiv'>
          <hr style={{ width: '80vw', borderTop: '2px solid beige' }} />
          <img src={star} className='star1' alt='star img' />
        <img src={star} className='star2' alt='star img' />
        </div>
        
        <p className='copyright'>Copyright &copy; 2024 Leafylane</p>
        
      </div>
    </footer> 
  )
}

export default Footer