import React, { useState } from 'react';
import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,

    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";

function App() {
    // const { providerLogin } = useContext(AuthContext);

    // const googleProvider = new GoogleAuthProvider()

    // const handleGoogleSignIn = () => {
    //     providerLogin(googleProvider)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //         })
    //         .catch(error => console.error(error))
    // }

    const [justifyActive, setJustifyActive] = useState('tab1');;

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };

    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

            <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                        Login
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                        Register
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>

                <MDBTabsPane show={justifyActive === 'tab1'}>

                    <div className='text-center'>
                        <p>Sign in with: <br></br></p>





                        <ButtonGroup horizontal className='mb-3 d-flex justify-content-between'>
                            <Button variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                            <Button variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button>
                        </ButtonGroup>


                        <p className="text-center mt-3">or:</p>
                    </div>

                    <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' required />
                    <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' required />

                    <div className="d-flex justify-content-between mx-4 mb-4">
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                        <a href="!#">Forgot password?</a>
                    </div>

                    <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
                    <p className="text-center">Not a member? <a href="#!">Register</a></p>

                </MDBTabsPane>

                <MDBTabsPane show={justifyActive === 'tab2'}>

                    <div className="text-center mb-3">
                        <p>Sign up with:</p>

                        <ButtonGroup horizontal className='mb-3 d-flex justify-content-between'>
                            <Button variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                            <Button variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button>
                        </ButtonGroup>

                        <p className="text-center mt-3">or:</p>
                    </div>

                    <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' />
                    <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text' />
                    <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' />
                    <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' />


                    <div className='d-flex justify-content-center mb-4'>
                        <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
                    </div>

                    <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>

                </MDBTabsPane>

            </MDBTabsContent>

        </MDBContainer>
    );
}

export default App;