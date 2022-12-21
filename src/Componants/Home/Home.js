import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

// import Image from '../Home/Image.png';
// import Photo from '../Home/Photo.png';


const Home = () => {
    return (
        <Container className='bg-Warning'>
            <Row>
                <Col>
                    <h1 className='mt-5 text-dark '><b>LEARN THE LATEST </b></h1>
                    <h1 className='text-dark'><b> DIGITAL SKILLS FOR TOMORROW'S JOBS </b></h1>
                    <br></br>
                    <h5 className='text-primary'><b>THE FASTEST , MOST EFFECTIVE  TRAINING TO GET FUTURE-READY</b></h5>

                </Col>
                <Col className='mt-5'>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="img-fluid object-cover" style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                                src="https://img.freepik.com/free-photo/gorgeous-beautiful-clever-woman-eyeglasses-reading-interesting-book-looks-pensive_8353-6761.jpg?size=626&ext=jpg&ga=GA1.1.89839238.1664401225&semt=sph"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="img-fluid object-cover" style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                                src="https://img.freepik.com/free-photo/beautiful-young-woman-sitting-chair-reading-book_23-2147923091.jpg?size=626&ext=jpg&ga=GA1.1.89839238.1664401225&semt=sph"
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