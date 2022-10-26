import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Categories from '../Categories/Categories';


const Courses = () => {


    return (
        <div className=' container mt-5'>
            <Row>
                <Col>
                    <Categories></Categories>
                </Col>

            </Row>
        </div>
    );
};

export default Courses;