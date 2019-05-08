import React from 'react';

export default class Blog extends React.PureComponent {
  render = () => (
    <section id="blog" className="section">
      <div className="container">
        <div className="section-title">
          <h2><span>My</span>Blogs</h2>
        </div>
        <div className="row">
          <div className="col-sm-4 col-sm-12">
            <div className="blog-item">
              <div className="blog-img">
                <img src="./images/blog3.jpg" title="Blog" alt="Blog" />
              </div>
              <div className="blog-contents">
                <h3>
                  <a href="blog-details.html">New Bog For Web Designer</a>
                </h3>
                <div className="blog-meta">
                  <p>Posted On 25th Oct 2017</p>
                </div>
                <div className="blog-desc">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ...</p>
                </div>
                <div className="blog-action">
                  <a href="#more" className="m-btn">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-sm-12">
            <div className="blog-item">
              <div className="blog-img">
                <img src="./images/blog2.jpg" title="Blog" alt="Blog" />
              </div>
              <div className="blog-contents">
                <h3>
                  <a href="blog-details.html">Latest Mobile Apps</a>
                </h3>
                <div className="blog-meta">
                  <p>Posted On 25th Oct 2017</p>
                </div>
                <div className="blog-desc">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ...</p>
                </div>
                <div className="blog-action">
                  <a href="#more" className="m-btn">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-sm-12">
            <div className="blog-item">
              <div className="blog-img">
                <img src="./images/blog1.jpg" title="Blog" alt="Blog" />
              </div>
              <div className="blog-contents">
                <h3>
                  <a href="blog-details.html">You Need Website For Your Business</a>
                </h3>
                <div className="blog-meta">
                  <p>Posted On 25th Oct 2017</p>
                </div>
                <div className="blog-desc">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ...</p>
                </div>
                <div className="blog-action">
                  <a href="#more" className="m-btn">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-xs-12 text-center mt-30">
            <div className="blog-action mt-30">
              <a href="blog.html" className="m-btn">View All</a>
            </div>
          </div>
        </div>
      </div>
    </section>)
}