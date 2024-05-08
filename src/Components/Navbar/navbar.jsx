import React from 'react'
import "./navbar.scss"
import Sidebar from '../Sidebar/sidebar'


const Navbar = () => {
  return (
    <div className='navbar'>
        <Sidebar />
        <div className="wrapper">
            <span>Lama Dev</span>
            <div className="social">
                <a href="#"> <img src="\facebook.png" alt="" /> </a>
                <a href="#"> <img src="\instagram.png" alt="" /> </a>
                <a href="#"> <img src="\youtube.png" alt="" /> </a>
                <a href="#"> <img src="\dribbble.png" alt="" /> </a>
            </div>
        </div>
    </div>
  )
}

export default Navbar