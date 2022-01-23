import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Figure } from "react-bootstrap";
import Range from "../../components/Range";
import { Link } from "react-router-dom";

import Paylogos from "../../images/pay-logos.png";

const questionPage5Text = {
  textQuestionNumber: "5/5",
  text1: "Please, set up your preferred betting range",
  textBordered: "",
  text2: "Set up deposit limit per month to earn (10 Free Spins)",
  cta: "Set",
};

const QuestionPage5 = () => {
  return (
    <>
      <Container>
        <Row className="text-center align-items-center justify-content-center g-0">
          <Col xs={12} md={12}>
            <Row className="flex-column">
              <Col className="text-question-number">
                QUESTION {questionPage5Text.textQuestionNumber}
              </Col>
              <Col
                xs={12}
                sm={6}
                md={5}
                className="page-indicator d-flex flex-row align-items-center justify-content-around"
              >
                <Row className="page-visited"></Row>
                <Row className="page-visited"></Row>
                <Row className="page-visited"></Row>
                <Row className="page-visited"></Row>
                <Row className="page-visited"></Row>
              </Col>
              <Col xs={12} sm={12} md={10} className="text-1">
                {questionPage5Text.text1}
              </Col>
              <Col
                className="pt-3"
                style={{
                  fontSize: "18px",
                  color: "#ffffff",
                  textTransform: "uppercase",
                }}
              >
                Deposit Limit Per month
              </Col>
              <Col>
                <Row className="g-0 align-items-center justify-content-center pt-4">
                  <Range />
                </Row>
              </Col>
              <Col>
                <Figure className="p-3">
                  <Figure.Image
                    width={510}
                    height={36}
                    alt="Paylogos"
                    src={Paylogos}
                  />
                </Figure>
              </Col>
              <Col xs={12} sm={6} md={5} className="text-2">
                {questionPage5Text.text2}
              </Col>

              <Col className="justify-content-center pb-5">
                <Link to="/congrats">
                  <Button variant="primary" size="lg">
                    {questionPage5Text.cta}
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
