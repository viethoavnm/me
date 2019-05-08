import React from 'react';

const $ = window.$;

export default class HomeSession extends React.PureComponent {
  componentDidMount() {
    /* ---------------------------------------------- /*
     * Home Banner Scroll 
    /* ---------------------------------------------- */
    $(".lets-talk").click(function () {
      $('html,body').animate({
        scrollTop: $("#contact").offset().top
      },
        'slow');
    });
    /* ---------------------------------------------- /*
     * home Banner
    /* ---------------------------------------------- */
    $(".home-banner").height($(window).height());
    $(window).resize(function () {
      $(".home-banner").height($(window).height());
    });
    $('.home-banner').parallax({ imageSrc: './images/figma.jpg' });
  }
  render = () => (
    <section id="home" className="home-banner" data-parallax="scroll">
      <div className="container">
        <div className="welcome-text">
          <h3>Hello! i'm</h3>
          <h2>Tran Viet Hoa</h2>
          <p>FRONT-END WEB DEVELOPMENT</p>
          <div className="wt-actions">
            <button className="m-btn lets-talk">Let's talk New</button>
          </div>
        </div>
      </div>
    </section>
  )
}