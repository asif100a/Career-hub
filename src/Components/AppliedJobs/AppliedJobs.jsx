import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getItem } from "../../Utility/localStorage";
import { Helmet } from "react-helmet";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJob, setDisplayJob] = useState([]);

    const handleJobsFilter = filter => {
        if(filter === 'all'){
            setDisplayJob(appliedJobs);
        }
        else if(filter === 'remote'){
            const remoteJob = appliedJobs.filter(job => job.remote_or_onsite  === 'Remote');
            setDisplayJob(remoteJob);
        }
        else if(filter === 'onsite'){
            const remoteJob = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJob(remoteJob);
        }
    }

    useEffect(() => {
        const storedJobsIds = getItem()
        // console.log(storedJobsIds);
        // const intId = parseInt(storedJobsIds);

        if (storedJobsIds.length > 0) {
            // const applied = jobs.filter(job => storedJobsIds.includes(job.id));
            // console.log(jobs);
            // console.log(applied);

            const jobsApplied = [];
            for (const id of storedJobsIds) {
                const job = jobs.find(job => job.id === id)
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJob(jobsApplied);
        }
    }, [jobs]);

    return (
        <div>
            <Helmet>
                <title>Career Hub | Applied Jobs</title>
            </Helmet>
            <h1 className="text-3xl">Applied Jobs: {jobs.length}</h1>
            <details className="dropdown">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            <ul>
                {
                    displayJob.map(job => <li key={job.id}>
                        <span>{job.job_title} 
                        {job.company_name} 
                        {job.remote_or_onsite}</span>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;