import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import GameCard from "../../components/GameCard";

import { Link } from "react-router-dom";

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
    link: "",
  },
  {
    id: 2,
    imageUrl: require("../../images/games/ico-2.png"),
    link: "",
  },
  {
    id: 3,
    imageUrl: require("../../images/games/ico-3.png"),
    link: "",
  },
  {
    id: 4,
    imageUrl: require("../../images/games/ico-1.png"),
    link: "",
  },
  {
    id: 5,
    imageUrl: require("../../images/games/ico-2.png"),
    link: "",
  },
  {
    id: 6,
    imageUrl: require("../../images/games/ico-3.png"),
    link: "",
  },
  {
    id: 7,
    imageUrl: require("../../images/games/ico-4.png"),
    link: "",
  },
  {
    id: 8,
    imageUrl: require("../../images/games/ico-5.png"),
    link: "",
  },
  {
    id: 9,
    imageUrl: require("../../images/games/ico-6.png"),
    link: "",
  },
  {
    id: 10,
    imageUrl: require("../../images/games/ico-4.png"),
    link: "",
  },
  {
    id: 11,
    imageUrl: require("../../images/games/ico-5.png"),
    link: "",
  },
  {
    id: 12,
    imageUrl: require("../../images/games/ico-6.png"),
    link: "",
  },
  {
    id: 13,
    imageUrl: require("../../images/games/ico-7.png"),
    link: "",
  },
  {
    id: 14,
    imageUrl: require("../../images/games/ico-8.png"),
    link: "",
  },
  {
    id: 15,
    imageUrl: require("../../images/games/ico-9.png"),
    link: "",
  },
  {
    id: 16,
    imageUrl: require("../../images/games/ico-7.png"),
    link: "",
  },
  {
    id: 17,
    imageUrl: require("../../images/games/ico-8.png"),
    link: "",
  },
  {
    id: 18,
    imageUrl: require("../../images/games/ico-9.png"),
    link: "",
  },
];

const QuestionPage1Games = () => {
  const [cards] = useState(questionPage1CardContent);

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
                  {cards.map((card) => (
                    <Col key={card.id} xs={4} md={2} className="g-0">
                      <GameCard data={card} />
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col xs={12} sm={6} md={5} className="text-2">
                {questionPage1Text.text2}
              </Col>
              <Col className="justify-content-center">
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
