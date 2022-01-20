import React, { useState } from "react";
import { Container, Row, Col, Button, Figure } from "react-bootstrap";
import Range from "../../components/Range";

import { Link } from "react-router-dom";

const questionPage4Text = {
  textQuestionNumber: "5/5",
  text1: "Congrats!",
  textBordered: "",
  text2: "YOU HAVE EARNED 50 FREE SPINS",
  cta: "Earn now",
};

const QuestionPage5 = () => {
  return (
    <>
      <Container>
        <Row className="text-center align-items-center justify-content-center g-0">
          <Col xs={12} md={12}>
            <Row className="flex-column">
              <Col className="text-1">{questionPage4Text.text1}</Col>
              <Col xs={12} sm={6} md={5} className="text-2">
                {questionPage4Text.text2}
              </Col>
              <Col className="justify-content-center">
                <Link to="">
                  <Button variant="primary" size="lg">
                    {questionPage4Text.cta}
                  </Button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default QuestionPage5;
