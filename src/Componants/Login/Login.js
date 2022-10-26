import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


const Login = () => {
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
                    <input className='submit mt-4' type="submit" value="LOGIN" />
                </form>
                <p className='text-center mt-4'>New Member ? <Link to='/register'>Register </Link></p>
            </div>
        </div>
    );
};

export default Login;