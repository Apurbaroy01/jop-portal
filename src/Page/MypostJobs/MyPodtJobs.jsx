import { useEffect, useState } from "react";
import useAuth from "../../Hooks/UseAuth";



const MyPodtJobs = () => {
    const [job, setJob] = useState([]);
    const {user}=useAuth();

    useEffect(()=>{
        fetch(`http://localhost:5000/jobs?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setJob(data)
            console.log(data)
        })
        .catch(error=>{
            console.log(error.message)
        })
    },[user?.email])
    return (
        <div>
            <h2> my post jobs {job.length}</h2>
        </div>
    );
};

export default MyPodtJobs;