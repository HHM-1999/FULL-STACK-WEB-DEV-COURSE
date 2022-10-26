import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from 'react-icons/fa'
import { AuthContext } from '../../Contexts/UserContext/Authprovider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error)
            )


    }
    return (
        <div>
            <div className='form'>
                <h1 className='title-name text-primary text-center mt-5'>Login</h1>
                <form >
                    <div className="controlling">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" required />
                    </div>
                    <div className="controlling">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" required />
                    </div>
                    <input className='submit-login mt-4' type="submit" value="LOGIN" />
                </form>
                <p className='text-center mt-4'>New Member ? <Link to='/register'>Register </Link></p>
                <p className='text-center mt-4'>Sign in with:</p>
                <div className='d-flex justify-content-between'>
                    <Link onClick={handleGoogleSignIn}><FcGoogle className='mb-5 mx-5'></FcGoogle></Link>
                    <Link><FaGithub className='mb-5 mx-5 '></FaGithub></Link>
                </div>

            </div>
        </div>
    );
};

export default Login;