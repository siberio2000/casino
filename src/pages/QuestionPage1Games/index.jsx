import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import GameCard from "../../components/GameCard";
import { Link } from "react-router-dom";

import * as stateService from "../../state";

const questionPage1Text = {
  textQuestionNumber: "1/5",
  text1: "pick up your favorite providers & games",
  textBordered: "pick up favorite games",
  text2: "Please select at least 3 casino games & earn (5 free spins)",
  cta: "Next",
};

const questionPage1CardContent = [
  {
    id: 1,
    imageUrl: require("../../images/games/ico-1.png"),
     providerName: "Card 1",
  },
  {
    id: 2,
    imageUrl: require("../../images/games/ico-2.png"),
     providerName: "Card 2",
  },
  {
    id: 3,
    imageUrl: require("../../images/games/ico-3.png"),
     providerName: "Card 3",
  },
  {
    id: 4,
    imageUrl: require("../../images/games/ico-1.png"),
     providerName: "Card 4",
  },
  {
    id: 5,
    imageUrl: require("../../images/games/ico-2.png"),
     providerName: "Card 5",
  },
  {
    id: 6,
    imageUrl: require("../../images/games/ico-3.png"),
     providerName: "Card 6",
  },
  {
    id: 7,
    imageUrl: require("../../images/games/ico-4.png"),
     providerName: "Card 7",
  },
  {
    id: 8,
    imageUrl: require("../../images/games/ico-5.png"),
     providerName: "Card 8",
  },
  {
    id: 9,
    imageUrl: require("../../images/games/ico-6.png"),
     providerName: "Card 9",
  },
  {
    id: 10,
    imageUrl: require("../../images/games/ico-4.png"),
     providerName: "Card 10",
  },
  {
    id: 11,
    imageUrl: require("../../images/games/ico-5.png"),
     providerName: "Card 11",
  },
  {
    id: 12,
    imageUrl: require("../../images/games/ico-6.png"),
     providerName: "Card 12",
  },
  {
    id: 13,
    imageUrl: require("../../images/games/ico-7.png"),
     providerName: "Card 13",
  },
  {
    id: 14,
    imageUrl: require("../../images/games/ico-8.png"),
     providerName: "Card 14",
  },
  {
    id: 15,
    imageUrl: require("../../images/games/ico-9.png"),
     providerName: "Card 15",
  },
  {
    id: 16,
    imageUrl: require("../../images/games/ico-7.png"),
     providerName: "Card 16",
  },
  {
    id: 17,
    imageUrl: require("../../images/games/ico-8.png"),
     providerName: "Card 17",
  },
  {
    id: 18,
    imageUrl: require("../../images/games/ico-9.png"),
     providerName: "Card 18",
  },
];

const QuestionPage1Games = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    stateService.addData({
      questionPage1Games: questionPage1CardContent
        .filter((item) => state[item.id])
        .map((item) => item.providerName),
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
                <Row></Row>
                <Row></Row>
                <Row></Row>
                <Row></Row>
              </Col>
              <Col className="text-1">{questionPage1Text.text1}</Col>
              <Col
                xs={12}
                sm={6}
                md={5}
                className="text-bordered d-flex flex-row align-items-center justify-content-around"
              >
                {questionPage1Text.textBordered}
              </Col>
              <Col style={{ maxWidth: "850px", width: "auto" }}>
                <Row className="g-0 align-items-center justify-content-center pt-4">
                  {questionPage1CardContent.map((card) => (
                    <Col key={card.id} xs={4} md={2} className="g-0">
                      <GameCard data={card} 
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
              <Col xs={12} sm={6} md={6} className="text-2">
                {questionPage1Text.text2}
              </Col>
              <Col className="justify-content-center pb-5">
                <Link to="/question2">
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

export default QuestionPage1Games;
