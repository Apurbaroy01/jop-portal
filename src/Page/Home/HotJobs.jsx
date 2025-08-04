import React, { useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';

const HotJobs = () => {
    const [jobs, setJobs]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res=>res.json())
        .then(data=>{
        
            setJobs(data)
        })
    },[])
    return (
        <div className='grid grid-cols-3 gap-10'>
            {
                jobs.map(data=><HotJobCard data={data} key={data._id}></HotJobCard>)
            }
        </div>
    );
};

export default HotJobs;