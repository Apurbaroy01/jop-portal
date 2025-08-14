import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewApplicatons = () => {
    const appplications = useLoaderData()
    console.log(appplications);


    const handleStatusUpdate = (e, id) => {
        const data = {
            status: e.target.value,
        }
        console.log(data);
        fetch(`http://localhost:5000/job-applications/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            
        },[])
        .then(res => res.json())
        .then(data => {
            console.log(data); 
        })
        

       
        
    }

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appplications.map((appplications, index) =>
                            <tr key={appplications._id}>
                                <th>{index + 1}</th>
                                <td>{appplications.applicant_email}</td>
                                <td>{appplications.date}</td>
                                <td>Blue</td>
                                <td>
                                    <select
                                        onChange={(e)=>handleStatusUpdate(e, appplications._id)}
                                        defaultValue={appplications.status || "Change Status"} className="select select-xs">
                                        <option disabled={true}>Change Status</option>
                                        <option>Xsmall Apple</option>
                                        <option>Xsmall Orange</option>
                                        <option>Xsmall Tomato</option>
                                    </select>
                                </td>
                            </tr>
                        )
                    }


                </tbody>
            </table>
        </div>
    );
};

export default ViewApplicatons;