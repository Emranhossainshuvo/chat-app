import { useContext, useEffect, useRef } from "react";
import "./messege.scss"
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {

    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const ref = useRef();

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

    return (
        <div className={`messege ${message.senderId === currentUser.uid && "owner"} owner mb-[20px] flex gap-[20px]`}>
            <div className="messageInfo flex flex-col text-gray-600 font-normal">
                <img className="w-[40px] h-[40px] rounded-[50%] object-cover" src={
                    message.senderId === currentUser.uid
                        ? currentUser.photoURL
                        : data.user.photoURL
                } alt="" />
                <span>Just now</span>
            </div>
            <div className="messageContent max-w-[80%] flex flex-col gap-2">
                <p className="bg-white p-5 rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-lg">{message.text}</p>
                {message.img && <img className="w-[50%]" src={message.img} alt="" />}
            </div>
        </div>
    );
};

export default Message;