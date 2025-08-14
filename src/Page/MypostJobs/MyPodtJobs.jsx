import { useEffect, useState } from "react";
import useAuth from "../../Hooks/UseAuth";
import { Link } from "react-router-dom";



const MyPodtJobs = () => {
    const [job, setJob] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setJob(data)
                console.log(data)
            })
            .catch(error => {
                console.log(error.message)
            })
    }, [user?.email])
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Job Title</th>
                        <th>DateLine</th>
                        <th>Count</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        job.map((job, index) =>
                            <tr key={job._id}>
                                <th>{index +1}</th>
                                <td>{job.title}</td>
                                <td>{job.date}</td>
                                <td>{job.applicationCount}</td>
                                <td>
                                    <Link to={`/viewApplications/${job._id}`}>
                                        <button className="btn btn-neutral btn-sm">View</button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MyPodtJobs;