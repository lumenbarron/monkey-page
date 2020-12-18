import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mainBanner from "../../../images/main-banner.png";
import "./style.scss";

export default function MainBanner() {
  return (
    <Container fluid>
      <Row>
        <Col lg={6} className="text-container border-test">
          <h1 className="main-header">
            A Monkey ajuda você fornecedor a antecipar Notas Fiscais.
          </h1>
          <p className="main-text">
            Estamos aqui para te ajudar em todos os momentos, providenciamos a
            melhor taxa para você antecipar sua Nota Fiscal e ter o dinheiro no
            mesmo dia.
          </p>
          <button className="btn-border-header">Saiba Mais</button>
        </Col>
        <Col lg={6} className=" border-test">
          {" "}
          <img src={mainBanner} className="monkey-banner" alt="monkey-banner" />
        </Col>
      </Row>
    </Container>
  );
}
