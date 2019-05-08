import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Resume from './components/Resume';
import Footer from './components/Footer';
import HireMe from './components/HireMe';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import Blog from './components/Blog';
import Contact from './components/Contact';
import './style.scss';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <About />
      <Services />
      <Resume />
      <HireMe />
      <Portfolio />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
