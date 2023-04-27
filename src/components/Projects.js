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
            <p>As a passionate web developer, I have had the pleasure of crafting dynamic and user-centric websites.</p>
          
         <Row>
                        {
                          projectData.map((project) => {
                            return (
                              
                              <Col size={12} sm={6} md={4} >
      <div className="proj-imgbx">
        <img src={project.img} />
        <div className="proj-txtx">       
          <span>{project.description}</span>
          <a class="btn-projects" href={project.Url} target="_blank">
          <span style={{marginTop:'16px'}}>Visit Website</span><span class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
</svg>
          </span></a>
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