import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import supplierBanner from '../../../images/supplier-banner.png';
import './style.scss';

export default function Supplier() {
    return (
        <Container fluid>
        <Row>
          <Col><img src={supplierBanner} className="supplier-banner" alt="supplier-banner" /></Col>
          <Col className="text-container" ><h1 className="supplier-text" >Notas Fiscais para receber só daqui 120 dias? Antecipe agora mesmo.</h1>
            <p className="main-text" >O nosso sistema garante a menor taxa para sua antecipação e no mesmo dia o dinheiro cai na sua conta.</p>
            <Link to="/about">
            Saiba mais sobre as vantagens.
            </Link>
          </Col>
        </Row>
      </Container>
    )
}
