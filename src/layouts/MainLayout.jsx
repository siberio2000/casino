import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../components/Header";
import StartPage from "../pages/StartPage";
import QuestionPage1Providers from "../pages/QuestionPage1Providers";
import QuestionPage1Games from "../pages/QuestionPage1Games";
import QuestionPage2 from "../pages/QuestionPage2";
import QuestionPage3 from "../pages/QuestionPage3";
import QuestionPage4 from "../pages/QuestionPage4";
import QuestionPage5 from "../pages/QuestionPage5";
import LastPage from "../pages/LastPage";

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
            <Route path="/question2" exact element={<QuestionPage2 />} />
            <Route path="/question3" exact element={<QuestionPage3 />} />
            <Route path="/question4" exact element={<QuestionPage4 />} />
            <Route path="/question5" exact element={<QuestionPage5 />} />
            <Route path="/congrats" exact element={<LastPage />} />
          </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default Layout;
