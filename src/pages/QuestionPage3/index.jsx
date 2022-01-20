import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import BonusCard from "../../components/BonusCard";

import { Link } from "react-router-dom";

const questionPage1Text = {
  textQuestionNumber: "3/5",
  text1: "What kind of bonus do u prefer?",
  textBordered: "",
  text2: "Please select at least 3 casino bonuses & earn (10 free spins)",
  cta: "Next",
};

const questionPage3Options = [
  {
    id: 1,
    text: "FREE SPINS",
  },
  {
    id: 2,
    text: "CASHBACK",
  },
  {
    id: 3,
    text: "€100 CASINO BONUS",
  },
  {
    id: 4,
    text: "CRAZY BONUS 400% CASINO BONUS",
  },
  {
    id: 5,
    text: "TOURNAMENT €2000 CASH EVRY WEEK",
  },
  {
    id: 6,
    text: "DEPOSIT €20 & GET 100 FREE SPINS",
  },
  {
    id: 7,
    text: "HIGHROLLER BONUS 100% BONUS UP TO €500",
  },
  {
    id: 8,
    text: "200% CASINO BONUS UP TO €100",
  },
  {
    id: 9,
    text: "400% CASINO BONUS",
  },
];

const QuestionPage3 = () => {
  const [cards] = useState(questionPage3Options);

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
                <Row className="page-visited"></Row>
                <Row></Row>
                <Row></Row>
              </Col>
              <Col className="text-1">{questionPage1Text.text1}</Col>

              <Col>
                <Row className="g-0 align-items-center justify-content-center pt-4">
                  {cards.map((card) => (
                    <Col key={card.id} xs={12} md={4} className="p-2">
                      <BonusCard data={card} />
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col xs={12} sm={6} md={5} className="text-2">
                {questionPage1Text.text2}
              </Col>
              <Col className="justify-content-center">
                <Link to="/question4">
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

export default QuestionPage3;
