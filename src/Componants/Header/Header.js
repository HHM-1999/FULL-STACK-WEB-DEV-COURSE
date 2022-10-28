import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



import { auth, AuthContext } from '../../Contexts/UserContext/Authprovider';


const Header = () => {

    const { user } = useContext(AuthContext);

    // console.log(user);
    const handleLogOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

            <Container>

                <Navbar.Brand className='fw-bold'> 📚  PRACTICE TO PERFECT</Navbar.Brand>
                <Navbar.Brand className='fw-bold' href="/home">Home </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                </Navbar.Collapse>
                <Navbar.Collapse>
                    <Nav >


                        {
                            user?.uid
                                ?
                                <div className='d-flex '>
                                    <Nav.Link href="/courses"> Web Development</Nav.Link>
                                    <Nav.Link href="/coursesdetail"> Web Dev Details </Nav.Link>
                                    <Nav.Link href="/blog" >BLOG</Nav.Link>
                                    <Nav.Link href="/blog" >FAQ</Nav.Link>
                                    <Nav.Link href="#">
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link >
                                        <OverlayTrigger
                                            placement="bottom"
                                            overlay={<Tooltip id="button-tooltip-2">{user.displayName}</Tooltip>}
                                        >
                                            <Image
                                                style={{
                                                    width: '30px',
                                                    height: '30px'
                                                }}

                                                roundedCircle
                                                src={user.photoURL}
                                            />
                                        </OverlayTrigger>
                                    </Nav.Link>

                                    <Nav.Link onClick={handleLogOut} href="/logout">Logout</Nav.Link>
                                    <Nav.Link href="/download" >Checkout</Nav.Link>
                                    {/* <Nav.Link
                                        className="navbar-toggler btn btn-primary"
                                        // type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                    >
                                        <span className="navbar-toggler-icon text-black">mood</span>
                                    </Nav.Link> */}
                                </div>
                                :
                                <div className='d-flex'>
                                    <Nav.Link href="/login">Login</Nav.Link>
                                    <Nav.Link href="/register">Register</Nav.Link>


                                </div>

                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;