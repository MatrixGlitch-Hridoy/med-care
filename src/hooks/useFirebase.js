import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged,updateProfile, signOut, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";
import { useHistory } from "react-router-dom";
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const history = useHistory();

    //Sign In Using Google
    const signInUsingGoogle = ()=>{
        return signInWithPopup(auth, googleProvider)
        // .then(res => {
        //     setUser(res.user);
        //     history.push('/');
        // }).catch(err => console.log(err.message))
    }

    //Register Using Email and Password
    const signUpWithEmailAndPassword = (username, email,password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            setUser(res.user)
            console.log(res.user);
            updateProfile(auth.currentUser, {
                displayName: username,
            }).then(() => {
                history.push('/');
            })

        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
          })
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
        })
    },[])

    return {
        user,
        signInUsingGoogle,
        signUpWithEmailAndPassword,
        signInWithEmailPassword,
        logOut  
    }

}

export default useFirebase;