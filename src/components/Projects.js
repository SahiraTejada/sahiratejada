import React from 'react'
import { Container, Row,Col} from 'react-bootstrap';
import { projectData } from '../data';
const Projects = () => {
  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>As a passionate developer, I have had the pleasure of design and code beautifully simple projects.
            </p>
            <Row>
              {projectData.map((project) => {
                return (
                  <Col size={12} sm={6} md={4} className='proj-col'>
                    <div className="proj-imgbx">
                      <img src={project.img} alt={project.title} />
                      <div className="proj-txtx">       
                        <span>{project.description}</span>
                        <a class="btn-projects" href={project.Url} target="_blank" rel="noreferrer">
                          <span style={{marginTop:'16px'}}>Explore More</span>
                          <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </Col>
                )})
              }
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Projects