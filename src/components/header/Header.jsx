import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { PiStudentBold } from "react-icons/pi";
import "./header.css"

const Header = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <PiStudentBold className="icon-student" /> 
            Censo Escolar
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Instituições Ensino</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header