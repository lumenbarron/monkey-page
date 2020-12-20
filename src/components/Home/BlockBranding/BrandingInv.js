import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bnp from "../../../images/bnp.svg";
import bbm from "../../../images/bbm.svg";
import bradesco from "../../../images/bradesco.svg";
import bib from "../../../images/bib.png";
import daycoval from "../../../images/daycoval.svg";
import btg from "../../../images/btg.svg";
import itau from "../../../images/itau.svg";
import safra from "../../../images/safra.svg";
import "./style.scss";

export default function BrandingInvestors() {
  return (
    <Container fluid className="container-brand border-test">
      <Row className="container-text">
        <h4 className="brand-text">Mais de 22 Investidores prontos para conectar em seu programa</h4>
      </Row>
      <Row className="container-logo-one">
        <img src={bib} className="brand-size" alt="bib-company" />
        <img src={bnp} className="brand-size" alt="bnp-company" />
        <img src={bbm} className="brand-size" alt="bbm-company" />
        <img src={bradesco} className="brand-size" alt="bradesco-company" />
      </Row>
      <Row className="container-logo-three">
        <img src={daycoval} className="brand-size" alt="daycoval-company" />
        <img src={btg} style={{ height: 56 }} alt="btg-company" />
        <img src={itau} style={{ height: 56 }} alt="itau-company" />
        <img src={safra} className="brand-size" alt="kws-company" />
      </Row>
    </Container>
  );
}