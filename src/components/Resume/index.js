import React from 'react';

export default class Resume extends React.PureComponent {
  render = () => (
    <section id="resume" className="section">
      <div className="container">
        <div className="section-title">
          <h2><span>My</span>Resume</h2>
        </div>
        <div className="row">
          <div className="col-sm-6 col-xs-12">
            <div className="resume-box">
              <h4>WORK</h4>
              <div className="resume-row">
                <h5>Apple</h5>
                <label>OCT 2015 - JUNE 2016</label>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt sit amet erat malesuada interdum. Aenean sodales dui quis leo fermentum scelerisque.</p>
              </div>
              <div className="resume-row">
                <h5>Google</h5>
                <label>OCT 2016 - JUNE 2017</label>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt sit amet erat malesuada interdum. Aenean sodales dui quis leo fermentum scelerisque.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xs-12">
            <div className="resume-box">
              <h4>EDUCATION</h4>
              <div className="resume-row">
                <h5>University</h5>
                <label>OCT 2010 - JUNE 2013</label>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt sit amet erat malesuada interdum. Aenean sodales dui quis leo fermentum scelerisque.</p>
              </div>
              <div className="resume-row">
                <h5>Design and Art</h5>
                <label>OCT 2013 - JUNE 2015</label>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt sit amet erat malesuada interdum. Aenean sodales dui quis leo fermentum scelerisque.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}