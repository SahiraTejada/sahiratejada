import React from 'react'
import projImg1 from "../img/project-img1.png";
import projImg2 from "../img/project-img2.png";
import projImg3 from "../img/project-img3.png";
import colorSharp2 from "../img/color-sharp2.png";
import { Container, Row,Col, TabContainer, TabContent, TabPane,Nav } from 'react-bootstrap';
import {ProjectCard} from './ProjectCard';
import { projectData } from './data';
const Projects = () => {

  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col>

            <h2>Projects</h2>
            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. </p>
          
         <Row>
                        {
                          projectData.map((project) => {
                            return (
                              
                              <Col size={12} sm={6} md={4} >
      <div className="proj-imgbx">
        <img src={project.img} />
        <div className="proj-txtx">
          <h4>{project.title}</h4>
         
          <span>{project.description}</span>
        </div>
      </div>
    </Col>
                            )
                          })
                        }
                      </Row>
 

          </Col>
        </Row>
      </Container>

    </section>
  )
}

export default Projects