import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../firebase";

    
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
          <div className="userchat p-3 flex items-center gap-10 cursor-pointer hover:bg-gray-600">
                <img className="w-[50px] h-[50px] rounded-[50%] object-cover" src="https://i.ibb.co/DQR0TGc/126.jpg" alt="" />
                <div className="userChatinfo">
                    <span className="text-xl font-bold">Jane</span>
                    <p className="text-base text-gray-500">Hello</p>
                </div>
            </div>
            <div className="userchat p-3 flex items-center gap-10 cursor-pointer hover:bg-gray-600">
                <img className="w-[50px] h-[50px] rounded-[50%] object-cover" src="https://i.ibb.co/DQR0TGc/126.jpg" alt="" />
                <div className="userChatinfo">
                    <span className="text-xl font-bold">Jane</span>
                    <p className="text-base text-gray-500">Hello</p>
                </div>
            </div>
            <div className="userchat p-3 flex items-center gap-10 cursor-pointer hover:bg-gray-600">
                <img className="w-[50px] h-[50px] rounded-[50%] object-cover" src="https://i.ibb.co/DQR0TGc/126.jpg" alt="" />
                <div className="userChatinfo">
                    <span className="text-xl font-bold">Jane</span>
                    <p className="text-base text-gray-500">Hello</p>
                </div>
            </div>
            <div className="userchat p-3 flex items-center gap-10 cursor-pointer hover:bg-gray-600">
                <img className="w-[50px] h-[50px] rounded-[50%] object-cover" src="https://i.ibb.co/DQR0TGc/126.jpg" alt="" />
                <div className="userChatinfo">
                    <span className="text-xl font-bold">Jane</span>
                    <p className="text-base text-gray-500">Hello</p>
                </div>
            </div>  
        </div>
    );
};

export default Chats;