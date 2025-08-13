import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewApplicatons = () => {
    const appplications =useLoaderData()
    return (
        <div>
            <h2>Application {appplications.length}</h2>
        </div>
    );
};

export default ViewApplicatons;