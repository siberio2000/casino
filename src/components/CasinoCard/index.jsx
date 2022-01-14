import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import cx from "classnames";
import styles from "./index.module.scss";

const StartCard = ({ data }) => {
  const { text, imageUrl } = data;

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
      <Container>
        <Row>
          <Col style={{ minWidth: "60px" }} className="g-0">
            <Card
              className={cx(styles.casinoCard, "mc-2 me-2 mb-5", {
                [styles.selected]: isActive,
                [styles.unselected]: !isActive,
              })}
              onClick={toggleClass}
            >
              <Card.Img variant="top" src={imageUrl} />
              <Card.Body>
                <Card.Title>{text}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default StartCard;
