import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '/src/assets/EAM Logo T-03.jpg';

const Navbar = () => {

    const [sticky, setSticky] = useState(false);
    
    useEffect(() =>{
      window.addEventListener('scroll',() =>{
        window.scrollY > 50 ? setSticky(true) : setSticky(false)
      })
    },[]);

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <a href="/homepage">
  <img src={logo} alt="Logo" className="logo" />
</a>
      <ul>
  <li><a href="/Homepage">Home</a></li>
  <li><a href="/">About Us</a></li>
  <li><a href="/contact">Contact Us</a></li>
  <li><a href="/gallery">Gallery</a></li>
  <li><a href="/sermons">Sermons</a></li>
  <li><a href="/events">Events</a></li>
  <li><button className='btn'><a href="/donate">Give</a></button></li>
</ul>
    </nav>
  )
}

export default Navbar