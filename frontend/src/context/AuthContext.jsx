import {createContext, useState, useContext} from "react";
import axios from "axios";


const AuthContext = createContext();

const backendURL = "https://smart-lms-pcx0.onrender.com/";

export const AuthProvider = ({children}) => {
        const [user, setUser] = useState(null);
        //login user
const login = async (email, password) => {
    try{
const {data} = await axios.post(backendURL + "/api/auth/login", {email, password});
console.log("token", data);

setUser(data);
localStorage.setItem("user", JSON.stringify(data));
    }catch(error){
        console.error("login failed", error);
    }
}

//logout

const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
}
        //register

        return <AuthContext.Provider value={{user, login, logout}}>
                    {children}
        </AuthContext.Provider>
        
}
export const useAuth = () => useContext(AuthContext);