import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {currentUser} = useContext(AuthContext); 

    if(currentUser){
        return children;
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;