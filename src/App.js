import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";
import Login from "./pages/Login/Login";

function App() {
    const user = useSelector(selectUser)
    return (
        <div className="App">
            <Header/>
            {!user ? (<Login/>) : (
                <div className="app__body">
                    <Sidebar/>
                    <Feed/>
                </div>
            )}
        </div>
    );
}

export default App;
