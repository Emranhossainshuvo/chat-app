import { useContext, useState } from "react";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Search = () => {

    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [err, setErr] = useState(false);

    const {currentUser} = useContext(AuthContext);

    const handleForm = (e) => {
        console.log(e)
    }

    const handleSearch = async () => {
        const q = query(
            collection(db, "users"),
            where("displayName", "==", username)
        );

        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data());
            });
        } catch (err) {
            setErr(true);
        }
    };

    const handleKey = (e) => {
        e.code === "Enter" && handleSearch();
        // console.log(e.target.value)
    };

    const handleSelect = async () => {

        const combinedId = currentUser.uid > user.uid ?
         currentUser.uid + user.uid
        : user.uid + currentUser.uid;

        try{
            const res = getDocs(db, "chats", combinedId )
            if(!res.exists()){
                await setDoc(doc, (db, "chats", combinedId), {messages: []})
            }
        }
        catch (err) {console.log(err)}
        
    }


    return (
        <div className="border-b-2 searchhh border-gray-400">
            <div className="serchform">
                <input
                    onSubmit={handleForm}
                    onKeyDown={handleKey}
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-transparent border-none text-white outline-none" placeholder="Find a user"
                    type="text" />
            </div>
            {err && <span>User not found</span>}
            {user && (
                <div className="userchat p-3 flex items-center gap-10 cursor-pointer hover:bg-gray-600" onClick={handleSelect}>
                    <img className="w-[50px] h-[50px] rounded-[50%] object-cover" src={user?.photoURL} alt="" />
                    <div>
                        <span>{user?.displayName}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Search;