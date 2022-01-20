import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import cx from "classnames";
import styles from "./index.module.css";

const QuizButton = ({ button }) => {
  const { answer } = button;

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
      <Container>
        <Row>
          <Col className={cx(styles.quizButton, "d-flex pb-3 g-0")}>
            <Button
              className={{
                [styles.selected]: isActive,
                [styles.unselected]: !isActive,
              }}
              variant="primary"
              size="lg"
              onClick={toggleClass}
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
