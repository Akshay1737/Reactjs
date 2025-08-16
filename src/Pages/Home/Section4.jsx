import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import PromotionImage from '../../assets/food-assets/promotion/pro.png';

const Section4 = () => {
  return (
    <>
     <section className="Promotion_section">
        <Container>
            <Row className='align-items-center'>
                <Col lg={6} className='text-center mb-5-lg-0'>
                    <img src={PromotionImage} alt="Delicious burger promotion" className='img-fluid' />
                </Col>
                <Col lg={6} className='px-5'>
                     <h2>Nothing brings people together like a good burger</h2>
                     <p>
                        Our burgers aren’t just food — they’re a reason to gather, laugh, and make memories. 
                        Freshly grilled patties, melting cheese, and bold flavors come together to create 
                        the ultimate comfort bite.
                     </p>
                     <ul>
                        <li>
                            <p>
                                Juicy patties made from premium cuts, grilled to perfection for unbeatable taste.
                            </p>
                        </li>
                        <li>
                            <p>
                                Fresh toppings, artisan buns, and our signature sauces for that extra kick.
                            </p>
                        </li>
                        <li>
                            <p>
                                A menu crafted to bring smiles — from classic favorites to bold, new creations.
                            </p>
                        </li>
                     </ul>
                </Col>
            </Row>
        </Container>
     </section>

     {/* BG parallax */}
     <section className='bg_parallax_scroll'>
       
     </section>
    </>
  )
}

export default Section4;
