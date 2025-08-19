import axios from "axios";
import { useEffect } from "react";
import useAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";


const instance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})


const useAxos = () => {
    const { SignOut } = useAuth();
    const navigate= useNavigate();

    useEffect(() => {
        instance.interceptors.response.use(response => {
            return response;
        }, error => {
            console.log("axos error", error);
            if (error.status === 401 || error.status === 403) {
                console.log('logOut')
                SignOut()
                    .then(() => {
                        console.log('logOut user')
                        navigate('/login')

                    })
                    .catch(error =>
                        console.log(error)
                    )
            }
        }
        )
    }, [])



    return instance;

};

export default useAxos;