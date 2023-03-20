import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../img/arrow1.svg";
import arrow2 from "../img/arrow2.svg";
import colorSharp from "../img/color-sharp.png";
import meter1 from "../img/meter1.svg";
import meter2 from "../img/meter2.svg";
import meter3 from "../img/meter3.svg";
const Skills = () => {
    const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  return (
    <section className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                <div
                className='skill-bx'>
                    <h2>
                        Skills
                    </h2>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
                        <br></br>Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"</p>
                         <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className='item'>
                                <img src={meter1} alt='Image'/>
                                <h5>Web Development</h5>
                            </div>
                            <div className='item'>
                                <img src={meter2} alt='Image'/>
                                <h5>Brand Identity</h5>
                            </div>
                             <div className='item'>
                                <img src={meter3} alt='Image'/>
                                <h5>Logo design</h5>
                            </div>
                            <div className='item'>
                                <img src={meter1} alt='Image'/>
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
    <img src={colorSharp} className='background-image-left'/>
    </section>
  )
}

export default Skills