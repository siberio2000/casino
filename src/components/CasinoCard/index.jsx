import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import cx from "classnames";
import styles from "./index.module.scss";

const CasinoCard = ({ data, selected, onClick }) => {
  const { text, imageUrl } = data;

  return (
    <>
      <Container>
        <Row>
          <Col style={{ minWidth: "60px" }} className="g-0 ps-1 pe-1">
            <Card
              className={cx(styles.casinoCard, "mc-2 me-2 mb-4", {
                [styles.selected]: selected,
                [styles.unselected]: !selected,
              })}
              onClick={onClick}
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

export default CasinoCard;
