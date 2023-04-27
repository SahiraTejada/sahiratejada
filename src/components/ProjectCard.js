import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,tech }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <p>{tech}</p>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}