import "./messege.scss"

const Message = () => {
    return (
        <div className="messege owner mb-[20px] flex gap-[20px]">
            <div className="messageInfo flex flex-col text-gray-600 font-normal">
                <img className="w-[40px] h-[40px] rounded-[50%] object-cover" src="https://i.ibb.co/tCKkPkt/2147956506.jpg" alt="" />
                <span>Just now</span>
            </div>
            <div className="messageContent max-w-[80%] flex flex-col gap-2">
                <p className="bg-white p-5 rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-lg">Hello</p>
                {/* <img className="w-[50%]" src="https://i.ibb.co/tCKkPkt/2147956506.jpg" alt="" /> */}
            </div>
        </div>
    );
};

export default Message;