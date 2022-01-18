import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import cx from "classnames";
import styles from "./index.module.css";

const ProviderCard = ({ data }) => {
  const { imageUrl } = data;

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
      <Container>
        <Row>
          <Col style={{}} className="pb-3 g-0">
            <Card
              className={cx(styles.providerCard, {
                [styles.selected]: isActive,
                [styles.unselected]: !isActive,
              })}
              onClick={toggleClass}
            >
              <Card.Img variant="top" src={imageUrl} />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProviderCard;
