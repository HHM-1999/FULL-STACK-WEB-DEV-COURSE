import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Image from '../Home/Image.png';
import Photo from '../Home/Photo.png';

const Home = () => {
    return (
        <Container className='bg-Warning'>
            <Row>
                <Col>
                    <h1 className='mt-5 text-primary '>LEARN THE LATEST </h1>
                    <h1 className='text-success'> DIGITAL SKILLS FOR TOMORROW'S JOBS </h1>
                    <br></br>
                    <h5 className='text-warning'>THE FASTEST , MOST EFFECTIVE  TRAINING TO GET FUTURE-READY</h5>
                </Col>
                <Col className='mt-5'>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="img-fluid object-cover" style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                                src={Image}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="img-fluid object-cover" style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                                src={Photo}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                    </Carousel>

                </Col>
            </Row>


        </Container>
    );
};

export default Home;