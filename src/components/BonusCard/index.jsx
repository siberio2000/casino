import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import cx from "classnames";
import styles from "./index.module.scss";

const BonusCard = ({ data, selected, onClick }) => {
  const { text } = data;

  return (
    <>
      <Container>
        <Row>
          <Col className={cx(styles.bonusCard, "g-0")}>
            <Card
              className={cx({
                [styles.selected]: selected,
                [styles.unselected]: !selected,
              })}
              onClick={onClick}
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
