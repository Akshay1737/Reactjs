import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Storeios from "../../assets/food-assets/shop/appstore.png";
import Playstore from "../../assets/food-assets/shop/googleplay.png";
import DownloadImage from "../../assets/food-assets/shop/e-shop.png";
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from "../../assets/food-assets/brands/brand-11.png";
import Brand2 from "../../assets/food-assets/brands/brand-12.png";
import Brand3 from "../../assets/food-assets/brands/brand-13.png";
import Brand4 from "../../assets/food-assets/brands/brand-14.png";
import Brand5 from "../../assets/food-assets/brands/brand-15.png";
import Brand6 from "../../assets/food-assets/brands/brand-16.png";
import Brand7 from "../../assets/food-assets/brands/brand-17.png";

const Section5 = () => {
  return (
    <>
      <section className="shop_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
              <h4>Download our mobile app</h4>
              <h2>Save up to 20% on every order</h2>
              <p>
                Order your favorite meals in just a few taps.  
                Enjoy exclusive app-only discounts, track your deliveries in real time,  
                and never miss a tasty deal again.
              </p>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <Link to="/" className="me-3">
                  <img src={Storeios} alt="Download on App Store" className="img-fluid store" />
                </Link>
                <Link to="/">
                  <img src={Playstore} alt="Get it on Google Play" className="img-fluid store" />
                </Link>
              </div>
            </Col>
            <Col lg={6}>
              <img src={DownloadImage} alt="Mobile shopping app preview" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Brand Section */}
      <section className="brands_section">
        <Container>
          <Row>
            <Carousel className="brand-carousel" interval={2000}>
              {/* Slide 1 */}
              {/* Slide 1 */}
<Carousel.Item>
  <Row className="text-center">
    <Col xs={12} sm={6} md={3}><img className="img-fluid" src={Brand1} alt="Brand 1" /></Col>
    <Col xs={12} sm={6} md={3} className="col-mobile-hide"><img className="img-fluid" src={Brand2} alt="Brand 2" /></Col>
    <Col xs={12} sm={6} md={3} className="col-mobile-hide"><img className="img-fluid" src={Brand3} alt="Brand 3" /></Col>
    <Col xs={12} sm={6} md={3} className="col-mobile-hide"><img className="img-fluid" src={Brand4} alt="Brand 4" /></Col>
  </Row>
</Carousel.Item>

{/* Slide 2 */}
<Carousel.Item>
  <Row className="text-center">
    <Col xs={12} sm={6} md={3}><img className="img-fluid" src={Brand5} alt="Brand 5" /></Col>
    <Col xs={12} sm={6} md={3} className="col-mobile-hide"><img className="img-fluid" src={Brand6} alt="Brand 6" /></Col>
    <Col xs={12} sm={6} md={3} className="col-mobile-hide"><img className="img-fluid" src={Brand7} alt="Brand 7" /></Col>
    <Col xs={12} sm={6} md={3} className="col-mobile-hide"><img className="img-fluid" src={Brand1} alt="Brand 1 repeat" /></Col>
  </Row>
</Carousel.Item>

            </Carousel>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Section5;
