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
        <Navbar collapseOnSelect expand="lg" className='bg-warning text-dark' >

            <Container>

                <Navbar.Brand className='fw-bold '> 📚 FULL STACK WEB DEVELOPMENT</Navbar.Brand>
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
                                    <Nav.Link href="/courses" className='text-dark'>Courses</Nav.Link>
                                    <Nav.Link href="/coursesdetail" className='text-dark'>Details </Nav.Link>
                                    <Nav.Link href="/blog" className='text-dark'>BLOG</Nav.Link>
                                    <Nav.Link href="/blog" className='text-dark' >FAQ</Nav.Link>
                                    <Nav.Link href="#" className='text-dark'>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                        </div>
                                    </Nav.Link>
                                    <Nav.Link className='text-dark'>
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

                                    <Nav.Link onClick={handleLogOut} href="/logout" className='text-dark'>Logout</Nav.Link>
                                    <Nav.Link href="/download" className='text-dark' >Checkout</Nav.Link>
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
                                <div className='d-flex text-dark'>
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