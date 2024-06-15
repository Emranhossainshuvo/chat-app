import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {
    arrayUnion,
    doc,
    serverTimestamp,
    Timestamp,
    updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Input = () => {

    const [text, setText] = useState("");
    const [img, setImg] = useState(null);

    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const handleSend = async () => {
        if (img) {
            const storageRef = ref(storage, uuid());

            const uploadTask = uploadBytesResumable(storageRef, img);

            uploadTask.on(
                (error) => {
                    //TODO:Handle Error
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateDoc(doc(db, "chats", data.chatId), {
                            messages: arrayUnion({
                                id: uuid(),
                                text,
                                senderId: currentUser.uid,
                                date: Timestamp.now(),
                                img: downloadURL,
                            }),
                        });
                    });
                }
            );
        } else {
            await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    date: Timestamp.now(),
                }),
            });
        }

        await updateDoc(doc(db, "userChats", currentUser.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", data.user.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId + ".date"]: serverTimestamp(),
        });

        setText("");
        setImg(null);
    };

    return (
        <div className="input h-[50px] flex items-center justify-between bg-white p-2">
            <input type="text"
                className="w-[100%]
              outline-none
               text-purple-900
                text-lg
                 border-none"
                name=""
                onChange={(e) => setText(e.target.value)}
                value={text}
                placeholder="Type something..."
                id=""
            />
            <div className="send flex items-center">
                <img src={Attach} alt="" />
                <input
                    type="file"
                    name=""
                    id="file"
                    onChange={(e) => setImg(e.target.files[0])}
                    style={{ display: "none" }}
                />
                <label htmlFor="file">
                    <img className="h-[24px] cursor-pointer w-[35px]" src="https://i.ibb.co/Yb1GxFc/icons8-image-30.png" alt="" />
                </label>
                <button onClick={handleSend} className="border-none px-[10px] py-[7px] text-white bg-sky-700 rounded-sm ms-2">Send</button>

            </div>
        </div>
    );
};

export default Input;