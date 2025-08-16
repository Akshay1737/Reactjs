import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../styles/Header.css";
import Logo from "../../assets/food-assets/logo/logo.png";

const Header = () => {
const [nav, setNav] = useState(false);
useEffect(() => {
  const changeValueOnScroll = () => {
    const scrollValue = window.scrollY;
    console.log("scrollY value:", scrollValue);
    setNav(scrollValue > 100);
  };
  window.addEventListener("scroll", changeValueOnScroll);
  changeValueOnScroll();
  return () => {
    window.removeEventListener("scroll", changeValueOnScroll);
  };
}, []);
console.log("Navbar sticky state:", nav);
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className={`${nav ===true ? "sticky" : ""}`}>
        <Container>
          {/* ✅ Fixed nested <Link> issue */}
          <Navbar.Brand as={Link} to="/" className="logo">
            <img src={Logo} alt="Logo" className='img-fluid' />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/cart" style={{
    display: window.innerWidth < 768 ? "none" : "block"
  }}>
                <span className="cart" >
                  <i className="bi bi-bag fs-5"></i>
                  <em className="roundpoint">2</em>
                </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
