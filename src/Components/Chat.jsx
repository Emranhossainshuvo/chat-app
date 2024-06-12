import Input from "./Input";
import Messages from "./Messages";

const Chat = () => {
    return (
        <div className="chat " style={{flex: 2}}>
            <div className="chatInfo justify-between p-[10px] text-gray-400 flex h-[50px] bg-[#5d597f] items-center">
                <span>Jane</span>
                <div className="chatIcons flex gap-5">
                    <img className="h-[24px] cursor-pointer" src="https://i.ibb.co/WHPJQvB/icons8-video-camera-24-1.png" alt="" />
                    <img className="h-[24px] cursor-pointer" src="https://i.ibb.co/m54zN7r/icons8-add-friend-24.png" alt="" />
                    <img className="h-[24px] cursor-pointer" src="https://i.ibb.co/3Fwy3h4/icons8-more-24.png" alt="" />
                </div>
            </div>
                <Messages />
                <Input />
        </div>
    );
};

export default Chat;