import React from 'react';
import { FaDollarSign, FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const HotJobCard = ({ data }) => {
    // console.log(data)
    const { title, company, company_logo, location, description, requirements, salaryRange, _id } = data;
    return (
        <div className="card bg-gray-200  shadow-sm">
            <div className='flex gap-2 m-2'>
                <figure>
                    <img className='w-14'
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <h4 className='font-semibold'>{company}</h4>
                    <p className='flex items-center gap-2'><FaLocationDot />{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className='flex flex-wrap gap-2'>
                    {
                        requirements.map((skill, index) => <p
                             key={index}
                            className='border rounded text-center hover:text-blue-500 hover:bg-gray-200'
                        >{skill}</p>)
                    }
                </div>
                <div className="card-actions justify-end">
                    <p className='flex items-center'>Salary: <FaDollarSign /> {salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>
                    <Link to={`/job/${_id}`}>
                        <button className="btn btn-primary">Apply</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;