import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";

import Logo from "../images/logo.png";

const Header = () => {
  return (
    <>
      <Container>
        <Row className="d-flex flex-row justify-content-around">
          <Col
            className="d-flex align-self-center justify-content-center"
  
          >
            <Figure>
              <Figure.Image width={242} height={83} alt="logo" src={Logo} />
            </Figure>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
