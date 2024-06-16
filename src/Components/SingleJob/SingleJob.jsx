import PropTypes from 'prop-types';
import './SingleJob.css';
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

const SingleJob = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description } = job;
    return (
        <div>

            <div className=" p-6 border-2 rounded-lg dark:text-gray-800">
                <img className='w-40 h-16' src={logo} alt="logo" />
                <div className="flex flex-col justify-between space-y-8 mt-4">
                    <div className="text-start flex flex-col gap-4">
                        <h2 className="text-3xl font-semibold tracking-wide">{job_title}</h2>
                        <p className="dark:text-gray-800">{company_name}</p>
                        <div className='space-x-4'>
                            <button type="button" className="btn px-8 py-3 gradient-text text-base font-bold border-2 rounded border-[#7E90FE]">{remote_or_onsite}</button>
                            <button type="button" className="btn px-8 py-3 text-base font-bold border-2 rounded border-[#7E90FE] gradient-text">{job_type}</button>
                        </div>
                        <div className='flex gap-4'>
                            <p className='flex gap-2'>
                                <span><IoLocationOutline className='text-2xl' /></span>
                                <span>{location}</span>
                            </p>
                            <p className='flex gap-2'>
                                <span><AiOutlineDollarCircle className='text-2xl' /></span>
                                <span>{salary}</span>
                            </p>
                        </div>
                    </div>
                    <Link to={`details/${id}`} className='w-fit'>
                        <button type="button" className="btn w-fit p-3 text-base font-bold tracking-wide rounded-md bg-gradient-to-r from-[#7E90FE] to-[#9197c8] dark:text-gray-50">View Details</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

SingleJob.propTypes = {
    job: PropTypes.object
};

export default SingleJob;