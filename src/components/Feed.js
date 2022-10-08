import React, {useState} from 'react';
import './Feed.css';
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import InputOption from "./InputOption";
import Post from "./Post";

function Feed(props) {
    const [posts, setPosts] = useState([]);

    const sendPost = (e) => {
        e.preventDefault();
        const message = e.target[0].value;
        if (message === "") return false;
        setPosts((prevState) => [...prevState, {
            id: posts.length + 1,
            name: "Mert Çetinok",
            description: "This is a test",
            message
        }])
        document.getElementById("feed__input__text").value = "";
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form onSubmit={sendPost}>
                        <input id="feed__input__text" type="text"/>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>
                </div>
            </div>

            {posts.map((post) => (
                <Post key={post.id} name={post.name} description={post.description} message={post.message}/>
            ))}

            <Post name="Mert Çetinok" description="This is a test" message="WOW this worked"/>

        </div>
    );
}

export default Feed;