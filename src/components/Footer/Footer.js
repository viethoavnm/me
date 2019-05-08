import React from 'react';

export default class Footer extends React.PureComponent {
  render = () => (
    <footer className="footer">
      <div className="main-footer text-center">
        <h4 className="footer-logo">@viethoavnm</h4>
        <div className="social-link">
          <ul>
            <li>
              <a href="#/fb">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#/tw">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#/lk">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#/pin">
                <i className="fa fa-pinterest" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#/ins">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="sub-footer text-center">
        <p>Copyright © By Tran Viet Hoa 2019 | All Rights Reserved.</p>
      </div>
    </footer>)
}