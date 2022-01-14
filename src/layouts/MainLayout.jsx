import React from "react";

import { Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../components/Header";
import StartPage from "../pages/StartPage";

const Layout = () => {
  return (
    <Router>
      <Container fluid className="g-0">
        <Row className="g-0">
          <Header />
          <Routes>
            <Route path="/" exact element={<StartPage />} />
          </Routes>
        </Row>
      </Container>
    </Router>
  );
};

export default Layout;
