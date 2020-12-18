import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import supplierBanner from "../../../images/supplier-banner.png";
import calendar from "../../../images/calendar.png";
import chart from "../../../images/chart.png";
import wallet from "../../../images/wallet.png";
import "./style.scss";

export default function Supplier() {
  return (
    <Container fluid>
      <Row>
        <Col lg={6} className=" border-test p-0">
          <img
            src={supplierBanner}
            className="supplier-banner"
            alt="supplier-banner"
          />
        </Col>
        <Col lg={6} className="supplier-container border-test">
          <h2 className="title-h2">
            Notas Fiscais para receber só daqui 120 dias? Antecipe agora mesmo.
          </h2>
          <p className="main-text">
            Garantimos para você a melhor taxa para ser descontado o menor valor
            possível. Acreditamos na sustentabilidade em uma cadeia de
            Fornecedores.
          </p>
          <Link className="link-style" to="/about">
            Saiba mais sobre as vantagens.
          </Link>
        </Col>
      </Row>
      <Row className="icons-container border-test">
        <Col>
          <img src={calendar} className="pb-3" alt="calendar-icon" />
          <h5 className="">
          Juros Competitivos
          </h5>
          <p className="supplier-text-icons pb-1">
          Nossos juros é 70% menor que o mercado cobra.
          </p>
        </Col>
        <Col>
          <img src={chart} className="pb-3" alt="chart-icon" />
          <h5 className="">
          Antecipe Notas Fiscais
          </h5>
          <p className="supplier-text-icons pb-1">
          A solução para a sua Nota Fiscal com um prazo longo.
          </p>
        </Col>
        <Col>
          <img src={wallet} className="pb-3" alt="wallet-icon" />
          <h5 className="">
          Dinheiro no Mesmo Dia
          </h5>
          <p className="supplier-text-icons pb-1">
          Nossos investidores depositam o dinheiro no mesmo dia.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
