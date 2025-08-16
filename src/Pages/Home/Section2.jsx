import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import Pizza from '../../assets/food-assets/about/pizza.png';
import Salad from '../../assets/food-assets/about/salad.png';
import Delivery from '../../assets/food-assets/about/delivery-bike.png';
import '../../styles/Homestyle.css';

// Updated mock data with meaningful text
const mockData = [
  {
    image: Pizza,
    title: "Authentic Recipes",
    paragraph: `We craft every pizza with hand-picked ingredients, fresh dough, and a passion for authentic flavors that bring the true taste of Italy to your plate.`,
  },
  {
    image: Salad,
    title: "Fresh & Healthy",
    paragraph: `Our salads are made from farm-fresh vegetables, wholesome dressings, and nutrient-packed toppings — perfect for a light yet satisfying meal.`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `We value your time! Get your favorite meals delivered hot and fresh, straight to your doorstep, in record time.`,
  },
];

const Section2 = () => {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>About Us</h2>
              <p>
                At FoodExpress, we believe great food brings people together. 
                From sizzling pizzas to fresh salads, we serve meals that are 
                full of flavor, freshness, and love.
              </p>
              <Link to="/menu" className="btn order_now btn_red">
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} key={index} className="mb-4 mb-md-0">
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img src={cardData.image} alt={cardData.title} className="img-fluid" />
                  </div>
                  <div>
                    <h4>{cardData.title}</h4>
                    <p>{cardData.paragraph}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Section2;
