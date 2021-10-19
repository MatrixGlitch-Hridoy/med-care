import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";
import { useHistory } from "react-router-dom";
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const history = useHistory();

    //Sign In Using Google
    const signInUsingGoogle = ()=>{
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    //Register Using Email and Password
    const signUpWithEmailAndPassword = (email,password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //Login in using email and password
    const signInWithEmailPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email , password)
        .then(res => {
            setUser(res.user);
            history.push('/');
        }).catch(err => console.log(err.message))
    }

    // Logout
    const logOut = () =>{
        signOut(auth)
        .then(()=>{
            setUser({});
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user)
            }
            setIsLoading(false)
        })
    },[])

    return {
        user,
        setUser,
        isLoading,
        setIsLoading,
        signInUsingGoogle,
        signUpWithEmailAndPassword,
        signInWithEmailPassword,
        logOut  
    }

}

export default useFirebase;