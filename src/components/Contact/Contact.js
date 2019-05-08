import React from 'react';

export default class Contact extends React.PureComponent {
  render = () => (
    <section id="contact" className="section contact-us grey-bg">
      <div className="container">
        <div className="section-title">
          <h2>Contact<span>Me</span></h2>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="contact-info">
              <i className="fa fa-map-marker"></i>
              <h4>Adress:</h4>
              <p>No 22, 322/90 My Dinh Street <br />My Dinh 1, Nam Tu Liem, Hanoi</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="contact-info">
              <i className="fa fa-envelope"></i>
              <h4>Email:</h4>
              <p>
                <a href="mailto:viethoavnm@gmail.com">viethoavnm@gmail.com</a>
                <br />
                <a href="mailto:viethoavnm@hotmail.com">viethoavnm@hotmail.com</a>
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="contact-info">
              <i className="fa fa-phone"></i>
              <h4>Phone:</h4>
              <p>Mob: +84 978 114 250<br />Home: +84 868 353 2967</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}