import "./App.css";
import Header from "./components/Header";
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "./features/userSlice";
import Login from "./pages/Login/Login";
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from './firebase';
import {useEffect} from "react";
import Home from "./pages/Home/Home";

function App() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    useEffect(() => {
        onAuthStateChanged(auth,(userAuth) => {
            if (userAuth){
                dispatch(login({
                    email:userAuth.email,
                    uid:userAuth.uid,
                    displayName:userAuth.displayName,
                    photoUrl:userAuth.photoURL
                }))
            }else {
                dispatch(logout())
            }
        })
    },[])

    return (
        <div className="App">
            <Header/>
            {!user ? (<Login/>) : (
                <div className="app__body">
                    <Home/>
                </div>
            )}
        </div>
    );
}

export default App;
