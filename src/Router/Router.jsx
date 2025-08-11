import { createBrowserRouter } from "react-router-dom"
import MainLayoot from "../LayOut/MainLayoot";
import Home from "../Page/Home/Home";
import Register from "../Page/Register/Register";
import SignIn from "../Page/Register/SignIn";
import HotJobs from "../Page/Home/HotJobs";
import JobDetails from "../Page/JobDetails/JobDetails";
import PrivateRoute from "../Page/Route/PrivateRoute";
import JobApply from "../Page/JobApply/jobApply";
import MyApplication from "../Page/MyApplication/MyApplication";
import AddJob from "../Page/AddJob/AddJob";
import MyPodtJobs from "../Page/MypostJobs/MyPodtJobs";

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
                path:"job/:id",
                loader:({params})=> fetch(`http://localhost:5000/jobs/${params.id}`),
                element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>
            },
            {
                path:"jobApply/:id",
                element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
            },
            {
                path:"myApplication",
                element:<MyApplication></MyApplication>,
            },
            {
                path:"addJob",
                element:<AddJob></AddJob>
            },
            {
                path:"login",
                element:<SignIn></SignIn>
            },
            {
                path:"/",
                element:<HotJobs></HotJobs>
            },
            {
                path:"mypostjob",
                element:<MyPodtJobs></MyPodtJobs>
            },
        ]
    },
]);
export default router;
