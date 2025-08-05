import { useContext } from "react"
import AuthContext from "../ConText/AuthContext/AuthContext"

const useAuth =()=>{
    const conText= useContext(AuthContext);
    return conText;
}
export default useAuth;