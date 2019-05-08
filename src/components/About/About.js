import React from 'react';
export default class About extends React.PureComponent {

  render = () => (
    <section id="about" className="section" >
      {/*eslint-enable */}
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-5">
            <div className="personal-pic">
              <img src="./images/me.jpg" title="" alt="" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-7">
            <div className="personal-info">
              <div className="section-title left">
                <h2>
                  About <span>Me</span>
                </h2>
              </div>
              <h3>Hello! i'm Tran Viet Hoa</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
              <div className="social-link">
                <ul>
                  <li>
                    <a href="#fb">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#tw">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#in">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#ytb">
                      <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#pin">
                      <i className="fa fa-pinterest" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="about-actions">
                <button className="m-btn lets-talk">Contact me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>)
}
