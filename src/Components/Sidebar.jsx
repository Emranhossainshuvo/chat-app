import Chats from "./Chats";
import Navbar from "./Navbar";
import Search from "./Search";

const Sidebar = () => {
    return (
        <div className="flex-1  bg-[#c4dfe6]">
                <Navbar />
                <Search />
                <Chats />
        </div>
    );
};

export default Sidebar;