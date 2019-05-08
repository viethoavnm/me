import React from 'react';

export default class Testimonial extends React.PureComponent {
  render = () => (
    <section className="section testimonial-area grey-bg">
      <div className="container">
        <div className="owl-carousel testimonial-slider">
          <div className="item">
            <div className="single-testimonial text-center">
              <div className="avtar">
                <img src="./images/project2.jpg" alt="" />
              </div>
              <p>The new common language will be more simple and regular than. It will be more Occidental in fact. The new common language will be more simple and regular than. It will be more Occidental in fact.</p>
              <div className="clearfix"></div>
              <h4>- Ms. Mandy Doe</h4>
              <p className="desg">Founder of Mandy</p>
            </div>
          </div>
          <div className="item">
            <div className="single-testimonial text-center">
              <div className="avtar">
                <img src="./images/photoshop1.jpg" alt="" />
              </div>
              <p>The new common language will be more simple and regular than. It will be more Occidental in fact. The new common language will be more simple and regular than. It will be more Occidental in fact.</p>
              <div className="clearfix"></div>
              <h4>- Ms. Mandy Doe</h4>
              <p className="desg">Founder of Mandy</p>
            </div>
          </div>
          <div className="item">
            <div className="single-testimonial text-center">
              <div className="avtar">
                <img src="./images/photoshop.jpg" alt="" />
              </div>
              <p>The new common language will be more simple and regular than. It will be more Occidental in fact. The new common language will be more simple and regular than. It will be more Occidental in fact.</p>
              <div className="clearfix"></div>
              <h4>- Ms. Mandy Doe</h4>
              <p className="desg">Founder of Mandy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}