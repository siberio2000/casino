import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import QuizButton from "../../components/QuizButton";

import { Link } from "react-router-dom";

const questionPage1Text = {
  textQuestionNumber: "2/5",
  text1: "Which casino game offers you the best statistical chance of winning?",
  textBordered: "",
  text2: "Select the answer to earn (10 Free Spins)",
  cta: "Next",
};

const questionPage2Options = [
  {
    id: 1,
    answer: "Slots",
  },
  {
    id: 2,
    answer: "Baccarat",
  },
  {
    id: 3,
    answer: "Blackjack",
  },
  {
    id: 4,
    answer: "Roulette",
  },
];

const QuestionPage2 = () => {
  const [buttons] = useState(questionPage2Options);

  return (
    <>
      <Container>
        <Row className="text-center align-items-center justify-content-center g-0">
          <Col xs={12} md={12}>
            <Row className="flex-column">
              <Col className="text-question-number">
                QUESTION {questionPage1Text.textQuestionNumber}
              </Col>
              <Col
                xs={12}
                sm={6}
                md={5}
                className="page-indicator d-flex flex-row align-items-center justify-content-around"
              >
                <Row className="page-visited"></Row>
                <Row className="page-visited"></Row>
                <Row></Row>
                <Row></Row>
                <Row></Row>
              </Col>
              <Col className="text-1">{questionPage1Text.text1}</Col>

              <Col>
                <Row className="g-0 align-items-center justify-content-center pt-4">
                  {buttons.map((button) => (
                    <Col key={button.id} xs={12} md={12} className="g-0">
                      <QuizButton button={button} />
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col xs={12} sm={6} md={5} className="text-2">
                {questionPage1Text.text2}
              </Col>
              <Col className="justify-content-center">
                <Link to="/question3">
                  <Button variant="primary" size="lg">
                    {questionPage1Text.cta}
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

export default QuestionPage2;
