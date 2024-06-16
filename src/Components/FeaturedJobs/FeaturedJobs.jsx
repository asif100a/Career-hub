import { useEffect, useState } from "react";
import SingleJob from "../SingleJob/SingleJob";
import { Helmet } from "react-helmet";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);

    return (
        <div className="text-center">
            
            <h2 className="text-5xl font-medium mb-3">Featured Jobs</h2>
            <p className="text-base font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-6 mt-16">
                {
                    jobs.slice(0, dataLength).map(job => <SingleJob key={job.id} job={job}></SingleJob>)
                }
            </div>
            <div className={dataLength === jobs.length && "hidden" || 'mt-16'}>
                <button onClick={() => setDataLength(jobs.length)} type="button" className="btn w-fit p-3 text-base font-bold tracking-wide rounded-md bg-gradient-to-r from-[#7E90FE] to-[#9197c8] dark:text-gray-50">View Details</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;