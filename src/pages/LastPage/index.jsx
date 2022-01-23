import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import Confetti from "react-confetti";

import { Link } from "react-router-dom";

const finalPageText = {
  textQuestionNumber: "5/5",
  text1: "YOU HAVE EARNED",
  textBordered: "",
  text2: "50 ",
  cta: "Earn now",
};

const LastPage = () => {
  return (
    <>
      <Container>
        <Row className="text-center align-items-center justify-content-center g-0">
          <Col xs={12} md={12}>
            <Row className="flex-column">
              <Col className="congrats-text pb-3">
                CONGRATS!
              </Col>
              <Col className="text-1">{finalPageText.text1}</Col>

              <Col style={finalMessageStyle} className="pb-5">
                {finalPageText.text2} FREE SPINS
              </Col>
              <Col className="justify-content-center">
                <Link to="">
                  <Button variant="primary" size="lg">
                    {finalPageText.cta}
                  </Button>
                </Link>
              </Col>
            </Row>
            <Confetti style={confettiStyle} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

const confettiStyle = {
  maxWidth: "1670px",
  width: "100%",
  height: "100vh",
};

const finalMessageStyle = {
  fontSize: "36px",
  lineHeight: "44px",
  color: "#FFD900",
};

export default LastPage;
