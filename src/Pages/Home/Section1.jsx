import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Burger from '../../assets/food-assets/hero/hero-2.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "../../styles/Homestyle.css";

const Section1 = () => {
  return (
    <section className='hero_section'>
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <img src={Burger} alt="Delicious burger" className="img-fluid" />
              <div className="price_badge">
                <div className="price_text">
                  <h4 className="h4_xs">only</h4>
                  <h4 className="h4_lg">$51.99</h4>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={5}>
            <div className="hero_txt text-center">
              <h1 className="txt-white">New Burger</h1>
              <h2 className="text-white">with Fresh Onion</h2>
              <p className="text-white pt-2 pb-4">
                Savor the flavor of our juicy grilled burger layered with crisp lettuce,
                fresh onions, and our signature creamy sauce — all served in a soft, toasted bun.
              </p>
              <Link to="/" className="btn order_now">Order Now</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section1;
