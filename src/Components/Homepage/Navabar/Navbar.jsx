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
      <img src={logo} alt=''className='logo'/>
      <ul>
        <li><a href="/Homepage
        "> Home</a>
         
        </li>
        <li>
          About Us
        </li>
        <li>Contact Us
        </li>
        <li>
          Galllery
        </li>
        <li>
        Sermons
        </li>
        <li>
          Events
        </li>
        <li><button className='btn'>Give</button>       
        </li>
      </ul>
    </nav>
  )
}

export default Navbar