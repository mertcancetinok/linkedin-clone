import React, {useEffect, useState} from 'react';
import './Feed.css';
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import InputOption from "./InputOption";
import Post from "./Post";
import {db} from "../firebase";
import {collection, addDoc, Timestamp, query, orderBy, onSnapshot} from 'firebase/firestore'

function Feed(props) {
    const [input, setInput] = useState("")
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'))
        onSnapshot(q, (querySnapshot) => {
            setPosts(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])


    const sendPost = async (e) => {
        e.preventDefault();

        if (input === "") return;

        await addDoc(collection(db, 'posts'), {
            name: 'Mert Can Çetinok',
            description: 'this is a test',
            message: input,
            photoUrl: '',
            timestamp: Timestamp.now()
        })

        setInput("")

    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form onSubmit={sendPost}>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
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

            {posts.map(({id, data: {name, message, description, photoUrl}}) => (
                <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl}/>
            ))}

        </div>
    );
}

export default Feed;