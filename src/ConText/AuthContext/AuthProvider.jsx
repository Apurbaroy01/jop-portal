
import {  useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../Firebase/Firebase";



const AuthProvider = ({ children }) => {
    const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(true)


    const CreateUser =(email, password)=>{
        setLoading(true)
      return  createUserWithEmailAndPassword( auth, email, password)
    };

    useEffect(()=>{
        const unsubsribe= onAuthStateChanged(auth, currentUser=>{
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)

        });
        return ()=>{
            unsubsribe();
        };
    }, []);

    const signIn=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    const SignOut=()=>{
       return signOut(auth)
    }


    const authInfo = {
        CreateUser,
        signIn,
        SignOut,
        user,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;