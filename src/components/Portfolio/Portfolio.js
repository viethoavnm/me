import React from 'react';

export default class Portfolio extends React.PureComponent {
  render = () => (
    <section id="our-work" className="section">
      <div className="container">
        <div className="section-title">
          <h2><span>My</span>Portfolio</h2>
        </div>
        <div className="portfolio-box">
          <div className="filter">
            <button type="button" className="control" data-filter="all">Web Apps</button>
          </div>
          <div className="portfolio-filter">
            <div className="row">
              <div className="col-sm-4 col-xs-6 mix illustration">
                <div className="portfolio-col">
                  <img src="./images/illustration.jpg" title="" alt="" />
                  <div className="hover">
                    <h4>Illustration Work</h4>
                    <label>illustration</label>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-xs-6 mix photoshop">
                <div className="portfolio-col">
                  <img src="./images/photoshop.jpg" title="" alt="" />
                  <div className="hover">
                    <h4>Photoshop Work</h4>
                    <label>photoshop</label>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-xs-6 mix illustration">
                <div className="portfolio-col">
                  <img src="./images/illustration1.jpg" title="" alt="" />
                  <div className="hover">
                    <h4>Illustration Work</h4>
                    <label>illustration</label>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-xs-6 mix photoshop">
                <div className="portfolio-col">
                  <img src="./images/photoshop1.jpg" title="" alt="" />
                  <div className="hover">
                    <h4>Photoshop Work</h4>
                    <label>photoshop</label>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-xs-6 mix website">
                <div className="portfolio-col">
                  <img src="./images/website.jpg" title="" alt="" />
                  <div className="hover">
                    <h4>Website Work</h4>
                    <label>Website</label>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-xs-6 mix apps">
                <div className="portfolio-col">
                  <img src="./images/apps.jpg" title="" alt="" />
                  <div className="hover">
                    <h4>Apps Work</h4>
                    <label>App</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>)
}