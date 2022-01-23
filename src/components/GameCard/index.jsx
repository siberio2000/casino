import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import cx from "classnames";
import styles from "./index.module.css";

const GameCard = ({ data, selected, onClick }) => {
  const { imageUrl } = data;

  return (
    <>
      <Container>
        <Row>
          <Col style={{}} className="pb-3 g-0">
            <Card
              className={cx(styles.gameCard, {
                [styles.selected]: selected,
                [styles.unselected]: !selected,
              })}
              onClick={onClick}
            >
              <Card.Img variant="top" src={imageUrl} />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GameCard;
