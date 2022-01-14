import "./styles/main.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./layouts/MainLayout";

function App() {
  return (
    <Container fluid>
      <Layout />
    </Container>
  );
}

export default App;
