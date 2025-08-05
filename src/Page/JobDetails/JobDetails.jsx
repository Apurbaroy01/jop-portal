import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
  const loadingJob = useLoaderData();
  const {_id, title, company, deadline, location, salary, description } = loadingJob;

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-lg text-gray-600 mb-2"><span className="font-semibold">Company:</span> {company}</p>
        <p className="text-md text-gray-600 mb-2"><span className="font-semibold">Location:</span> {location || "Remote"}</p>
        <p className="text-md text-gray-600 mb-2"><span className="font-semibold">Salary:</span> {salary || "Negotiable"}</p>
        <p className="text-md text-gray-600 mb-4"><span className="font-semibold">Deadline:</span> {deadline || "Negotiable"}</p>

        <div className="border-t pt-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Job Description</h3>
          <p className="text-gray-700 leading-relaxed">
            {description || "No description provided."}
          </p>
        </div>

        <div className="mt-8 text-right">
          <Link to={`/jobApply/${_id}`}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition duration-200">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
