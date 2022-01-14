import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import StartCard from "../components/CasinoCard";

const startCardText = {
  text1: "pick any category, complete quiz & earn casino prize",
  text2:
    "Complete short QUIZ to test your casino knowledge and you'll be rewarded with a special Bonus.",
  cta: "Start",
};

const startCardContent = [
  {
    id: 1,
    imageUrl: require("../images/startPage/ico-1.png"),
    text: "Blackjack",
    link: "",
  },
  {
    id: 2,
    imageUrl: require("../images/startPage/ico-2.png"),
    text: "Roulette",
    link: "",
  },
  {
    id: 3,
    imageUrl: require("../images/startPage/ico-3.png"),
    text: "Baccarat",
    link: "",
  },
  {
    id: 4,
    imageUrl: require("../images/startPage/ico-4.png"),
    text: "Poker",
    link: "",
  },
  {
    id: 5,
    imageUrl: require("../images/startPage/ico-5.png"),
    text: "Dragon & Tiger",
    link: "",
  },
  {
    id: 6,
    imageUrl: require("../images/startPage/ico-6.png"),
    text: "Slots",
    link: "",
  },
];

const StartPage = () => {
  const [cards, setCards] = useState(startCardContent);

  return (
    <>
      <Container>
        <Row
          className="text-center align-items-center justify-content-center g-0"
          style={{ maxWidth: "858px" }}
        >
          <Col xs={12} md={10}>
            <Row className="flex-column">
              <Col className="text-1">{startCardText.text1}</Col>
              <Col style={{ maxWidth: "600px" }}>
                <Row className="align-items-center justify-content-center">
                  {cards.map((card) => (
                    <Col key={card.id} xs={6} md={4} className="g-0">
                      <StartCard data={card} />
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col className="text-2">{startCardText.text2}</Col>
              <Col className="d-flex">
                <Button variant="primary" size="lg">
                  {startCardText.cta}
                </Button>
              </Col>
              <Col className="text-3">
                Already a member? <a href="#">Login</a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default StartPage;