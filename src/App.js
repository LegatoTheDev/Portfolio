import React from 'react';
import Hero from './components/hero/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About.jsx';

const App = () => {
  return (
    <div>
       <Navbar/>
    <section id='Home'>
      <Hero/>
      {/* <h1>Section 1</h1> */}
    </section>
    <section id='Portfolio'>
      <Portfolio/>
    </section>
    <section id='About Me'>
      <About/>
    </section>
    </div>
   
    
  )
}

export default App;
