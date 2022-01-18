import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../components/Header";
import StartPage from "../pages/StartPage";
import QuestionPage1Providers from "../pages/QuestionPage1Providers";
import QuestionPage1Games from "../pages/QuestionPage1Games";

const Layout = () => {
  return (
    <Router>
      <Container fluid className="g-0">
        <Row className="g-0">
          <Col>
          <Header />
          <Routes>
            <Route path="/" exact element={<StartPage />} />
            <Route path="/question1/providers" exact element={<QuestionPage1Providers />} />
            <Route path="/question1/games" exact element={<QuestionPage1Games />} />
          </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default Layout;
