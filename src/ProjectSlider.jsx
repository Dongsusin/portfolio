import React from "react";
import Slider from "react-slick";

const ProjectSlider = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="project-slider">
      {images.map((src, i) => (
        <div key={i}>
          <img src={src} alt={`slide-${i}`} className="project-image" />
        </div>
      ))}
    </Slider>
  );
};

export default ProjectSlider;
