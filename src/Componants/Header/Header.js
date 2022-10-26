import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
// import { IoMdDownload } from 'react-icons/io';


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
                </Navbar.Collapse>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="/blog" >BLOG</Nav.Link>
                        <Nav.Link href="/faq">
                            FAQ
                        </Nav.Link>
                        {
                            user?.uid
                                ?
                                <div className='d-flex'>
                                    <Nav.Link >{user?.displayName}</Nav.Link>
                                    <Nav.Link onClick={handleLogOut} href="/logout">Logout</Nav.Link>
                                </div>
                                :
                                <div className='d-flex'>
                                    <Nav.Link href="/login">Login</Nav.Link>
                                    <Nav.Link href="/register">Register</Nav.Link>

                                </div>

                        }


                        {/* <Nav.Link href="/download" ><IoMdDownload></IoMdDownload></Nav.Link> */}


                        {/* <Nav.Link eventkey={2} href="#" >{user?.photoURL ?
                            <Image style={{ height: '40px' }}
                                roundedCircle src={user.photoURL}></Image> : <FaUser></FaUser>}

                        </Nav.Link> */}




                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;