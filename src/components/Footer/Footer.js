import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
import logoFooter from "../../images/monkey-logo-footer.svg";
import instaIcon from "../../images/instagram-icon.svg";
import faceIcon from "../../images/facebook-icon.svg";
import linkedIcon from "../../images/linkedin-icon.svg";
import twitterIcon from "../../images/twitter-icon.svg";
import "./style.scss";

export default function Footer() {
  return (
    <Container fluid className="p-0 footer-container">
      <Row className="m-0 row-logo">
        <img src={logoFooter} className="" alt="logo-monkey" />
      </Row>
      <Row className="m-0 container-titles">
        <Col lg={3} className=" titles-footer">
          <h6>Produtos</h6>
          <p>Empresas</p>
          <p>Fornecedores</p>
          <p>Instituições Financeiras</p>
        </Col>
        <Col lg={3} className=" titles-footer">
          <h6>Institucional</h6>
          <p>Sobre Nós</p>
          <p>Dúvidas</p>
          <p>Quem Somos</p>
        </Col>
        <Col lg={3} className=" titles-footer">
          <h6>Redes Socias</h6>
          <p>Vem seguir a gente :D</p>
          <Row className="padding-right">
            <Col>
              <img src={instaIcon} className="" alt="logo-monkey" />
            </Col>
            <Col>
              <img src={faceIcon} className="" alt="logo-monkey" />
            </Col>
            <Col>
              <img src={linkedIcon} className="" alt="logo-monkey" />
            </Col>
            <Col>
              <img src={twitterIcon} className="" alt="logo-monkey" />
            </Col>
          </Row>
        </Col>
        <Col lg={3} className=" titles-footer">
          <h6>Endereço</h6>
          <p>
            Av. Brg. Faria Lima, 1485 - Pinheiros, São Paulo - SP, 01451-001,
            Brasil
          </p>
        </Col>
      </Row>
      <Row className="m-0 row-logo">
        <p className="copyright-footer">
          © Monkey Exchange 2021. Todos os direitos reservados. Acesse nossa
          <Link> Politica de Privacidade.</Link>
        </p>
      </Row>
      <Row className="m-0 lenguage-row border-test">
        <Form.Check
          className="radio-input"
          type="radio"
          label="Português"
          name="portugues"
          id="formHorizontalRadios1"
        />
        <Form.Check
          className="radio-input"
          type="radio"
          label="Inglês"
          name="ingles"
          id="formHorizontalRadios2"
        />
        <Form.Check
          className="radio-input"
          type="radio"
          label="Espanhol"
          name="espanhol"
          id="formHorizontalRadios3"
        />
      </Row>
    </Container>
  );
}
