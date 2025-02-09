import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <FaChevronLeft />
    </div>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <FaChevronRight />
    </div>
  );
}

function PregnancyCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dotsClass: "custom-dots",
  };

  return (
    <div className="pregnancy-carousel">
      <div className="carousel-container">
        <div className="carousel-content">
          <div className="carousel-text">
            <h2>Track Your Pregnancy Week By Week</h2>
            <p>See how your baby developing each week when you pregnancy</p>
            <button className="explore-btn">Explore Now</button>
          </div>
          <div className="carousel-images">
            <div className="polaroid">
              <img
                src="https://images.agoramedia.com/wte3.0/gcms/wbw-your-baby-2021-alt-w03-1200x1200.jpg"
                alt="3-4 W"
              />
              <div className="week-label">3-4 W</div>
            </div>
            <div className="polaroid">
              <img
                src="https://www.gerber.com/media/wysiwyg/home/Week_10.png"
                alt="10 Weeks"
              />
              <div className="week-label">10 Weeks</div>
            </div>
            <div className="polaroid">
              <img
                src="https://assets.babycenter.com/ims/2015/01/pregnancy-week-20-fetal-movement_4x3.jpg"
                alt="20 Weeks"
              />
              <div className="week-label">20 Weeks</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PregnancyCarousel;
