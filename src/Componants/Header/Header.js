import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoMdDownload } from 'react-icons/io';


import { auth, AuthContext } from '../../Contexts/UserContext/Authprovider';


const Header = () => {

    const { user } = useContext(AuthContext);

    console.log(user);
    const handleLogOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }








    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  >

            <Container>

                <Navbar.Brand className='fw-bold' href="/home"> 📚  PRACTICE TO PERFECT</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                </Navbar.Collapse>
                <Navbar.Collapse>
                    <Nav>


                        {
                            user?.uid
                                ?
                                <div className='d-flex '>
                                    <Nav.Link href="/courses"> Web Development</Nav.Link>
                                    <Nav.Link href="/coursesdetail"> Web Dev Details </Nav.Link>
                                    <Nav.Link href="/blog" >BLOG</Nav.Link>
                                    <Nav.Link >{user?.displayName}</Nav.Link>
                                    <Nav.Link >{user?.p}</Nav.Link>

                                    <Nav.Link onClick={handleLogOut} href="/logout">Logout</Nav.Link>
                                    <Nav.Link href="/download" ><IoMdDownload></IoMdDownload></Nav.Link>
                                    <Nav.Link href="/download" >Checkout</Nav.Link>
                                </div>
                                :
                                <div className='d-flex'>
                                    <Nav.Link href="/login">Login</Nav.Link>
                                    <Nav.Link href="/register">Register</Nav.Link>
                                    <Nav.Link href="/faq">
                                        FAQ
                                    </Nav.Link>

                                </div>

                        }








                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;