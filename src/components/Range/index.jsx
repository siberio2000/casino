import React from "react";
import RangeSlider from "react-bootstrap-range-slider";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import cx from "classnames";
import styles from "./index.module.css";

const Range = ({ value, setValue, currency, setCurrency }) => {
  return (
    <Container>
      <Row className="">
        <Col className={cx(styles.range, "d-flex pb-3 g-0")}>
          <Form>
            <Form.Group
              as={Row}
              className="d-flex flex-column  align-items-center justify-content-around"
            >
              <Col xs={12} className="d-flex flex-row g-0">
                <Button
                  className={styles.roundbutton}
                  onClick={(e) => setValue((e.target.value = "0"))}
                >
                  Min
                </Button>
                <RangeSlider
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <Button
                  className={styles.roundbutton}
                  onClick={(e) => setValue((e.target.value = "100"))}
                >
                  Max
                </Button>
              </Col>
              <Col className="d-flex flex-row g-0 pt-4">
                <Row className="display-input justify-content-center">
                  {value}
                </Row>
                <Form.Select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  <option value="EUR">EUR</option>
                  <option value="USD">USD</option>
                  <option value="GBP">GBP</option>
                  <option value="LVL">LVL</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Range;
