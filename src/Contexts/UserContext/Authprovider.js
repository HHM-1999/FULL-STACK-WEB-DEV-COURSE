import React, { createContext, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import app from '../../Firebase/firebase.config'
import { useEffect } from 'react';

export const AuthContext = createContext();
export const auth = getAuth(app);

const Authprovider = ({ children }) => {


    // const createUser = (email, password) => {
    //     setLoading(true);
    //     return createUserWithEmailAndPassword(auth, email, password);
    // }
    const [user, setUser] = useState(null);
    ///GOOGLE///
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (recentUser) => {
            console.log('user inside changed', recentUser);
            setUser(recentUser);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    //   Github 
    const githubSignIn = (provider) => {
        return signInWithPopup(auth, provider);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (recentUser) => {
            console.log('user inside changed', recentUser);
            setUser(recentUser);
        });
        return () => {
            unsubscribe();
        }
    }, [])



    const authInfo = { user, providerLogin, githubSignIn }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );


};
export default Authprovider;