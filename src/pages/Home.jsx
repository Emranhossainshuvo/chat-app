import Chat from "../Components/Chat";
import Sidebar from "../Components/Sidebar";

const Home = () => {
    return (
        <div className='home bg-[#31473a] h-[100vh] flex items-center justify-center'>
            <div className="containerr overflow-hidden flex border-2 border-black rounded-md w-[65%] h-[80%]">
                <Sidebar />
                <Chat />
            </div>
        </div>
    );
};

export default Home;