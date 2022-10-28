import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext/Authprovider'



const Register = () => {
    const { createUser, updateUserInfo } = useContext(AuthContext);
    const handleSubmit = (e) => {


        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const name = form.name.value;
        const photo = form.photo.value;
        console.log(email, password, confirm);

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                form.reset();
                // update user name photo
                updateUserInfo(name, photo)
                    .then(() => {
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
                <form onSubmit={handleSubmit}>
                    <div className="controlling">
                        <label htmlFor="name">User Name</label>
                        <input type="text" name="name" required />
                    </div>
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
                        <input
                            placeholder="john.doe@example.org"
                            required
                            type="text"
                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                            id="photo"
                            name="photo"
                        />
                    </div>
                    <button className='submit-login' type="submit" value="Sign Up" >Sign Up</button>

                </form>
                <p className='text-center mt-4'>New Member ? <Link to='/login'>Login </Link></p>

            </div>
        </div>
    );
};

export default Register;