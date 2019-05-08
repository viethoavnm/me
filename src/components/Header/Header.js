import React from 'react';
import Logo from '../Logo';

const $ = window.$;

export default class Header extends React.PureComponent {
  componentDidMount() {
    /* ---------------------------------------------- /*
    * Header Fixed
    /* ---------------------------------------------- */
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 100) {
        $('header').addClass('fixed-header');
      }
      else {
        $('header').removeClass('fixed-header');
      }
    });
    /* ---------------------------------------------- /*
    * Header Scroll 
    /* ---------------------------------------------- */
    $('.header .navbar').onePageNav({
      currentClass: 'current',
      changeHash: false,
      scrollSpeed: 750
    });
  }

  render = () => (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Logo />
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="current"><a href="#home">Home</a></li>
              <li className=""><a href="#about">About</a></li>
              <li className=""><a href="#services">Services</a></li>
              <li className=""><a href="#resume">Resume</a></li>
              <li className=""><a href="#our-work">My Work</a></li>
              <li className=""><a href="#blog">Blog</a></li>
              <li className=""><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}