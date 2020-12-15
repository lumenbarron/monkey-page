import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import mainBanner from '../../../images/main-banner.png';
import './style.scss';

export default function MainBanner() {
  return (
    <Container fluid>
      <Row>
        <Col className="text-container" ><h1 className="main-header" >A Monkey ajuda você fornecedor a antecipar Notas Fiscais.</h1>
          <p className="main-text" >Ofereça uma plataforma ágil e confiável que fortaleça a cadeia de fornecedores da sua empresa. Uma solução White-label e totalmente integrada com o seu sistema ERP. </p>
          <button className="btn-border-header">
            Saiba Mais
  </button>
        </Col>
        <Col>    <img src={mainBanner} className="monkey-banner" alt="monkey-banner" /></Col>
      </Row>
    </Container>
  )
}
