import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import cx from "classnames";
import styles from "./index.module.scss";

const BonusCard = ({ data }) => {
  const { text } = data;

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
      <Container>
        <Row>
          <Col className={cx(styles.bonusCard, "g-0")}>
            <Card
              className={cx({
                [styles.selected]: isActive,
                [styles.unselected]: !isActive,
              })}
              onClick={toggleClass}
            >
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

export default BonusCard;
