import { createBrowserRouter } from "react-router-dom"
import MainLayoot from "../LayOut/MainLayoot";
import Home from "../Page/Home/Home";
import Register from "../Page/Register/Register";
import SignIn from "../Page/Register/SignIn";
import HotJobs from "../Page/Home/HotJobs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayoot></MainLayoot>,
        errorElement:<h2>Rout Not Font</h2>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"register",
                element:<Register></Register>
            },
            {
                path:"login",
                element:<SignIn></SignIn>
            },
            {
                path:"hotjobs",
                element:<HotJobs></HotJobs>
            },
        ]
    },
]);
export default router;
