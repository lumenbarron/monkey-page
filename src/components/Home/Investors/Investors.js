import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import investorBanner from "../../../images/investor-banner.png";
import chart from "../../../images/chart.svg";
import calendar from "../../../images/calendar.svg";
import "./style.scss";

export default function Investors() {
  return (
    <Container fluid className="investor-company p-0">
    <Row className="row-company m-0">
      <Col lg={6} className="text-container border-test p-0" >
        <button className="btn-investor mb-3">Investidor</button>
        <h2 className="title-h2">
        Aqui na Monkey você investidor tem mais acesso a grandes empresas.
        </h2>
        <p className="main-text">
        Tenha oportunidades de operar em grandes empresas, com uma plataforma ágil, facil e eficaz. Com um onboarding totalmente digital e com controle de cada cadastro.          Aumente o seu prazo de pagamento, e ajude os seus fornecedores a
          terem uma vida financeira mais saúdavel.
        </p>
        <Link className="link-style" to="/about">
          Entenda as vantagens de ter um programa.
        </Link>
        <Row className="icons-container-left m-0">
          <Col >
            <img src={chart} className="pb-3" alt="chart-icon" />
            <h5 className="">Onboarding Online </h5>
            <p className="supplier-text-icons pr-4">
            Todos os cadastros de Fornecedor e Âncoras, é feito totalmente online. 
            </p>
          </Col>
          <Col>
            <img src={calendar} className="pb-3" alt="work-icon" />
            <h5 className="">Processo Ágil e Fácil</h5>
            <p className="supplier-text-icons">
            Uma Plataforma intuitiva,
e todos processos digitais
e online.
            </p>
          </Col>
        </Row>
      </Col>
      <Col lg={6} className="p-0 border-test">
        <img
          src={investorBanner}
          className="company-banner"
          alt="company-banner"
        />
      </Col>
    </Row>
  </Container>
  );
}
