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

export default function Branding() {
    return (
<Container fluid>
<Row> <h4 className="brand-text">
Os melhores acreditam em nossas soluções
</h4>
</Row>
<Row>
<img src={natura} className="supplier-banner" alt="natura-company" />
<img src={philco} className="supplier-banner" alt="philco-company" />
<img src={ifood} className="supplier-banner" alt="ifood-company" />
<img src={braskem} className="supplier-banner" alt="braskem-company" />
</Row>
<Row>
<img src={petrobras} className="supplier-banner" alt="petrobras-company" />
<img src={minerva} className="supplier-banner" alt="minerva-company" />
<img src={mdias} className="supplier-banner" alt="mdias-company" />
<img src={kws} className="supplier-banner" alt="kws-company" />
<img src={gerdau} className="supplier-banner" alt="gerdau-company" />
</Row>
</Container>
    )
}
