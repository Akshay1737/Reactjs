import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import user1 from '../../assets/food-assets/blog/review-author-1.jpg'
import user2 from '../../assets/food-assets/blog/review-author-2.jpg'
import user3 from '../../assets/food-assets/blog/review-author-3.jpg'



const Section6 = () => {
  return (
    <>
     <section className="blog_section">
        <Container>
            <Row>
                <Carousel className='text-center'>
                    
                      <Carousel.Item>
                                <div className="user_img ">
                                            <img src={user1} alt="user-1" className='img-fluid' />
                                </div>
                              
                                <Carousel.Caption>
                                           <p>
                               " Lorem ipsum dolor sit amet consectetur adipisicing elit.lias amet recusandae natus omnis atque animi, iure delectus eveniet? Natus nobis accusantium adipisci culpa voluptatibus ab! Similique maxime velit architecto voluptatibus provident."
                            </p>
                            <div className="item_rating mb-2" >
                                <i className='star bi bi-star-fill' style={{ color: 'yellow' }}></i>
                                <i className='star bi bi-star-fill' style={{ color: 'yellow' }}></i>
                                <i className='star bi bi-star-fill' style={{ color: 'yellow' }}></i>
                               
                                <i className=' star bi bi-star' style={{ color: 'yellow' }}></i>
                                <i className=' star bi bi-star' style={{ color: 'yellow' }}></i>
                            </div>
                            <h5>
                                Lorem ipsum dolor sit amet.
                            </h5>
                                </Carousel.Caption>
                        </Carousel.Item>
                      <Carousel.Item>
                                <div className="user_img">
                                            <img src={user2} alt="user-1" className='img-fluid' />
                                </div>
                              
                                <Carousel.Caption>
                                           <p>
                               " Lorem ipsum dolor sit amet consectetur adipisicing elit.lias amet recusandae natus omnis atque animi, iure delectus eveniet? Natus nobis accusantium adipisci culpa voluptatibus ab! Similique maxime velit architecto voluptatibus provident."
                            </p>
                            <div className="item_rating mb-2" >
                                <i className='star bi bi-star-fill' style={{ color: 'yellow' }}></i>
                                <i className='star bi bi-star-fill' style={{ color: 'yellow' }}></i>
                                
                           
                                <i className=' star bi bi-star' style={{ color: 'yellow' }}></i>
                                <i className=' star bi bi-star' style={{ color: 'yellow' }}></i>
                                <i className=' star bi bi-star' style={{ color: 'yellow' }}></i>
                            </div>
                            <h5>
                                Lorem ipsum dolor sit amet.
                            </h5>
                                </Carousel.Caption>
                        </Carousel.Item>
                      <Carousel.Item>
                                <div className="user_img">
                                            <img src={user3} alt="user-1" className='img-fluid' />
                                </div>
                              
                                <Carousel.Caption>
                                           <p>
                               " Lorem ipsum dolor sit amet consectetur adipisicing elit.lias amet recusandae natus omnis atque animi, iure delectus eveniet? Natus nobis accusantium adipisci culpa voluptatibus ab! Similique maxime velit architecto voluptatibus provident."
                            </p>
                            <div className="item_rating mb-2" >
                               <i className='star bi bi-star-fill' style={{ color: 'yellow' }}></i>
                                <i className='star bi bi-star-fill' style={{ color: 'yellow' }}></i>
                                <i className='star bi bi-star-fill' style={{ color: 'yellow' }}></i>
                                <i className='star bi bi-star-fill' style={{ color: 'yellow' }}></i>
                           
                                <i className=' star bi bi-star' style={{ color: 'yellow' }}></i>
                            </div>
                            <h5>
                                Lorem ipsum dolor sit amet.
                            </h5>
                                </Carousel.Caption>
                        </Carousel.Item>
                    
                     
                </Carousel>
            </Row>
        </Container>
    </section>
    
    </>
  )
}

export default Section6;