import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/UseAuth';

const MyApplication = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);
    // console.log(jobs)

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/job-applications?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setJobs(data);
                })
                .catch(err => {
                    console.error('Failed to fetch job applications:', err);
                });
        }
    }, [user?.email]); // ✅ now it waits for email to exist

    return (
        <div>
            <h2>My Applications: {jobs.length}</h2>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job._id} - {job.applicant_email}</li>
                ))}
            </ul>
        </div>
    );
};

export default MyApplication;
