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
        const requirements = form.requirements.value;

        const salaryRange = {min, max,currency}; // এখানে array তৈরি করলাম

        const data = {
            company,
            title,
            location,
            company_logo,
            jobType,
            category,
            salaryRange,
            requirements
        };

        console.log(data);
    };

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex justify-center items-center p-6">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-xl rounded-xl p-8 w-full max-w-4xl"
            >
                <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
                    Add New Job
                </h2>

                <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="label font-semibold">Company Name</label>
                        <input type="text" name="companyName" className="input input-bordered w-full" placeholder="Company name" />
                    </div>

                    <div>
                        <label className="label font-semibold">Job Title</label>
                        <input type="text" name="jobTitle" className="input input-bordered w-full" placeholder="Job title" />
                    </div>

                    <div>
                        <label className="label font-semibold">Job Location</label>
                        <input type="text" name="jobLocation" className="input input-bordered w-full" placeholder="Job location" />
                    </div>

                    <div>
                        <label className="label font-semibold">Company URL</label>
                        <input type="text" name="companyUrl" className="input input-bordered w-full" placeholder="Company website" />
                    </div>

                    <div>
                        <label className="label font-semibold">Job Type</label>
                        <select name="jobType" className="select select-bordered w-full">
                            <option value="">Select job type</option>
                            <option>Full-Time</option>
                            <option>Intern</option>
                            <option>Part-Time</option>
                        </select>
                    </div>

                    <div>
                        <label className="label font-semibold">Job Field</label>
                        <select name="jobField" className="select select-bordered w-full">
                            <option value="">Select job field</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>Thinking</option>
                        </select>
                    </div>

                    <div>
                        <label className="label font-semibold">Currency</label>
                        <select name="currency" className="select select-bordered w-full">
                            <option value="">Select currency</option>
                            <option>USD</option>
                            <option>BDT</option>
                            <option>EUR</option>
                        </select>
                    </div>

                    <div>
                        <label className="label font-semibold">Salary Range</label>
                        <div className="flex gap-4">
                            <input type="text" name="salaryMin" className="input input-bordered w-full" placeholder="Min" />
                            <input type="text" name="salaryMax" className="input input-bordered w-full" placeholder="Max" />
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <label className="label font-semibold">Job Requirements</label>
                        <textarea name="requirements" className="textarea textarea-bordered w-full h-24" placeholder="Write each requirement on a new line"></textarea>
                    </div>

                    <div className="md:col-span-2">
                        <button type="submit" className="btn bg-blue-600 hover:bg-blue-700 text-white w-full py-3 text-lg rounded-lg shadow-md transition duration-300">
                            Submit Job
                        </button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default AddJob;
