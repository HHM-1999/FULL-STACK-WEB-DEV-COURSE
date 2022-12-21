import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from 'react-icons/fa'
import { auth, AuthContext } from '../../Contexts/UserContext/Authprovider';
import { GoogleAuthProvider, GithubAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import AuthProvider from '../../Contexts/UserContext/Authprovider';


const Login = () => {
    // const location = useLocation();
    // const from = location.state?.from?.pathname || '/';



    const { providerLogin, githubSignIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    //email and password
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // console.log("IN2")
                // Signed in 
                const user = userCredential.user;
                console.log({ x: user });
                // ...
            })
            .catch((error) => {
                // console.log("Y")
                // const errorCode = error.code;
                // const errorMessage = error.message;
            });

    }

    //////google Sign in
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                // const user = result.user;
                // console.log(user);
            })
            .catch(error => console.error(error)
            )


    }

    ////Github Sign in
    const handleGithubSignIn = () => {
        githubSignIn(githubProvider)
            .then((result) => {
                // const user = result.user;
                // console.log(user);
            }).catch((error) => {
                console.log(error);
            });
    }
    return (
        <div>
            <div className='form'>
                <h1 className='title-name text-primary text-center mt-5'>Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="controlling">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" required />
                    </div>
                    <div className="controlling">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" required />

                    </div>

                    <button className='submit-login mt-4' type="submit" value="LOGIN" >LOGIN</button>
                </form>
                <p className='text-center mt-4'>New Member ? <Link to='/register'>Register </Link></p>
                <p className='text-center mt-4'>Sign in with:</p>
                <div className='d-flex justify-content-between'>
                    <Link onClick={handleGoogleSignIn}><FcGoogle className='mb-5 mx-5'></FcGoogle></Link>
                    <Link onClick={handleGithubSignIn}><FaGithub className='mb-5 mx-5 '></FaGithub></Link>
                </div>

            </div>
        </div>
    );
};

export default Login;