import React, { useEffect } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {dataDigitalBestSeller} from './data';
const Skills = () => {
    const settings = {
      dots: true,
      infinite: false,
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
            dots: true
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
    <section className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                <div
                className='skill-bx'>
                    <div><h2>
                        Skills
                    </h2>
                    
                    </div>

                    <p>Through my passion for crafting engaging and user-friendly websites, I have acquired a diverse skill set that enables me to deliver high-quality solutions.
                        </p>
                          
                        <div>
      <Slider {...settings} className='skill-slider'>
      {dataDigitalBestSeller.map((item) => (
        <div>
        <div className='item'>
            <img src={item.img} alt={item.title}/>
          </div> 
          <h5>{item.title}</h5>
          </div>
   ))}
</Slider>
    </div>
                </div>
                </Col>
            </Row>
        </Container>

    </section>
  )
}

export default Skills