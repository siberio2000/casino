import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CasinoCard from "../../components/CasinoCard";
import { Link } from "react-router-dom";

import * as stateService from "../../state";

const startCardText = {
  text1: "pick any category, complete quiz & earn casino prize",
  text2:
    "Complete short QUIZ to test your casino knowledge and you'll be rewarded with a special Bonus.",
  cta: "Start",
};

const startCardContent = [
  {
    id: 1,
    imageUrl: require("../../images/startPage/ico-1.png"),
    text: "Blackjack",
  },
  {
    id: 2,
    imageUrl: require("../../images/startPage/ico-2.png"),
    text: "Roulette",
  },
  {
    id: 3,
    imageUrl: require("../../images/startPage/ico-3.png"),
    text: "Baccarat",
  },
  {
    id: 4,
    imageUrl: require("../../images/startPage/ico-4.png"),
    text: "Poker",
  },
  {
    id: 5,
    imageUrl: require("../../images/startPage/ico-5.png"),
    text: "Dragon & Tiger",
  },
  {
    id: 6,
    imageUrl: require("../../images/startPage/ico-6.png"),
    text: "Slots",
  },
];

const StartPage = () => {
  const [state, setState] = useState({});

  /**
   *  Using useEffect once initial render complete
   *  And waiting for events to store and display them in console
   *  */
  useEffect(() => {
    stateService.addData({
      startPage: startCardContent
        .filter((item) => state[item.id])
        .map((item) => item.text),
    });
  }, [state]);

  return (
    <>
      <Container>
        <Row
          className="text-center align-items-center justify-content-center g-0"
          style={{ maxWidth: "858px" }}
        >
          <Col xs={12} md={10}>
            <Row className="flex-column">
              <Col xs={12} sm={12} md={12} className="text-1 pb-5">
                {startCardText.text1}
              </Col>
              <Col style={{ maxWidth: "600px" }}>
                <Row className="align-items-center justify-content-center">
                  {startCardContent.map((card) => (
                    <Col key={card.id} xs={6} md={4} className="g-0">
                      <CasinoCard
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
              <Col xs={10} md={8} className="text-2 pt-3">
                {startCardText.text2}
              </Col>
              <Col className="justify-content-center pb-5">
                <Link to="/question1/providers">
                  <Button variant="primary" size="lg">
                    {startCardText.cta}
                  </Button>
                </Link>
              </Col>
              <Col
                className="login-text pt-0"
              >
                Already a member? <a href="#login">Login</a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default StartPage;
