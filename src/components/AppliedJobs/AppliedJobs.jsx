import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { getStoredJobApplication } from "../../utility/localstorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobFilter = filter => {
        if (filter === "all") {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === "onsite") {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Onsite");
            setDisplayJobs(onsiteJobs);
        }
        else if (filter === "remote") {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Remote");
            setDisplayJobs(remoteJobs);
        }

    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();

        if (jobs.length > 0) {
            const jobsApplied = [];

            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }

    }, [jobs]);

    return (
        <div>
            <h2>Jobs that I have Applied: {appliedJobs.length}</h2>
            <br />
            <details className="dropdown">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobFilter("all")}><a>All</a></li>
                    <li onClick={() => handleJobFilter("onsite")}><a>Onsite</a></li>
                    <li onClick={() => handleJobFilter("remote")}><a>Remote</a></li>
                </ul>
            </details>
            <br />
            <ul>
                {
                    displayJobs.map(job => <li key={job.id}><span>
                        <div className="border border-gray-300 rounded-xl card card-compact bg-base-100">
                            <div className="flex ml-4">
                                <figure className="mt-4"><img src={job.logo} width="117px" height="40px" alt="Shoes" /></figure>
                                <div className="ml-4 card-body">
                                    <h2 className="card-title">{job.job_title}</h2>
                                    <p>{job.company_name}</p>
                                    <div>
                                        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-2 text-[#7E90FE]">{job.remote_or_onsite}</button>
                                        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-2 text-[#7E90FE]">{job.job_type}</button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex ml-4 text-[#757575]">
                                <MdOutlineLocationOn className="mt-1 mr-2" />
                                <p>{job.location}</p>
                                <AiOutlineDollar className="mt-1 ml-6 mr-2" />
                                <p>{job.salary}</p>
                            </div>
                            <br />
                        </div>
                        <br />
                    </span></li>)
                }
            </ul>

        </div>
    );
};

export default AppliedJobs;