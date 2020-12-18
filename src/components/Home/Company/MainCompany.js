import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import companyBanner from "../../../images/company-banner.png";
import chart from "../../../images/chart.svg";
import work from "../../../images/work.svg";
import "./style.scss";

export default function MainCompany() {
  return (
    <Container fluid className="main-company">
      <Row className="row-company">
        <Col lg={6} className="text-container border-test">
          <button className="btn-company mb-3">Âncora</button>
          <h2 className="title-h2">
            Aqui na Monkey, denominamos os clientes que são donos de programas
            como âncora.
          </h2>
          <p className="main-text">
            Aumente o seu prazo de pagamento, e ajude os seus fornecedores a
            terem uma vida financeira mais saúdavel.
          </p>
          <Link className="link-style" to="/about">
            Entenda as vantagens de ter um programa.
          </Link>
          <Row className="icons-container-left">
            <Col>
              <img src={chart} className="pb-3" alt="chart-icon" />
              <h5 className="">Fluxo de Caixa </h5>
              <p className="supplier-text-icons pr-4">
                Com o nosso sistema, você poderá aumentar seu prazo de
                pagamento.
              </p>
            </Col>
            <Col>
              <img src={work} className="pb-3" alt="work-icon" />
              <h5 className="">Flexibilidade no Pagamento</h5>
              <p className="supplier-text-icons">
                Novas opções para solucionar o seu pagamento e controle dos
                fornecedores.
              </p>
            </Col>
          </Row>
        </Col>
        <Col lg={6} className=" border-test">
          <img
            src={companyBanner}
            className="company-banner"
            alt="company-banner"
          />
        </Col>
      </Row>
    </Container>
  );
}
