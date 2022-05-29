import React, {useState} from 'react'
import Contact from './components/contact/Contact'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testiomonials/Testimonials'
import Topbar from './components/topbar/Topbar'
import Works from './components/works/Works'
import "./App.scss"



function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <>
    <div className='app'>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
          <Intro />
          <Portfolio />
          <Works />
          <Testimonials />
          <Contact />
      </div>
      </div>  
      
      
    </>
   
    
  );
}

export default App;
