import Message from "./Message";

const Messages = () => {
    return (
        <div className="messages bg-slate-300 p-[10px]" style={{height: "calc(100% - 100px)"}}>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
        </div>
    );
};

export default Messages;