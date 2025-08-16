import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="footer py-4">
        <Container>
          <Row>
            {/* Location */}
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="footer-box">
                <h5>Location</h5>
                <p>
                  5505 Waterford District Dr,<br />
                  Miami, FL 33126<br />
                  United States
                </p>
              </div>
            </Col>

            {/* Working Hours */}
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="footer-box">
                <h5>Working Hours</h5>
                <p>Mon-Fri: 9:00AM - 10:00PM</p>
                <p>Saturday: 10:00AM - 8:30PM</p>
                <p>Sunday: 12:00PM - 5:00PM</p>
              </div>
            </Col>

            {/* Order Now */}
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="footer-box">
                <h5>Order Now</h5>
                <p>Call us today to place your order or make a reservation</p>
                <p>
                  <a href="tel:999-888-7777" className="calling">
                    999-888-7777
                  </a>
                </p>
              </div>
            </Col>

            {/* Follow Us */}
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="footer-box">
                <h5>Follow Us</h5>
                <p>Stay connected through our social media channels</p>
                <ul className="social-icons list-inline mt-2">
                  <li className="list-inline-item">
                    <Link to="/"><i className="bi bi-twitter"></i></Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/"><i className="bi bi-facebook"></i></Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/"><i className="bi bi-instagram"></i></Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/"><i className="bi bi-youtube"></i></Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          {/* Copyright */}
          <Row className="copy_right py-3">
            <Col>
              <div>
                <ul className="list-inline text-center mb-0">
                  <li className="list-inline-item d-block d-md-inline">
                    <Link to="/">© 2023 <span>CODE4EDUCATION</span>. All Rights Reserved</Link>
                  </li>
                  <li className="list-inline-item d-block d-md-inline">
                    <Link to="/">About Us</Link>
                  </li>
                  <li className="list-inline-item d-block d-md-inline">
                    <Link to="/">Terms Of Use</Link>
                  </li>
                  <li className="list-inline-item d-block d-md-inline">
                    <Link to="/">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
