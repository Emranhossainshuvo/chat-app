import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";



const Chats = () => {

    const [chats, setChats] = useState([]);

    const { currentUser } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                setChats(doc.data());
            });

            return () => {
                unsub();
            };
        };

        currentUser.uid && getChats();
    }, [currentUser.uid]);

    const handleSelect = (u) => {
        dispatch({ type: "CHANGE_USER", payload: u });
    };

    return (
        <div className="chats">
            {Object.entries(chats)?.map(chat=> (

                <div key={chat[0]} className="userchat p-3 flex items-center gap-10 cursor-pointer hover:bg-gray-600">
                <img className="w-[50px] h-[50px] rounded-[50%] object-cover" src={chat[1].userInfo.photoURL} alt="" />
                <div className="userChatinfo">
                    <span className="text-xl font-bold">{chat[1].userInfo.displayName}</span>
                    <p className="text-base text-gray-500">{chat[1].userInfo.lastMessage?.text}</p>
                </div>
            </div>
            ))}
        </div>
    );
};

export default Chats;