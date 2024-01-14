import React, { useEffect, useState } from 'react'
import './Nav.css'
import { FaHome } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
const Nav = () => {
  const [active,setactive]=useState('#')
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      // Get the vertical scroll position
      const scrollPosition = window.scrollY;

      // Check the position of each section and update the active link accordingly
      // You may need to adjust the offset values based on your layout
      if (scrollPosition < 500) {
        setactive('#');
      } else if (scrollPosition < 1000) {
        setactive('#about');
      } else if (scrollPosition < 2000) {
        setactive('#experience');
      } else if (scrollPosition < 3500 ) {
        setactive('#services');
      } else if (scrollPosition < 4000 ) {
        setactive('#contact');
      }
      else{
        setactive('#')
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  // Function to handle link clicks
  const handleLinkClick = (sectionId) => {
    setactive(sectionId);

    // Scroll to the corresponding section when a link is clicked
    const sectionElement = sectionId === '#' ? document.body : document.querySelector(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav>
        <a href="#" onClick={()=>handleLinkClick('#')} className={active==='#'?'active':''}><FaHome /></a>
        <a href="#about" onClick={()=>handleLinkClick('#about')} className={active==='#about'?'active':''}><FaUserAlt /></a>
        <a href="#experience" onClick={()=>handleLinkClick('#experience')} className={active==='#experience'?'active':''}><FaBook /></a>
        <a href="#services" onClick={()=>handleLinkClick('#services')} className={active==='#services'?'active':''}><RiServiceFill /></a>
        <a href="#contact" onClick={()=>handleLinkClick('#contact')} className={active==='#contact'?'active':''}><BiSolidMessageRoundedDetail />
</a>
    </nav>
  )
}

export default Nav
