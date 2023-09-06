
import React from 'react'
import Slider from 'react-slick';

const ImageCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="image-carousel">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;