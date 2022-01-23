import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import cx from "classnames";
import styles from "./index.module.css";

const QuizButton = ({ button, selected, onClick }) => {
  const { answer, id } = button;

  const isActive = id === selected;

  return (
    <>
      <Container>
        <Row>
          <Col className={cx(styles.quizButton, "d-flex pb-3 g-0")}>
            <Button
              className={{
                [styles.selected]: isActive,
                [styles.unselected]: !isActive,
                [styles.incorrect]: isActive && !button.correct,
              }}
              variant="primary"
              size="lg"
              onClick={onClick}
            >
              {answer}
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default QuizButton;
