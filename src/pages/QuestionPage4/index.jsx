import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import QuizButtonLong from "../../components/QuizButtonLong";

import { Link } from "react-router-dom";
import { useMemo } from "react";

import * as state from "../../state";

const questionPage4Text = {
  textQuestionNumber: "4/5",
  text1:
    "In Blackjack basic strategy, what is the exception for double down on 11?",
  textBordered: "",
  text2: "Select the answer to earn (10 Free Spins)",
  cta: "Next",
  correct: "You won 10 Free Spins!",
  incorrect: "That's not it, try again!",
};

const questionPage4Options = [
  {
    id: 1,
    answer: "A or 10 for the dealer",
    correct: true,
  },
  {
    id: 2,
    answer: " if u have couple of 8's",
    correct: false,
  },
  {
    id: 3,
    answer: "don't have any exceptions",
    correct: false,
  },
];

const QuestionPage4 = () => {
  const [selected, setSelected] = useState(0);

  const selectedItem = useMemo(() => {
    return questionPage4Options.find((option) => option.id === selected) || {};
  }, [selected]);

  useEffect(() => {
    selectedItem.id &&
      state.addData({ QuestionPage4: { selected: selectedItem.answer } });
  }, [selectedItem]);

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
              <Col xs={12} sm={12} md={10} className="text-1">{questionPage4Text.text1}</Col>
              <Col>
                <Row className="g-0 align-items-center justify-content-center pt-4" >
                  {questionPage4Options.map((button) => (
                    <Col key={button.id} xs={12} md={12} className="g-0">
                      <QuizButtonLong 
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
                  {questionPage4Text.text2}
                </Col>
              )}
              {!!selected && selectedItem.correct && (
                <Col xs={12} md={6} className="text-correct">
                  {questionPage4Text.correct}
                </Col>
              )}
              {!!selected && !selectedItem.correct && (
                <Col xs={12} md={6} className="text-incorrect">
                  {questionPage4Text.incorrect}
                </Col>
              )}
              <Col className="justify-content-center pb-5">
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
