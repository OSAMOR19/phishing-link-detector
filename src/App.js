import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Port from "../src/Components/portfolio";
import MyNav from './Components/Nav';

function App() {
  return (
    <React.Fragment>
      <MyNav/>
      <Port />
      </React.Fragment>
  );
}

export default App;
