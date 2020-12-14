import React from 'react';
import {Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../images/monkey-logo.png';
import './style.scss';

export default function MainNavbar() {
    return (
        // <div className="main-nav">
        <Navbar className="main-nav" expand="sm">
  <Navbar.Brand href="#home">
  <img src={logo} className="monkey-logo" alt="monkey-logo" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Fornecedores</Nav.Link>
      <Nav.Link href="#">Instituições Financeiras</Nav.Link>
      <Nav.Link href="#">Empresas</Nav.Link>
      <Nav.Link href="#">Quem Somos</Nav.Link>
      <Nav.Link href="#">Dúvidas</Nav.Link>
      <button className="btn-medium-full">
      PT
  </button>
  <button className="btn-medium-border">
  Vamos Conversar?
  </button>
    </Nav>
  </Navbar.Collapse>

</Navbar>
// </div>
    //     <div>
    //               <header className="header-nav">
    //     <section>
    //       <img src={logo} className="monkey-logo" alt="lucyname" />
    //     </section>

    //     <a id='logo-lucy' href="#home" />
    //     <nav>
    //       <a className="header-nav-a" href="#portafolio">
    //         PORTFOLIO
    //       </a>
 
    //       <a className="header-nav-a" href="#know-me">
    //         KNOW ME
    //       </a> 
          
    //       <a className="header-nav-a" href="#contact">
    //         HIRE ME !
    //       </a>
    //     </nav>
    //   </header>
    //     </div>
    )
}
