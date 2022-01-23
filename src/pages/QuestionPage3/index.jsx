import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import BonusCard from "../../components/BonusCard";
import { Link } from "react-router-dom";

import * as stateService from "../../state";

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
  const [state, setState] = useState({});

  useEffect(() => {
    stateService.addData({
      QuestionPage3: questionPage3Options
        .filter((item) => state[item.id])
        .map((item) => item.text),
    });
  }, [state]);

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
                <Row className="d-flex g-0 align-items-center justify-content-center pt-4">
                  {questionPage3Options.map((card) => (
                    <Col key={card.id} className="p-2 flex-cards">
                      <BonusCard
                        data={card}
                        selected={state[card.id]}
                        onClick={() =>
                          setState((state) => ({
                            ...state,
                            [card.id]: !state[card.id],
                          }))
                        }
                      />
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col xs={12} sm={6} md={5} className="text-2">
                {questionPage1Text.text2}
              </Col>
              <Col className="justify-content-center pb-5">
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
