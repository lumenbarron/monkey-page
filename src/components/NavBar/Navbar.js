import React from 'react';
import {Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/monkey-logo.png';
import './style.scss';

export default function MainNavbar() {
    return (
        <Navbar className="main-nav" expand="sm">
  <Navbar.Brand href="#home">
  <img src={logo} className="monkey-logo" alt="monkey-logo" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="container-nav">
      <Nav.Link href="#home">Fornecedores</Nav.Link>
      <Nav.Link href="#">Instituições Financeiras</Nav.Link>
      <Nav.Link href="#">Empresas</Nav.Link>
      <Nav.Link href="#">Quem Somos</Nav.Link>
      <Nav.Link href="#">Dúvidas</Nav.Link>
      <button className="btn-full-nav mr-2">
      PT
  </button>
  <button className="btn-border-nav">
  Vamos Conversar?
  </button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}