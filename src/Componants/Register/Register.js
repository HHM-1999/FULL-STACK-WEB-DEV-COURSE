import React from 'react';
import { Link } from 'react-router-dom';


const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                form.reset();
                // update user name photo
                updateUserInfo(name, photo).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {

                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div>
            <div className='form'>
                <h1 className=' text-primary text-center mt-5'>Register</h1>
                <form onSubmit={handleRegister} >
                    <div className="controlling">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" required />
                    </div>
                    <div className="controlling">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" required />
                    </div>
                    <div className="controlling">
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name="confirm" required />
                    </div>
                    <div className="controlling">
                        <label htmlFor="photo">Upload Photo</label>
                        <input type="jpg" name="photo" required />
                    </div>
                    <input className='submit-login' type="submit" value="Sign Up" />

                </form>
                <p className='text-center mt-4'>New Member ? <Link to='/login'>Login </Link></p>
            </div>
        </div>
    );
};

export default Register;