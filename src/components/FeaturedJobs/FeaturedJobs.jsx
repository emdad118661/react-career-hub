import { useEffect, useState } from "react";
import Job from "../Job/Job";
import { data } from "autoprefixer";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json(data))
        .then(data => setJobs(data));
    },[])
    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2>
                <p className="mt-3">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <br />
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.map(job =><Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;