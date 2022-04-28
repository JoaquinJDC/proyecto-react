import React from "react";
import { Nav } from 'react-bootstrap';
import './card.css'
const Footer = () => {
  return (
    <Nav className="pie"
    activeKey="/home"
    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
  >
    <Nav.Item className="pielista">
      <Nav.Link className="piecolor" href="">...</Nav.Link>
    </Nav.Item>
    <Nav.Item className="pielista">
      <Nav.Link className="piecolor" href="" >...</Nav.Link>
    </Nav.Item>
    <Nav.Item className="pielista">
      <Nav.Link className="piecolor"href="" >...</Nav.Link>
    </Nav.Item>
    <Nav.Item className="pielista">
      <Nav.Link className="piecolor" href="" >
        ...
      </Nav.Link>
    </Nav.Item>
  </Nav>
  );
}

export default Footer;