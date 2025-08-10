import React from 'react';

const AddJob = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const company = form.companyName.value;
        const title = form.jobTitle.value;
        const location = form.jobLocation.value;
        const company_logo = form.companyUrl.value;
        const jobType = form.jobType.value;
        const category = form.jobField.value;
        const currency = form.currency.value;
        const min = form.salaryMin.value;
        const max = form.salaryMax.value;
        const hrEmail = form.hrEmail.value;

        const requirementsArray = form.requirements.value
            .split("\n")
            .map(item => item.trim())
            .filter(item => item);

        const responsibilitiesArray = form.responsibilities.value
            .split("\n")
            .map(item => item.trim())
            .filter(item => item);

        const salaryRange = { min, max, currency };

        const data = {
            company,
            title,
            location,
            hrEmail,
            company_logo,
            jobType,
            category,
            salaryRange,
            requirements: requirementsArray,
            responsibilities: responsibilitiesArray
        };

        console.log(data);

        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
    };

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 flex justify-center items-center p-6">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-4xl border border-gray-200"
            >
                <h2 className="text-4xl font-bold mb-10 text-indigo-700 text-center tracking-tight">
                    🚀 Add New Job
                </h2>

                <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { label: "Company Name", name: "companyName", placeholder: "Company name" },
                        { label: "Job Title", name: "jobTitle", placeholder: "Job title" },
                        { label: "Job Location", name: "jobLocation", placeholder: "Job location" },
                        { label: "HR Email", name: "hrEmail", placeholder: "HR email" },
                        { label: "Company URL", name: "companyUrl", placeholder: "Company website" },
                    ].map((field, idx) => (
                        <div key={idx}>
                            <label className="block font-semibold text-gray-700 mb-1">{field.label}</label>
                            <input
                                type="text"
                                name={field.name}
                                placeholder={field.placeholder}
                                className="input input-bordered w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 transition"
                            />
                        </div>
                    ))}

                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">Job Type</label>
                        <select name="jobType" className="select select-bordered w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200">
                            <option value="">Select job type</option>
                            <option>Full-Time</option>
                            <option>Intern</option>
                            <option>Part-Time</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">Job Field</label>
                        <select name="jobField" className="select select-bordered w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200">
                            <option value="">Select job field</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>Thinking</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">Currency</label>
                        <select name="currency" className="select select-bordered w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200">
                            <option value="">Select currency</option>
                            <option>USD</option>
                            <option>BDT</option>
                            <option>EUR</option>
                        </select>
                    </div>

                    <div className="w-full">
                        <label className="block font-semibold text-gray-700 mb-1">Salary Range</label>
                        <div className="flex flex-col md:flex-row gap-4 w-full">
                            <input
                                type="text"
                                name="salaryMin"
                                placeholder="Min"
                                className="input input-bordered w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                            />
                            <input
                                type="text"
                                name="salaryMax"
                                placeholder="Max"
                                className="input input-bordered w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                            />
                        </div>
                    </div>




                    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block font-semibold text-gray-700 mb-1">Job Requirements</label>
                            <textarea
                                name="requirements"
                                className="textarea textarea-bordered w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                                placeholder="Write each requirement on a new line"
                            ></textarea>
                        </div>

                        <div>
                            <label className="block font-semibold text-gray-700 mb-1">Responsibilities</label>
                            <textarea
                                name="responsibilities"
                                className="textarea textarea-bordered w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                                placeholder="Write each responsibility on a new line"
                            ></textarea>
                        </div>
                    </div>
                    
                </fieldset>
                <button className='btn btn-primary w-full mt-5'>Submit job</button>
            </form>
        </div>
    );
};

export default AddJob;
