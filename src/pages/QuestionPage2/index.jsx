import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import QuizButton from "../../components/QuizButton";

import { Link } from "react-router-dom";
import { useMemo } from "react";

import * as state from "../../state";

const questionPage2Text = {
  textQuestionNumber: "2/5",
  text1: "Which casino game offers you the best statistical chance of winning?",
  textBordered: "",
  text2: "Select the answer to earn (10 Free Spins)",
  cta: "Next",
  correct: "You won 10 Free Spins!",
  incorrect: "That's not it, try again!",
};

const questionPage2Options = [
  {
    id: 1,
    answer: "Slots",
    correct: false,
  },
  {
    id: 2,
    answer: "Baccarat",
    correct: false,
  },
  {
    id: 3,
    answer: "Blackjack",
    correct: true,
  },
  {
    id: 4,
    answer: "Roulette",
    correct: false,
  },
];

const QuestionPage2 = () => {
  const [selected, setSelected] = useState(0);

  // find clicked button and define if its correct answer
  const selectedItem = useMemo(() => {
    return questionPage2Options.find((option) => option.id === selected) || {};
  }, [selected]);

  useEffect(() => {
    selectedItem.id && state.addData({ QuestionPage2: { selected: selectedItem.answer } });
  }, [selectedItem]);

  return (
    <>
      <Container>
        <Row className="text-center align-items-center justify-content-center g-0">
          <Col xs={12} md={12}>
            <Row className="flex-column">
              <Col className="text-question-number">
                QUESTION {questionPage2Text.textQuestionNumber}
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
              <Col xs={12} sm={12} md={8} className="text-1">{questionPage2Text.text1}</Col>
              <Col>
                <Row className="g-0 align-items-center justify-content-center pt-4">
                  {questionPage2Options.map((button) => (
                    <Col key={button.id} xs={12} md={12} className="g-0">
                      <QuizButton
                        button={button}
                        selected={selected}
                        onClick={() => setSelected(button.id)}
                      />
                    </Col>
                  ))}
                </Row>
              </Col>
              {!selected && (
                <Col xs={12} md={5} className="text-2">
                  {questionPage2Text.text2}
                </Col>
              )}
              {!!selected && selectedItem.correct && (
                <Col xs={12} md={6} className="text-correct">
                  {questionPage2Text.correct}
                </Col>
              )}
              {!!selected && !selectedItem.correct && (
                <Col xs={12} md={6} className="text-incorrect">
                  {questionPage2Text.incorrect}
                </Col>
              )}
              <Col className="justify-content-center pb-5">
                <Link to="/question3">
                  <Button variant="primary" size="lg">
                    {questionPage2Text.cta}
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
