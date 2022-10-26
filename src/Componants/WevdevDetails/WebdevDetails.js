import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
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
            <input className='submit-detail mt-5' type="submit" value="Get Premium Access" />
        </div>
    );
};

export default WebdevDetails;