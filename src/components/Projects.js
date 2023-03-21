import React from 'react'
import projImg1 from "../img/project-img1.png";
import projImg2 from "../img/project-img2.png";
import projImg3 from "../img/project-img3.png";
import colorSharp2 from "../img/color-sharp2.png";
import { Container, Row,Col, TabContainer, TabContent, TabPane,Nav } from 'react-bootstrap';
import {ProjectCard} from './ProjectCard';
const Projects = () => {
 const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. </p>
            <TabContainer id='projects-tabs' defaultActiveKey='first'>
            <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
      <Nav.Item>
        <Nav.Link eventKey="first">Tab One</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="second">Tab Two</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="third">
          Tad Third
        </Nav.Link>
      </Nav.Item>
    </Nav>
    <TabContent>
      <TabPane eventKey='first'>
         <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
      </TabPane>
      <TabPane eventKey='second'>
          fniownfe
      </TabPane>
            <TabPane eventKey='third'>
              vn jfkefvei
      </TabPane>
    </TabContent>
    </TabContainer>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2} alt='img'/>
    </section>
  )
}

export default Projects