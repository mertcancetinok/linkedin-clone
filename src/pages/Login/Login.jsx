import React, {useState} from 'react';
import logo from '../../logo.png';
import "./Login.css";
import {auth} from "../../firebase";
import { updateProfile,createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import {useDispatch} from "react-redux";
import {login} from "../../features/userSlice";


function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const register = async () => {
        if (!name)
            return alert("PLease enter full name!");

        await createUserWithEmailAndPassword(auth,email,password)
            .then(async (userAuth) => {
                await updateProfile(userAuth.user,{
                    displayName:name,
                    photoURL:profilePic
                }).then(() => {
                    dispatch(login({
                        email:userAuth.user.email,
                        uid:userAuth.user.uid,
                        displayName:name,
                        photoUrl:profilePic
                    }))
                })
            }).catch((error) => alert(error))
    }

    const loginToApp = async (e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(auth,email,password)
            .then((userAuth) => {
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:userAuth.user.displayName,
                    photoUrl:userAuth.user.photoURL
                }))
            })
            .catch((err) => alert(err))
    }

    return (
        <div className="login">
            <img src={logo} alt='linkedin'/>

            <form>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name (required if registering)" type="text"/>
                <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder="Profile pic URL (optional)" type="text"/>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email"/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password"/>
                <button onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member?
            <span className="login__register" onClick={register}>Register Now</span>
            </p>

        </div>
    );
}

export default Login;