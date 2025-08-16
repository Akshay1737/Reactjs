import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/Homestyle.css'; // Ensure you have the correct path to your CSS file';

const Cards = ({ image, title, paragraph, rating, price,RenderRatingIcons }) => {
  return (
    <Col  xs={12} sm={6} md={3} lg={3} xl={3} className='mb-4'>
      <Card className="overflow-hidden jj">
        <div className="overflow-hidden">
          <Card.Img className='topper' variant="top" src={image} alt={title} />
        </div>

        <Card.Body>
          <div className='d-flex justify-content-between align-items-center '>
            <div className="item_rating">{RenderRatingIcons(rating)}</div>
            <div className="wishlist">
              <i className="bi bi-suit-heart"></i>
            </div>
          </div>

          <Card.Title>{title}</Card.Title>
          <Card.Text>{paragraph}</Card.Text>

          <div className="d-flex justify-content-between align-items-center">
            <div className="menu_price">
              <div className="mb-0 h5">Rs {price}</div>
            </div>
            <div className="add_to_cart">
              <Link className='a' to='/'>
                <i className="bi bi-cart-plus"></i> Add to Cart
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cards;
