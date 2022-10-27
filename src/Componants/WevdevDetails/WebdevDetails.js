import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './WebdevDetails.css';

const WebdevDetails = () => {
    return (
        <div>
            <Container className='mt-5'>
                <Row className='mx-5'>
                    <Col>
                        <h1>TITLE: </h1>
                        <h3>Description :</h3>
                        <p>Here</p>


                    </Col>
                    <Col>
                        <h2>hello</h2>
                    </Col>

                </Row>
            </Container>
            <Link to="/checkout" class="btn btn-primary mx-4 mt-5">Get Premium Acccess</Link>
        </div>
    );
};

export default WebdevDetails;