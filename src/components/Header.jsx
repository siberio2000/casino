import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";

import Logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Container>
        <Row className="d-flex flex-row justify-content-around">
          <Col className="d-flex align-self-center justify-content-center">
            <Link to="/">
              <Figure>
                <Figure.Image width={242} height={83} alt="logo" src={Logo} />
              </Figure>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
