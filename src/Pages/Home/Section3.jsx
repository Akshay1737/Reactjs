import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Image1 from '../../assets/food-assets/menu/burger-11.jpg';
import Image2 from '../../assets/food-assets/menu/burger-12.jpg';
import Image3 from '../../assets/food-assets/menu/burger-13.jpg';
import Image4 from '../../assets/food-assets/menu/burger-14.jpg';
import Image5 from '../../assets/food-assets/menu/burger-15.jpg';
import Image6 from '../../assets/food-assets/menu/burger-16.jpg';
import Image7 from '../../assets/food-assets/menu/burger-17.jpg';   
import Image8 from '../../assets/food-assets/menu/burger-18.jpg';
import Cards from '../../Components/Layouts/Cards.jsx';

// Mock Data Cards
const mockData = [
  {
    id: "0001",
    image: Image1,
    title: "Crispy Chicken",
    paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
    rating: 5,
    price: 99.15,
  },
  {
    id: "0002",
    image: Image2,
    title: "Ultimate Bacon",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 4.5,
    price: 99.32,
  },
  {
    id: "0003",
    image: Image3,
    title: "Black Sheep",
    paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
    rating: 4,
    price: 69.15,
  },
  {
    id: "0004",
    image: Image4,
    title: "Vegan Burger",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 3.5,
    price: 99.25,
  },
  {
    id: "0005",
    image: Image5,
    title: "Double Burger",
    paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
    rating: 3.0,
    price: 100.00,
  },
  {
    id: "0006",
    image: Image6,
    title: "Turkey Burger",
    paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 3,
    price: 79.18,
  },
  {
    id: "0007",
    image: Image7,
    title: "Smokey House",
    paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 2.5,
    price: 99.19,
  },
  {
    id: "0008",
    image: Image8,
    title: "Classic Burger",
    paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
    rating: 2.0,
    price: 89.12,
  },
  // Add more mock data objects as needed
];
//Rating logical Data
const RenderRatingIcons = (rating) => {
  const stars =[];
  for(let i=0;i<5;i++)
   if(rating>0.5){
     stars.push(<i key={i} className="bi bi-star-fill" ></i>);
     rating--;
   }else if(rating>0 && rating <1){
     stars.push(<i key={i} className="bi bi-star-half" ></i>);
     rating--;
   }else{
     stars.push(<i key={`empty${i}`} className="bi bi-star" ></i>);
   }
  return <div className="rating">{stars}</div>;
}

const Section3 = () => {

  return (
   <>
        <section className="menu_section">
            <Container>
                <Row>
                    <Col lg={{ span: 8, offset: 2 }} className='text-center mb-5' >
                        <h2>
                        OUR CRAZY BURGERS
                        </h2>
                        <p className='para'>
  Sink your teeth into our bold and flavorful burger creations — made fresh, loaded with toppings, and guaranteed to satisfy your cravings.
</p>

                    </Col>
                </Row>
                <Row>
                    {mockData.map((cardData,index) => (
                       
                       <Cards
                            key={index}
                             image={cardData.image}
                            rating={cardData.rating}
                            title={cardData.title}    
                            paragraph={cardData.paragraph}
                            price={cardData.price}
                            RenderRatingIcons={RenderRatingIcons}
                            
                       />
                    ))}
                </Row>
                <Row className='pt-5 ads '>
                    <Col sm={6} lg={5}> 
                        <div className='ads_box ads_img1 mb-5 mb-md-0'>
                            <h4 className='mb-0'>GET YOUR FREE</h4>
                            <h5>CHEESE FRIES </h5>
                            <Link to ='/' className='btn btn_red px-4 rounded-0'>
                                Claim Now
                            </Link>

                        </div>
                    </Col>
                    <Col  sm={6} lg={7}> 
                        <div className='ads_box ads_img2 '>
                            <h4 className='mb-0'>GET YOUR FREE</h4>
                            <h5>CHEESE FRIES </h5>
                            <Link to ='/' className='btn btn_red px-4 rounded-0'>
                                Claim Now
                            </Link>

                        </div>
                    </Col>

                </Row>
            </Container>
        
        </section>
   </>
  )
}

export default Section3