import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { auth } from "../firebase";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        const unSub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            console.log(user)
        })

        return () => {
            unSub();
        }
    }, []);

    return (


        <ChatContext.Provider value={{ currentUser }}>
            {children}
        </ChatContext.Provider>
    )
};

