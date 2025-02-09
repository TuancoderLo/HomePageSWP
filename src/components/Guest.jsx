import React from "react";
import Banner from "./Banner";
import PregnancyCarousel from "./PregnancyCarousel";

function Guest() {
  return (
    <>
      <Banner />
      <PregnancyCarousel />
      <div className="guest-container">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content"></div>
        </div>

        {/* Popular Blogs Section */}
        <section className="popular-blogs">
          <h2>Popular Blogs</h2>
          <div className="blogs-grid">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="blog-card">
                <div className="blog-image">
                  <img
                    src={`https://www.littleones.co/cdn/shop/articles/blog_posts_2FuIznlYB0JJYyujRavAyf_2F93-The_20juggling_20act.png?v=1698508249-${item}.jpg`}
                    alt={`Blog ${item}`}
                  />
                </div>
                <div className="blog-content">
                  <h3>2 Genius TikTok Organizing Products, Approved by Moms</h3>
                  <div className="blog-meta">
                    <span>Author: Miles</span>
                    <span>4 min read</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <div className="feature-card">
            <h3>Comprehensive Growth Tracking for Your Child</h3>
            <p>
              Measure and analyze growth metrics based on international
              standards.
            </p>
          </div>
          <div className="feature-card">
            <h3>Expert Advice from Experienced Doctors</h3>
            <p>Quickly connect with notable medical professionals.</p>
          </div>
          <div className="feature-card">
            <h3>Personalized Alerts and Recommendations</h3>
            <p>
              Detect anomalies and receive tailored advice for your child's
              needs.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Guest;
