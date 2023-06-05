import { Container, Row, Col } from "react-bootstrap";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h3>Let's create a new reallity together.</h3>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/Taameh"><img src={navIcon1} alt="Github" /></a>
              <a href="https://www.linkedin.com/in/ArroyoTomas"><img src={navIcon2} alt="LinkedIn" /></a>
              <a href="https://www.instagram.com/taameh12/"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p>Created by Taameh.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}