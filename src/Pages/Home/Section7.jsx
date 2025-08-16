import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Section7 = () => {
  return (
    <> 
      <section className="contact_section">
        <Container>
          <Row className='justify-content-center'>
            <Col className='text-center'>
              <h4>WE GUARANTEE</h4>
              <h2>30 Minutes Delivery!</h2>
              <p>
                Fresh, hot, and right to your doorstep — on time, every time.
              </p>
              <Link to="/" className="btn btn_red px-4 py-2 rounded-0">
                Call : 999-888-7777
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Section7
