import React, { createContext } from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../Firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app);

const Authprovider = ({ children }) => {
    const user = { displayName: 'ali' }

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }
    const authInfo = { user, providerLogin }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );


};
export default Authprovider;