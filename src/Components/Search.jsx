import { useContext, useState } from "react";
import { collection,  doc,  getDoc,  getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Search = () => {

    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [err, setErr] = useState(false);
  
    const { currentUser } = useContext(AuthContext);
  
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
    };
  
    const handleSelect = async () => {
      //check whether the group(chats in firestore) exists, if not create
      const combinedId =
        currentUser.uid > user.uid
          ? currentUser.uid + user.uid
          : user.uid + currentUser.uid;
      try {
        const res = await getDoc(doc(db, "chats", combinedId));
  
        if (!res.exists()) {
          //create a chat in chats collection
          await setDoc(doc(db, "chats", combinedId), { messages: [] });
  
          //create user chats
          await updateDoc(doc(db, "userChats", currentUser.uid), {
            [combinedId + ".userInfo"]: {
              uid: user.uid,
              displayName: user.displayName,
              photoURL: user.photoURL,
            },
            [combinedId + ".date"]: serverTimestamp(),
          });
  
          await updateDoc(doc(db, "userChats", user.uid), {
            [combinedId + ".userInfo"]: {
              uid: currentUser.uid,
              displayName: currentUser.displayName,
              photoURL: currentUser.photoURL,
            },
            [combinedId + ".date"]: serverTimestamp(),
          });
        }
      } catch (err) {}
  
      setUser(null);
      setUsername("")
    };


    return (
        <div className="border-b-2 searchhh border-gray-400">
            <div className="serchform">
                <input
                    onKeyDown={handleKey}
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-transparent border-none text-white outline-none" placeholder="Find a user"
                    type="text" 
                    value={username}
                    />
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