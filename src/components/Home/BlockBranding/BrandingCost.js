import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import natura from '../../../images/natura.png';
import philco from '../../../images/philco.png';
import ifood from '../../../images/ifood.png';
import braskem from '../../../images/braskem.png';
import petrobras from '../../../images/petrobras.png';
import minerva from '../../../images/minerva.png';
import mdias from '../../../images/mdias.png';
import kws from '../../../images/kws.png';
import gerdau from '../../../images/gerdau.png';
import './style.scss';

export default function BrandingCustomers() {
    return (
        <Container fluid className="container-brand border-test">
            <Row className="container-text" > <h4 className="brand-text">
                Os melhores acreditam em nossas soluções
</h4>
            </Row>
            <Row className="container-logo-one" >
                <img src={natura} className="brand-size" alt="natura-company" />
                <img src={philco} className="brand-size" alt="philco-company" />
                <img src={ifood} className="brand-size" alt="ifood-company" />
                <img src={braskem} className="brand-size" alt="braskem-company" />
            </Row>
            <Row className="container-logo-two">
                <img src={petrobras} className="brand-size" alt="petrobras-company" />
                <img src={minerva} className="brand-size" alt="minerva-company" />
                <img src={mdias} style={{ height: 56 }} alt="mdias-company" />
                <img src={kws} style={{ height: 64 }} alt="kws-company" />
                <img src={gerdau} style={{ height: 48 }} alt="gerdau-company" />
            </Row>
        </Container>
    )
}
