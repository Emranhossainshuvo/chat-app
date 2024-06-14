import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {

    const {currentUser} = useContext(AuthContext); 

    return (
        <div className="flex navbar items-center bg-[#2e2d54] h-[50px] p-3 justify-between text-white">
            <span className="tracking-tighter hidden md:block font-bold">
                Talks chat
            </span>
            <div className="flex gap-10">
                <img className="bg-white h-6 w-6 rounded-[50%] object-cover" src={currentUser.photoURL} alt="" />
                <span>{currentUser.displayName}</span>
                <button onClick={() => signOut(auth)} className="bg-purple-800 text-gray-200 text-xs rounded-md border-none p-2">Log out</button>
            </div>
        </div>
    );
};

export default Navbar;