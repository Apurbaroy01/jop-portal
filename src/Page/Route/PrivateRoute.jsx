import { useContext } from 'react';
import AuthContext from '../../ConText/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children }) => {
    const {user, loading}=useContext(AuthContext)
    const location=useLocation();
    console.log(location)
    if(user){
        return children ;
    }
    if(loading){
       return <span className="loading loading-spinner loading-xl"></span>
    }

    return (
        <div>
            <Navigate to="/login" state={location?.pathname}></Navigate>
        </div>
    );
};

export default PrivateRoute;