import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import supplierBanner from '../../../images/supplier-banner.png';
import calendar from '../../../images/calendar.png';
import chart from '../../../images/chart.png';
import wallet from '../../../images/wallet.png';
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
        <Row className="icons-container" >
        <Col><img src={calendar} className="supplier-banner" alt="supplier-banner" />
        <p className="main-text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Col>
        <Col><img src={chart} className="supplier-banner" alt="supplier-banner" />
        <p className="main-text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Col>
        <Col><img src={wallet} className="supplier-banner" alt="supplier-banner" />
        <p className="main-text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Col>
        </Row>
      </Container>
    )
}
