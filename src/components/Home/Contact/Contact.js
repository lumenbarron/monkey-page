import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./style.scss";

export default function Contact() {
  return (
    <Container fluid >
      <Row className="contact-container">
        <Col lg={6} className="contact-text-container px-5 border-test">
          <h1 className="contact-header">
            Se interessou e quer conversar com alguém especializado?
            </h1>
          <p className="contact-text">
            Deixe o seu contato ao lado, que o nosso time de consultores, irá entrar em contato com você para você ter a melhor solução possível.
            </p>
        </Col>
        <Col lg={6} className="contact-form-container px-5 border-test">
          <Form className="pt-5">
            <Form.Group controlId="formBasicNome" >
              <Form.Label className="input-text" >Nome</Form.Label>
              <Form.Control type="nome" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail" >
              <Form.Label className="input-text">E-mail</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group controlId="formBasicTelefone" >
              <Form.Label className="input-text">Telefone</Form.Label>
              <Form.Control type="telefone" />
            </Form.Group>
            <p className="radio-tittle">Conte pra gente como você se enquadra em nosso negócio. Você:</p>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                className="radio-text"
                type="radio"
                label="Fornece para uma Empresa"
                name="fornecedor"
                id="formHorizontalRadios1"
              />
              <Form.Check
                className="radio-text"
                type="radio"
                label="Tem vários fornecedores"
                name="empresa"
                id="formHorizontalRadios2"
              />
              <Form.Check
                className="radio-text"
                type="radio"
                label="É um Investidor"
                name="investidor"
                id="formHorizontalRadios3"
              />
            </Form.Group>
            <button className="submit-button mb-5 mt-3">Enviar</button>
          </Form>
        </Col>
      </Row>
      <Row className="contact-background"></Row>
    </Container>
  )
}
