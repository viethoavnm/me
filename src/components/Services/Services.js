import React from 'react';

export default class Services extends React.PureComponent {
  render = () => (
    <section id="services" className="section grey-bg">
      <div className="container">
        <div className="section-title">
          <h2><span>My</span>Services</h2>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="service-box">
              <span className="sb-icon">
                <i className="fa fa-heart fa-2x" aria-hidden="true"></i>
              </span>
              <h4>WEB DESIGN</h4>
              <div className="sb-desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt sit amet erat malesuada interdum. Aenean sodales dui quis leo fermentum scelerisque.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="service-box">
              <span className="sb-icon">
                <i className="fa fa-mobile fa-2x" aria-hidden="true"></i>
              </span>
              <h4>MOBILE APPS</h4>
              <div className="sb-desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt sit amet erat malesuada interdum. Aenean sodales dui quis leo fermentum scelerisque.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="service-box">
              <span className="sb-icon">
                <i className="fa fa-code fa-2x" aria-hidden="true"></i>
              </span>
              <h4>WEB DEVELOPMENT</h4>
              <div className="sb-desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt sit amet erat malesuada interdum. Aenean sodales dui quis leo fermentum scelerisque.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}