import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoMdDownload } from 'react-icons/io';


// import { AuthContext } from '../../Contexts/UserContext/Authprovider';


const Header = () => {
    // const { user } = useContext(AuthContext)



    // start Download Pdf




    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  >

            <Container>

                <Navbar.Brand className='fw-bold' href="/home"> 📚  PRACTICE TO PERFECT</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link href="/courses"> Web Development</Nav.Link>
                        <Nav.Link href="/coursesdetail"> Web Dev Details </Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="/blog" >BLOG</Nav.Link>
                        <Nav.Link href="/faq">
                            FAQ
                        </Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                        <Nav.Link href="/download" ><IoMdDownload></IoMdDownload></Nav.Link>
                        <Nav.Link href="/dark" >🌙</Nav.Link>

                        {/* <Nav.Link href="#display">{user?.displayName}</Nav.Link> */}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;