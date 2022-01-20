import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import QuizButton from "../../components/QuizButton";

import { Link } from "react-router-dom";

const questionPage4Text = {
  textQuestionNumber: "4/5",
  text1: "In Blackjack basic strategy, what is the exception for double down on 11?",
  textBordered: "",
  text2: "Select the answer to earn (10 Free Spins)",
  cta: "Next",
};

const questionPage4Options = [
  {
    id: 1,
    answer: "A or 10 for the dealer",
  },
  {
    id: 2,
    answer: " if u have couple of 8's",
  },
  {
    id: 3,
    answer: "don't have any exceptions",
  },
];

const QuestionPage4 = () => {
  const [buttons] = useState(questionPage4Options);

  return (
    <>
      <Container>
        <Row className="text-center align-items-center justify-content-center g-0">
          <Col xs={12} md={12}>
            <Row className="flex-column">
              <Col className="text-question-number">
                QUESTION {questionPage4Text.textQuestionNumber}
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
                <Row></Row>
              </Col>
              <Col className="text-1">{questionPage4Text.text1}</Col>

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
                {questionPage4Text.text2}
              </Col>
              <Col className="justify-content-center">
                <Link to="/question5">
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

export default QuestionPage4;
