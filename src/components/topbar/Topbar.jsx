import React from 'react'
import "./topbar.scss"



function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="topbar-left">
          <a href="#intro">Intro</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#works">Works</a>
          <a href="#contact">contact</a>

        </div>
        <div className="topbar-right" onClick={()=>setMenuOpen(!menuOpen)}>
          <span className='first'></span>
          <span className='second'></span>
          <span className='third'></span>
        </div>
      </div>
    </div>
  )
}

export default Topbar