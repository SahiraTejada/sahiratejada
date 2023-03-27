import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {dataDigitalBestSeller} from './data';
const Sliders = () => {
  const settings = {
      dots: true,
      infinite: true,
      centerPadding: "60px",
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
   
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <div>
      <Slider {...settings} className='skill-slider'>
      {dataDigitalBestSeller.map((item) => (
        <div className='item'>
            <img src={item.img} alt={item.title}/>
            <h5>{item.title}</h5>
          </div>
   ))}
</Slider>
    </div>
  )
}

export default Sliders