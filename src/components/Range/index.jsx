import React, { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import {
  Container,
  Row,
  Col,
  Form,
  Dropdown,
  DropdownButton,
  Button,
} from "react-bootstrap";
import cx from "classnames";
import styles from "./index.module.css";

const Range = () => {
  const [value, setValue] = useState(50);

  return (
    <>
      <Container>
        <Row>
          <Col className={cx(styles.range, "d-flex pb-3 g-0")}>
            <Form>
              <Form.Group
                as={Row}
                className="d-flex flex-column  align-items-center justify-content-around"
              >
                <Col xs={12}  className="d-flex flex-row">
                  <Button className={styles.roundbutton}>Min</Button>
                  <RangeSlider
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                   <Button className={styles.roundbutton}>Max</Button>
                </Col>
                <Col className="d-flex flex-row g-0">
                  <Form.Control value={value} />
                  <DropdownButton id="dropdown-basic-button" title="EUR">
                    <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">GBP</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">LVL</Dropdown.Item>
                  </DropdownButton>
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Range;
