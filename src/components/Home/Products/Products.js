import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import iconHeart from "../../../images/icon-heart.svg";
import iconStar from "../../../images/icon-star.svg";
import iconWork from "../../../images/icon-work.svg";
import iconGraph from "../../../images/icon-graph.svg";

import "./style.scss";

export default function Products() {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col lg={2} className="p-0">
            <Row className="first-block" ></Row>
            <Row className="second-block"></Row>
        </Col>
        <Col lg={10} className="products-container">
          <Row className="pt-5 pb-4 title-product">
            <h4>Algumas das nossas soluções</h4>
          </Row>
          <Row className="m-0">
            <Col lg={3} className="product-card-container pr-0 border-test">
              <div className="border-test product-card">
                <div className="product-text">
                  <img src={iconHeart} className="pb-3" alt="icon-heart" />
                  <h5>Fomente seus fornecedores.</h5>
                  <p className="supplier-text-icons m-0">
                    Crie um impacto na sua cadeia, do menor até o maior
                    fornecedor.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={3} className="product-card-container pr-0 border-test">
              <div className="border-test product-card">
                <div className="product-text">
                  <img src={iconStar} className="pb-3" alt="icon-star" />
                  <h5>Prazo de pagamento.</h5>
                  <p className="supplier-text-icons m-0">
                  Tenha mais fluxo, e aumente o prazo médio de pagamento.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={3} className="product-card-container pr-0 border-test">
              <div className="border-test product-card">
                <div className="product-text">
                  <img src={iconWork} className="pb-3" alt="icon-work" />
                  <h5>Otimização do Fluxo.</h5>
                  <p className="supplier-text-icons m-0">
                  Otimize e tenha um melhor controle do fluxo de caixa da sua empresa.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={3} className="product-card-container pr-0 border-test">
              <div className="border-test product-card">
                <div className="product-text">
                  <img src={iconGraph} className="pb-3" alt="icon-graph" />
                  <h5>Acesso a linhas de créditos.</h5>
                  <p className="supplier-text-icons m-0">
                  A sua empresa terá acesso a mais de 22 investidores para as linhas de créditos.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
