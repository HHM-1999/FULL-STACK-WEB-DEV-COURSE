import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  >

            <Container>

                <Navbar.Brand className='fw-bold' href="/home"> 📚  PRACTICE TO PERFECT</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link href="/courses"> All Courses</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="/blog" >BLOG</Nav.Link>
                        <Nav.Link href="/faq">
                            FAQ
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;